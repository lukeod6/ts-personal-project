<template>

  <article>

    <h1>Internal Stats</h1>

    <div >
      <h2>Today</h2>

      <section>

        <div>
          <div>
            <article>
              <div>
                <p># of Sales</p>
              </div>
              <div>
                <p v-if="todayCounts">{{ todayCounts[0].salesCount }}</p>
              </div>
            </article>
          </div>

          <div>
            <article>
              <div>
                <p>Total Eth</p>
              </div>
              <div>
                <p v-if="todayCounts">{{ todayCounts[0].totalValueInEth }}</p>
              </div>
            </article>
          </div>

          <div>
            <article>
              <div>
                <p>Total secondary Eth</p>
              </div>
              <div>
                <p v-if="todayCounts">{{ todayCounts[0].secondarySalesValue }}</p>
              </div>
            </article>
          </div>

          <div>
            <article>
              <div>
                <p>Highest sale in Eth</p>
              </div>
              <div>
                <p v-if="todayCounts">{{ todayCounts[0].highestValueInEth }}</p>
                <article v-if="highestValueToken">
                  <div>
                    <p>
                      {{ highestValueToken[0].metadata.name }} by
                      <a :href="`https://knownorigin.io/${highestValueToken[0].metadata.artist}`" target="_blank">{{ highestValueToken[0].metadata.artist }}</a>
                    </p>
                  </div>

                  <div>
                    <p>
                      <a :href="`https://knownorigin.io/token/${highestValueToken[0].id}`" target="_blank">
                        <img :src="`https://cdn.knownorigin.io/cdn/images/network/1/edition/${highestValueToken[0].id}/card`" alt="Link to token"/>
                      </a>
                    </p>
                  </div>
                </article>
              </div>
            </article>
          </div>

          <div>
            <article>
              <div>
                <p>Bids placed</p>
              </div>
              <div>
                <p v-if="todayCounts">{{ todayCounts[0].bidsPlacedCount }}</p>
              </div>
            </article>
          </div>

          <div>
            <article>
              <div>
                <p>Bids accepted</p>
              </div>
              <div>
                <p v-if="todayCounts">{{ todayCounts[0].bidsAcceptedCount }}</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  </article>

</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
import { HighestValueSingleDayData, SingleDayData } from '@/APISchema';

export default {

  name: 'KoDailyWidgets',
  components: {},
  props: [],
  methods: {},
  setup() {
    const todayCounts = ref(null);
    const highestValueToken = ref(null);

    onMounted(async () => {
      const todayData: SingleDayData = await gqlKoClient.query(`
      {
        todayCounts: days(first: 1, orderBy: date, orderDirection: desc) {
            date
            transferCount
            salesCount
            editionsCount
            bidsAcceptedCount
            bidsPlacedCount
            bidsRejectedCount
            totalValueInEth
            highestValueInEth
            secondarySalesValue
            highestValueToken {
              id
            }
        }
      }`);

      todayCounts.value = todayData.data.todayCounts;

      const highestValueTokenData: HighestValueSingleDayData = await gqlKoClient.query(`
      {
          tokens(where: {id: ${todayCounts.value[0].highestValueToken.id}} orderDirection: desc) {
            id
            tokenURI
            birthTimestamp
            artistAccount
            lastSalePriceInEth
            metadata {
              name
              description
              image
              scarcity
              artist
          }
        }
      }`);

      highestValueToken.value = highestValueTokenData.data.tokens;
    });

    return {
      todayCounts,
      highestValueToken,
    };
  },
};
</script>
