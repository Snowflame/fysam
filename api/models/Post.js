module.exports = {
  attributes: {
    artistId: {
      type: "string"
    },
    date: {
      type: 'date'
    },
    url: {
      type: 'string'
    },
    owner: {
      model: 'network'
    },
    postid: {
      type: 'string'
    }
  }
}