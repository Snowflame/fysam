/**
 * LayoutController
 *
 * @description :: Server-side logic for managing Layouts & Contentelments
 * @module model/layout
*/

module.exports = {
	sendParical : function (req, res) {
		res.view('parc/'+req.param('file'),{_layoutFile: 'clear.ejs'});
	}
};