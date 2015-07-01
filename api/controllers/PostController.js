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