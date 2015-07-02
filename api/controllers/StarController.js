/**
 * StarController
 *
 * @description :: Server-side logic for managing stars
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getPosts: function(req, res, network) {
		Post.find({star:req.param('star')}).exec(function(err, data){
			if(!err){
				res.send(data);
			}
		})
  	}
};

