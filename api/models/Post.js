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
    star: {
      model: 'star'
    },
    postid: {
      type: 'string'
    }
  }
}