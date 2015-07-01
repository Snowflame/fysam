module.exports = {

	updatePool: function(req, res) {
		return this.updateSpotify(req, res);
	},

  	updateSpotify: function(req, res) {

  		var self = this;

		Network.find({type:"spotify"}).exec(function (err, networks){

			if(err)
				res.send(err);
			else{
				for(i in networks){
					self.updateSpotifyPosts(req, res, networks[i]);
				}
			}
		});
  	},

  	updateSpotifyPosts: function(req, res, network) {
  		var self = this;
	  	var SpotifyWebApi = require('spotify-web-api-node');

		// credentials are optional
		var spotifyApi = new SpotifyWebApi({
		 	clientId : 'fcecfc72172e4cd267473117a17cbd4d',
	  		clientSecret : 'a6338157c9bb5ac9c71924cb2940e1a7',
		  	redirectUri : 'http://www.example.com/callback'
		});
		spotifyApi.getArtistAlbums(network.artistId)
			.then(function(data) {
				if(network.postCount < data.body.total) {
					var items = data.body.items;
					for (i in items) {
						var item = items[i];
						console.log(item);
						var post = Post.find({id:item.id}).exec(function (err, post){
							if(err)
								res.send(err);
							else if (post.length == 0) {
								Post.create({
									date: new Date(),
									url: item.external_urls,
									owner: network
								}).exec(function createCB(err, created){
									console.log('Created post');
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