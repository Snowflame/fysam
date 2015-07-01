module.exports = {

	updatePool: function(req, res) {
		return this.updateSpotify(req, res);
	},

  	updateSpotify: function(req, res) {

  		var self = this;

		Network.find().exec(function (err, networks){

			if(err)
				res.send(err);
			else{
				for(i in networks){
					var network = networks[i];
					if (network.type == "spotify") {
						self.updateSpotifyPosts(req, res, network);
					} else if (network.type == "twitter") {
						self.updateTwitterPosts(req, res, network);
					}
				}
			}
		});
  	},

  	updateTwitterPosts: function(req, res, network) {
  		var self = this;
  		var Twitter = require('node-twitter');

  		var twitterSearchClient = new Twitter.SearchClient({
			consumer_key: 'ZyjB5qU2YFLGko1dYXnNesC92',
			consumer_secret: 'Y1MtuzK0QgiwgUyjbOtwYyD1HdvoSZeJ6CR5ONhIX4F2L93DGD',
			access_token_key: '3353738554-CBGs7S3u3mGixeD20X4CdxJ9qK9dcPGxPtJP38y',
			access_token_secret: 'HKSyeuGkGNQeKw0KR36fa4TTPqhUtHpAUp8R93jYLlV2L'
		});

		twitterSearchClient.search({'q': 'node.js'}, function(error, result) {
    if (error)
    {
        console.log('Error: ' + (error.code ? error.code + ' ' + error.message : error.message));
    }

    if (result)
    {
        console.log(result);
    }
});
  	},

  	updateSpotifyPosts: function(req, res, network) {
  		var self = this;
	  	var SpotifyWebApi = require('spotify-web-api-node');

		// credentials are optional
		var spotifyApi = new SpotifyWebApi();
		spotifyApi.getArtistAlbums(network.artistId)
			.then(function(data) {
				if(network.postCount < data.body.total) {
					var items = data.body.items;
					for (i in items) {
						var item = items[i];
						var post = Post.find({id:item.id}).exec(function (err, post){
							if(err)
								res.send(err);
							else if (post.length == 0) {
								Post.create({
									date: new Date(),
									url: item.external_urls.spotify,
									owner: network.id
								}).exec(function (err, created){
									console.log(created);
									console.log(err);
								});
								self.hi(req, res, i);
							}
						});
					}
    				return res.send("Hi there!");
				}

			}, function(err) {
			    console.error(err);
			}
		);
  	},

  	hi: function (req, res) {
  		console.log('hehehey:' + i)
  	}
};