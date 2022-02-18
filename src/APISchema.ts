
export type SingleDayData = {
  "data": {
  "todayCounts": [
    {
      "date": string,
      "transferCount": string,
      "salesCount": string,
      "editionsCount": string,
      "bidsAcceptedCount": string,
      "bidsPlacedCount": string,
      "bidsRejectedCount": string,
      "totalValueInEth": string,
      "highestValueInEth": string,
      "secondarySalesValue": string,
      "highestValueToken": {
        "id": string
      }
    }
  ]
}
}

export type HighestValueSingleDayData = {
  "data": {
    "tokens": [
      {
        "id": string,
        "tokenURI": string,
        "birthTimestamp": string,
        "artistAccount": string,
        "lastSalePriceInEth": string,
        "metadata": {
          "name": string,
          "description": string,
          "image": string,
          "scarcity": string,
          "artist": string
        }
      }
    ]
  }
}
