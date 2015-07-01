module.exports = {
  attributes: {
    mail: {
      type: 'string'
    },
    stars: {
      collection: 'star',
      via: 'followers'
    }
  }  
}