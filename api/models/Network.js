module.exports = {
  attributes: {
    name: {
        type: 'string'
    },
    url: {
        type: 'string'
    },
    owner: {
        model: 'star'
    },
    postCount: {
        type: 'integer'
    },
    type: {
        type: 'string'
    },
    posts: {
    	collection: 'post',
    	via: 'owner'
    }
  }
}