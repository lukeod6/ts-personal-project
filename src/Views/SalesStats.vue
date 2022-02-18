<template>
  <section>
    <div>
      <KoDailyWidgets/>
    </div>
  </section>
</template>

<script lang="ts">
import KoDailyWidgets from '@/components/KoDailyWidgets.vue';

export default {
  name: 'Dashboard',
  components: {
    KoDailyWidgets,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>
