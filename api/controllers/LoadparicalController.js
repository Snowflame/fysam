/**
 * LayoutController
 *
 * @description :: Server-side logic for managing Layouts & Contentelments
 * @module model/layout
*/

module.exports = {
	sendParical : function (req, res) {
		res.view('parc/'+req.param('file'),{_layoutFile: 'clear.ejs'});
	},
	getURlRequest: function (req, res){
		var request = require('request');

		request('http://www.celepedia.de/celepedia/rest/stars/name/letter/'+req.param('letter')+'?limit=50', function (error, response, body) {
		  if (!error && response.statusCode == 200) {
		  	var data = JSON.parse(body);
		  	var stars = [];
		    for(i in data){
		    	if(typeof data[i].basicData != 'undefined' && data[i].basicData != null){
			    	if(typeof data[i].profilePicture != 'undefined' && data[i].profilePicture != null){
			    		if(typeof data[i].basicData.aliases[0] != 'undefined' && typeof data[i].profilePicture.pictureId != 'undefined' ){
			    			stars.push({name: data[i].basicData.aliases[0], imgid: data[i].profilePicture.pictureId});
			    		}
			    	}
			    }
		    }
		    Star.create(stars).exec(function (err, created){
			  res.send('done');
			});
		  }

		});

	}
};