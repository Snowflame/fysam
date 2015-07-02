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
    			res.send("Hi there!");
			}
		});
  	},

  	updateTwitterPosts: function(req, res, network) {
  		var self = this;
  		var Twitter = require('twitter');

  		var client = new Twitter({
			consumer_key: 'ZyjB5qU2YFLGko1dYXnNesC92',
			consumer_secret: 'Y1MtuzK0QgiwgUyjbOtwYyD1HdvoSZeJ6CR5ONhIX4F2L93DGD',
			access_token_key: '3353738554-CBGs7S3u3mGixeD20X4CdxJ9qK9dcPGxPtJP38y',
			access_token_secret: 'HKSyeuGkGNQeKw0KR36fa4TTPqhUtHpAUp8R93jYLlV2L'
		});

		var query = 'from%3A' + network.artistId;
		client.get('search/tweets', {q: query, count:150}, function(error, tweets, response){
			console.log('here');
			var statuses = tweets.statuses;
			for (i in statuses) {
				var status = statuses[i];
				if(status.retweeted_status == undefined) {
					var url = 'https://twitter.com/' + status.user.screen_name + '/status/' + status.id_str;
					self.savePost(status.id_str, status.created_at, url, network, req.param('starid'));
				}
			}
		});
  	},

  	updateSpotifyPosts: function(req, res, network) {
  		var self = this;
	  	var SpotifyWebApi = require('spotify-web-api-node');

		var spotifyApi = new SpotifyWebApi();
		spotifyApi.getArtistAlbums(network.artistId)
			.then(function(data) {
				if(network.postCount < data.body.total) {
					var items = data.body.items;
					for (i in items) {
						var item = items[i];
						self.savePost(item.postid, new Date(), item.external_urls.spotify, network);
					}
				}

			}, function(err) {
			    console.error(err);
			}
		);
  	},

  	savePost: function(postId, date, url, network, starid) {
		var post = Post.find({postid:postId}).exec(function (err, post){
			if(err)
				res.send(err);
			else if (post.length == 0) {
				Post.create({
					postid: postId,
					date: date,
					url: url,
					star: starid,
					owner: network.id
				}).exec(function (err, created){
					if (err) {
						console.log(err);
					} else {
						console.log(created);
					}
				});
			}
		});
  	}
};