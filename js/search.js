// Script by JavascriptKit
// Modifiyed by TheCrafters001

var include_num = 1;
var bold = 1;

var s = new Array();

// Search Entries
s[0] = "Google^http://google.com/^Google Search Engine^google, search, engine";
s[1] = "DuckDuckGo^http://duckduckgo.com/^DuckDuckGo. Privacy, simplified.^duckduckgo, search, engine";
s[2] = "TheCrafters001^http://thecrafters001.github.io/^TheCrafters001 - Redefining Free^software, games, open-source, pokemon, free";
s[3] = "GitHub^http://github.com/^GitHub - The OpenSource Hub^software, games, open-source, github";
s[4] = "GMail^http://gmail.com/^GMail - Google Email^google, gmail, email, mail";
s[5] = "Google Drive^http://drive.google.com/^Google Drive - Google Cloud Storage^google, cloud, drive, storage";
s[6] = "Google Docs^http://docs.google.com/^Google Docs^google, docs, drive, storage, cloud";
s[7] = "Google Forms^http://docs.google.com/forms^Google Forms^google, docs, forms, drive, storage, cloud";
s[8] = "Google Classroom^http://classroom.google.com/^Google Classroom^google, docs, forms, drive, storage, cloud, classroom";
s[9] = "Google Fonts^http://fonts.google.com/^Google Fonts^google, fonts";
s[10] = "Google Translate^http://translate.google.com/^Google Translate^google, translate";
s[11] = "YouTube^http://youtube.com/^Broadcast Yourself^google, youtube, videos";
s[12] = "Blogger^http://www.blogger.com/^Create a unique and beautiful blog. It’s easy and free.^google, blog, videos, docs, drive";
s[13] = "Firebase^http://firebase.google.com/^Firebase helps mobile and web app teams succeed^google, firebase, developer";
s[14] = "GameJolt^http://gamejolt.com/^Games for the love of it^gamejolt, games, indie, free, paid, marketplace";
s[15] = "Itch^http://itch.io/^Download the latest indie games - itch.io^itch, itch.io, games, indie, free, paid, marketplace";
s[16] = "IndieDB^http://indiedb.com/^Rockin' Indie Games one pixel at a time - Indie DB^indiedb, db, games, indie, free, paid, marketplace";
s[17] = "OpenSearch^http://thecrafters001.github.io/OpenSearch/^OpenSearch, Keeping your data yours.^search, open-source";
s[18] = "YouTube Music^http://music.youtube.com^YouTube Music^youtube, music, videos, google";
s[19] = "Welcome to Steam^http://store.steampowered.com^Steam is the ultimate destination for playing, discussing, and creating games.^steam, games, software, marketplace, valve";
s[20] = "Origin^http://origin.com/^Get great PC and Mac games on Origin. Play the latest RPGs, shooters, Sims games & more. Try before you buy demos and trials and score total free games!^origin, games, market";

var cookies = document.cookie;
var p = cookies.indexOf("q=");

if (p != -1) {
	var st = p + 2;
	var en = cookies.indexOf(";", st);
	if (en == -1) {
		en = cookies.length;
	}
	var d = cookies.substring(st, en);
	d = unescape(d);
}
var od = d;
var m = 0;
if (d.charAt(0) == '"' && d.charAt(d.length - 1) == '"') {
	m = 1;
}

var r = new Array();
var co = 0;

if (m == 0) {
	var woin = new Array();
	var w = d.split(" ");
	for (var a = 0; a < w.length; a++) {
		woin[a] = 0;
		if (w[a].charAt(0) == '-') {
			woin[a] = 1;
		}
	}
	for (var a = 0; a < w.length; a++) {
		w[a] = w[a].replace(/^\-|^\+/gi, "");
	}
	a = 0;
	for (var c = 0; c < s.length; c++) {
		pa = 0;
		nh = 0;
		for (var i = 0; i < woin.length; i++) {
			if (woin[i] == 0) {
				nh++;
				var pat = new RegExp(w[i], "i");
				var rn = s[c].search(pat);
				if (rn >= 0) {
					pa++;
				} else {
					pa = 0;
				}
			}
			if (woin[i] == 1) {
				var pat = new RegExp(w[i], "i");
				var rn = s[c].search(pat);
				if (rn >= 0) {
					pa = 0;
				}
			}
		}
		if (pa == nh) {
			r[a] = s[c];
			a++;
		}
	}
	co = a;
}

if (m == 1) {
	d = d.replace(/"/gi, "");
	var a = 0;
	var pat = new RegExp(d, "i");
	for (var c = 0; c < s.length; c++) {
		var rn = s[c].search(pat);
		if (rn >= 0) {
			r[a] = s[c];
			a++;
		}
	}
	co = a;

}


function return_query() {
	document.jse_Form.d.value = od;
}

function num_jse() {
	document.write(co);
}

function out_jse() {
	if (co == 0) {
		document.write('Your search did not match any documents.<br>Make sure all keywords are spelt correctly.<br>Try different or more general keywords.<br>Your search also may not be in OpenSearch yet.');
		return;
	}
	for (var a = 0; a < r.length; a++) {
		var os = r[a].split("^");
		if (bold == 1 && m == 1) {
			var br = "<b>" + d + "</b>";
			os[2] = os[2].replace(pat, br);
		}
		if (include_num == 1) {
			document.write(a + 1, '. <a href="', os[1], '">', os[0], '</a><br>', os[2], '<p>');
		} else {
			document.write('<a href="', os[1], '">', os[0], '</a><br>', os[2], '<p>');
		}
	}

}
