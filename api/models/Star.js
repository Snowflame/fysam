module.exports = {
  attributes: {
  	imgid: {
  		type: 'string'  		
  	},
    nickname: {
      type: 'string'
    },
    birth: {
    	type: 'date'
    },
    description: {
    	type: 'text'
    },
    proffession: {
    	type: 'string'
    },
    familystatus: {
        type: 'string'
    },
    imageUrl: {
       type: 'string'
    },
    followers: {
      collection: 'user',
      via: 'stars'
    },
    networks: {
    	collection: 'network',
    	via: 'owner'
    },
    posts: {
      collection: 'post',
      via: 'star'
    }
  }
}