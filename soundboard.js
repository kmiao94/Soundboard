var html5_audiotypes={
	"mp3": "audio/mpeg",
	"mp4": "audio/mp4",
	"ogg": "audio/ogg",
	"wav": "audio/wav"
}
function createsoundbite(sound){
	var html5audio=document.createElement('audio')
	if (html5audio.canPlayType){ //check support for HTML5 audio
		for (var i=0; i<arguments.length; i++){
			var sourceel=document.createElement('source')
			sourceel.setAttribute('src', arguments[i])
			if (arguments[i].match(/\.(\w+)$/i))
				sourceel.setAttribute('type', html5_audiotypes[RegExp.$1])
			html5audio.appendChild(sourceel)
		}
		html5audio.load()
		html5audio.playclip=function(){
			html5audio.pause()
			html5audio.currentTime=0
			html5audio.play()
		}
		return html5audio
	}
	else{
		return {playclip:function(){throw new Error("Your browser doesn't support HTML5 audio unfortunately")}}
	}
}

var flexinshort=createsoundbite("SoundClips/NWTS/flexinshort.mp3")
var barmitzvah=createsoundbite("SoundClips/NWTS/barmitzvah.mp3")
var high=createsoundbite("SoundClips/NWTS/morethanhigh.mp3")
var started=createsoundbite("SoundClips/NWTS/started.mp3")
var sftb=createsoundbite("SoundClips/NWTS/startedfromthebottom.mp3")
var love=createsoundbite("SoundClips/NWTS/wannamakelove.mp3")
var cake=createsoundbite("SoundClips/NWTS/cake.mp3")
var stfu=createsoundbite("SoundClips/NWTS/hoestfu.mp3")
var ill=createsoundbite("SoundClips/NWTS/illniggaalert.mp3")
var phone=createsoundbite("SoundClips/NWTS/myphone.mp3")
var neverlovedus=createsoundbite("SoundClips/NWTS/neverlovedus.mp3")
var child=createsoundbite("SoundClips/NWTS/children.mp3")
var remember=createsoundbite("SoundClips/NWTS/remember.mp3")
var mawfucka=createsoundbite("SoundClips/NWTS/mawfucka.mp3")
var talkmore=createsoundbite("SoundClips/NWTS/talkmore.mp3")
var odb=createsoundbite("SoundClips/NWTS/odb.mp3")
var courtney=createsoundbite("SoundClips/NWTS/courtney.mp3")
var hotlove=createsoundbite("SoundClips/NWTS/hotlove.mp3")
var platinum=createsoundbite("SoundClips/NWTS/platinum.mp3")
var allwedo=createsoundbite("SoundClips/NWTS/allwedo.mp3")
var intro=createsoundbite("SoundClips/NWTS/intro.mp3")
var nwts=createsoundbite("SoundClips/NWTS/nwts.mp3")


window.addEventListener("keypress", doKeyDown, true);

function doKeyDown(e){
	if (e.keyCode == 113){        //q
		intro.playclip();
	} else if (e.keyCode == 119){ //w
		phone.playclip();
	} else if (e.keyCode == 101){ //e
		started.playclip();
	} else if (e.keyCode == 114){ //r
		flexinshort.playclip();
	} else if (e.keyCode == 116){ //t
		neverlovedus.playclip();
	} else if (e.keyCode == 121){ //y
		child.playclip();
	} else if (e.keyCode == 117){ //u
		cake.playclip();
	} else if (e.keyCode ==  97){ //a
		barmitzvah.playclip();
	} else if (e.keyCode == 115){ //s
		high.playclip();
	} else if (e.keyCode == 100){ //d
		remember.playclip();
	} else if (e.keyCode == 102){ //f
		mawfucka.playclip();
	} else if (e.keyCode == 103){ //g
		courtney.playclip();
	} else if (e.keyCode == 104){ //h
		sftb.playclip();
	} else if (e.keyCode == 106){ //j
		ill.playclip();
	} else if (e.keyCode == 122){ //z
		talkmore.playclip();
	} else if (e.keyCode == 120){ //x
		allwedo.playclip();
	} else if (e.keyCode ==  99){ //c
		hotlove.playclip();
	} else if (e.keyCode == 118){ //v
		platinum.playclip();
	} else if (e.keyCode ==  98){ //b
		odb.playclip();
	} else if (e.keyCode == 110){ //n
		nwts.playclip();
	} else if (e.keyCode == 109){ //m
		stfu.playclip();
	}
}

$(document).ready(function() {
	$(".hint").click(function(e) {
		e.stopPropagation();
		$(".overlay, .popup").fadeIn();
	});
	$("body").click(function(e) {
		$(".overlay, .popup").fadeOut();
	});
});