	var html5_audiotypes={ //define list of audio file extensions and their associated audio types. Add to it if your specified audio file isn't on this list:
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

var clicksound=createsoundbite("SoundClips/button1.mp3")
var flexin=createsoundbite("SoundClips/Flexin'.mp3")
var flexinshort=createsoundbite("SoundClips/Flexin' short.mp3")
var drunk=createsoundbite("SoundClips/Areyoudrunk.mp3")
var barmitzvah=createsoundbite("SoundClips/barmitzvah.mp3")
var high=createsoundbite("SoundClips/morethanhigh.mp3")
var started=createsoundbite("SoundClips/started.mp3")
var love=createsoundbite("SoundClips/wannamakelove.mp3")
var cake=createsoundbite("SoundClips/cake.mp3")
var stfu=createsoundbite("SoundClips/Hoe stfu.mp3")
var ill=createsoundbite("SoundClips/Ill nigga alert.mp3")


window.addEventListener("keypress", doKeyDown, true);

function doKeyDown(e){
	alert(e.keyCode);
	if (e.keyCode == 119){
		stfu.playclip();
	}
}