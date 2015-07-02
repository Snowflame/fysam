/**
 * StarController
 *
 * @description :: Server-side logic for managing stars
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getPosts: function(req, res) {

		Star.findOne(req.param('star')).populate('networks').exec(function(err, data){
			var done = 0;
			for(var i = 0; i < data.networks.length; i++){
				Network.findOne(data.networks[i].id).populate('posts', { limit: 5, sort: 'createdAt DESC' }).exec(function(err, netdata){
					res.send(netdata)
				});

			}
		});
  	},
	getTwitter: function(req, res) {
		var self = this;
		var request = require('request');

		Star.find().exec(function(err, data){
			for(var idindex = 0; idindex < data.length;idindex++){
				(function(idindex) {
				  request('https://api.qwant.com/api/search/web?count=10&locale=en_us&offset=0&q='+encodeURIComponent(data[idindex].nickname)+'%20twitter&count=1', function (error, response, body) {
				  if (!error && response.statusCode == 200) {
				  		var bdata = JSON.parse(body);
				  		var urlparts = bdata.data.result.items[0].url.split('/');
				  		var name = urlparts[urlparts.length-1];
				  		self.saveNetwork(data[idindex].id, 'twitter', name, null);
				  }
				 });
				})(idindex);
			}

			res.send('maby');

		});


  	},
  	saveNetwork: function(star, network, artistId, name){
  		Network.create({owner:star, type: network, artistId: artistId, name: name}).exec(function(err, data){
  		});
  	}
};

