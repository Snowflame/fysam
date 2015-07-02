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

		  	var proffession = null;
		  	var description = null;
		  	var nickname = null;
		  	var imgid = null;
		  	var familyStatus = null;

		  	var stars = [];
		    for(i in data){
		    	console.log(data[i].basicData);
		    	if(typeof data[i].basicData != 'undefined' && data[i].basicData){

		    		if( typeof data[i].basicData.aliases[0] != 'undefined' && data[i].basicData.aliases[0] != null)
		    			nickname = data[i].basicData.aliases[0];
		    		else 
		    			nickname = null;

		    		if( typeof data[i].basicData.biography != 'undefined' && data[i].basicData.biography != null)
		    			description = data[i].basicData.biography;
		    		else 
		    			description = null;

		    		if( typeof data[i].basicData.professions != 'undefined' && data[i].basicData.biography != null)
		    			proffession = data[i].basicData.professions;
		    		else 
		    			proffession = null;

		    		if( typeof data[i].basicData.familyStatus != 'undefined' && data[i].basicData.familyStatus != null)
		    			familyStatus = data[i].basicData.familyStatus;
		    		else 
		    			familyStatus = null;

		    		if( typeof data[i].basicData.professions != 'undefined' && data[i].basicData.biography != null)
		    			proffession = data[i].basicData.professions;
		    		else 
		    			proffession = null;
		    	}

			    if( typeof data[i].profilePicture != 'undefined' &&	data[i].profilePicture != null)
			    	if(typeof data[i].profilePicture.pictureId != 'undefined' && data[i].profilePicture.pictureId != null)
			    		imgid = data[i].profilePicture.pictureId;
			    	else 
			    		imgid = null;
			    else 
			    	imgid = null;

				if(nickname)
			    	stars.push({familystatus: familyStatus, proffession: data[i].basicData.professions, description: data[i].basicData.biography,nickname: data[i].basicData.aliases[0], imgid: data[i].profilePicture.pictureId});
			    
		    }
		    Star.create(stars).exec(function (err, created){
			  res.send('done');
			});
		  }

		});
	},
	getriri: function (req, res){
		var request = require('request');

		request('http://www.celepedia.de/celepedia/rest/stars/star/slug/rihanna-02', function (error, response, body) {
		  if (!error && response.statusCode == 200) {
		  	var data = JSON.parse(body);

		  	var proffession = null;
		  	var description = null;
		  	var nickname = null;
		  	var imgid = null;
		  	var familyStatus = null;

		  	var stars = [];
		    for(i in data){
		    	console.log(data[i].basicData);
		    	if(typeof data[i].basicData != 'undefined' && data[i].basicData){

		    		if( typeof data[i].basicData.aliases[0] != 'undefined' && data[i].basicData.aliases[0] != null)
		    			nickname = data[i].basicData.aliases[0];
		    		else 
		    			nickname = null;

		    		if( typeof data[i].basicData.biography != 'undefined' && data[i].basicData.biography != null)
		    			description = data[i].basicData.biography;
		    		else 
		    			description = null;

		    		if( typeof data[i].basicData.professions != 'undefined' && data[i].basicData.biography != null)
		    			proffession = data[i].basicData.professions;
		    		else 
		    			proffession = null;

		    		if( typeof data[i].basicData.familyStatus != 'undefined' && data[i].basicData.familyStatus != null)
		    			familyStatus = data[i].basicData.familyStatus;
		    		else 
		    			familyStatus = null;

		    		if( typeof data[i].basicData.professions != 'undefined' && data[i].basicData.biography != null)
		    			proffession = data[i].basicData.professions;
		    		else 
		    			proffession = null;
		    	}

			    if( typeof data[i].profilePicture != 'undefined' &&	data[i].profilePicture != null)
			    	if(typeof data[i].profilePicture.pictureId != 'undefined' && data[i].profilePicture.pictureId != null)
			    		imgid = data[i].profilePicture.pictureId;
			    	else 
			    		imgid = null;
			    else 
			    	imgid = null;

				if(nickname)
			    	stars.push({familystatus: familyStatus, proffession: data[i].basicData.professions, description: data[i].basicData.biography,nickname: data[i].basicData.aliases[0], imgid: data[i].profilePicture.pictureId});
			    
		    }
		    Star.create(stars).exec(function (err, created){
			  res.send('done');
			});
		  }

		});
	}
};