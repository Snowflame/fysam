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
    single: {
        type: 'boolean'
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
    }
  }
}