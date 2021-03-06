var name		= "Un-Confounded Compounder";
var collection_type	= 0;
var is_secret		= 0;
var desc		= "Concocted 41 compounds with a Test Tube";
var status_text		= "Congratulations on concocting 41 compounds! Wear your new Un-Confounded Compounder Badge with honour.";
var last_published	= 1316303643;
var is_shareworthy	= 0;
var url		= "unconfounded-compounder";
var category		= "alchemy";
var url_swf		= "http:\/\/c2.glitch.bz\/achievements\/2011-05-09\/unconfounded_compounder_1304984047.swf";
var url_img_180		= "http:\/\/c2.glitch.bz\/achievements\/2011-05-09\/unconfounded_compounder_1304984047_180.png";
var url_img_60		= "http:\/\/c2.glitch.bz\/achievements\/2011-05-09\/unconfounded_compounder_1304984047_60.png";
var url_img_40		= "http:\/\/c2.glitch.bz\/achievements\/2011-05-09\/unconfounded_compounder_1304984047_40.png";
function on_apply(pc){
	
}
var conditions = {
	224 : {
		type	: "counter",
		group	: "making_tool",
		label	: "test_tube",
		value	: "41"
	},
};
function onComplete(pc){ // generated from rewards
	var multiplier = pc.buffs_has('gift_of_gab') ? 1.2 : pc.buffs_has('silvertongue') ? 1.05 : 1.0;
	multiplier += pc.imagination_get_achievement_modifier();
	if (/completist/i.exec(this.name)) { 
		 var level = pc.stats_get_level(); 
		 if (level > 4) {  
				multiplier *= (pc.stats_get_level()/4); 
		} 
	} 
	pc.stats_add_xp(round_to_5(75 * multiplier), true);
	pc.stats_add_favor_points("ti", round_to_5(10 * multiplier));
	if(pc.buffs_has('gift_of_gab')) {
		pc.buffs_remove('gift_of_gab');
	}
	else if(pc.buffs_has('silvertongue')) {
		pc.buffs_remove('silvertongue');
	}
}
var rewards	= {
	"xp"	: 75,
	"favor"	: {
		"giant"		: "ti",
		"points"	: 10
	}
};

//log.info("unconfounded_compounder.js LOADED");

// generated ok (NO DATE)
