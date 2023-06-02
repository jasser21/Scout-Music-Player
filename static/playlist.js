const musicContainer = document.querySelector('.music-container');
const progressContainer = document.querySelector('.progress-container');
const progress = document.querySelector('#progress');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');
const lyrics = document.querySelector('#lyrics');
var songs = ['إلى الربى', 'حالي حالي حال', 'على خطى أجدادنا الأماجد', 'كشاف يا وجه العلا', 'لعزة وجهك هذا النشيد', 'نحن اشبال البلاد', 'نحن الشباب', 'نشيد ( شدوا الرحال وهيا معنا)','خبرينا يا ليالي','scout دوما شجاع'];
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
let songIndex = songs.indexOf(id);
console.log({id:id});
var  thisSong =id;
audio.src=''
if(id){
    getSong(thisSong)
    audio.src = `./music/${thisSong}.mp3`;
    play();
    

}
function getSong(thisSong) {
    title.innerText = thisSong;
    audio.src = `./music/${thisSong}.mp3`;
    cover.src = `./img/${thisSong}.png`;
    lyrics.href = `./lyrics/${thisSong}.html`;
    cover.alt = thisSong;

    progress.max = 100;
    progress.value=audio.currentTime;

}
if(audio.paused){
    setInterval(() => {
        progress.value=audio.currentTime*100/audio.duration;
        console.log({d:audio.duration,crt: audio.currentTime,mx:progress.max,prg:progress.value});
    }, 500)
}
progress.onchange = function(){
    audio.currentTime =  progress.value*audio.duration/100;
}
function prev() {
    songIndex--;
    if (songIndex < 0) songIndex = songs.length - songIndex;
    thisSong = songs[songIndex];
    getSong(thisSong);
    play()
}
function next() {
    songIndex++;
    if (songIndex >= songs.length) songIndex = songIndex - songs.length;
    thisSong = songs[songIndex];
    getSong(thisSong);
    play();
}

function play() {
    thisSong = songs[songIndex];
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.style.backgroundColor = '#3f3d56a2';
    
    audio.play();    
}   
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
      // If the video is paused, play it. If it's playing, pause it.
      if (audio.paused) {
        play();
      } else {
        pause();
      }
    }
  });
function pause() {
    playState = false;
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.style.backgroundColor = 'rgba(245, 245, 245, 0.1)';
    
    audio.pause();
}
playBtn.addEventListener('click', () => {
    const isplaying = musicContainer.classList.contains('play');
    if (isplaying) pause();
    else play();
}
)
nextBtn.addEventListener('click', () => {
    next();
})
prevBtn.addEventListener('click', () => {
    prev();
})
for (let i = 0; i < songs.length; i++){
const a = document.querySelector("."+String(i));
console.log("this is a from script tag "+a.classlist);
a.addEventListener('click', () => {
    thisSong = songs[i];
    getSong(thisSong);
})
}
const forwardIcon = document.getElementById('fa-step-forward');
const backwardIcon = document.getElementById('backward');

forwardIcon.addEventListener('click', () => {
    forwardIcon.style.color = '#3f3d56a2';
    setTimeout(() => {
      forwardIcon.style.color = '';
    }, 800);
});

backwardIcon.addEventListener('click', () => {
    backwardIcon.style.color = '#3f3d56a2';
    setTimeout(() => {
      backwardIcon.style.color = '';
    }, 800);
});

