

function playSound(audio){
	audio.currentTime = 0;
	audio.play();
}


window.addEventListener('keydown', function(e){
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	if(!audio) return;
	playSound(audio);
});