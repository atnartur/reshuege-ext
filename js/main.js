/*
* @Author: Artur Atnagulov (ClienDDev team)
*/

$(document).ready(function(){
	console.log('reshuege ext init')
	setTimeout(function(){
		$('body div[style="margin:0;padding:0; bottom:10px; right:10px; position:fixed; border:none; z-index:1"]').detach();
	}, 2000);
});