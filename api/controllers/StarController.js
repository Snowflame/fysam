/**
 * StarController
 *
 * @description :: Server-side logic for managing stars
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getPosts: function(req, res) {
		Post.find({star:req.param('star')}).exec(function(err, data){
			if(!err){
				res.send(data);
			}
		})
  	},
	getTwitter: function(req, res) {
		var self = this;
		var request = require('request');
		request('https://api.qwant.com/api/search/web?count=10&locale=en_us&offset=0&q=Aaron%20Eckhart%20twitter&count=1', function (error, response, body) {
		  if (!error && response.statusCode == 200) {
		  		var data = JSON.parse(body);
		  		var urlparts = data.data.result.items[0].url.split('/');
		  		var name = urlparts[urlparts.length-1]
		  		self.saveNetwork(id, 'twitter', name, name);
		  }
		 });
  	},
  	saveNetwork: function(star, network, name, name){
  		Network.create({owner:star, type: network, artistId: name, name: name}).exec(function(err, data){
  			if(!err){
  				res.send(data);
  			} else {
  				res.send(err);
  			}
  		});
  	}
};

