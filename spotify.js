console.log("Welcome to spotify");
let songIndex = 0;
let audio1 = new Audio('songs/1.mp3');
/**let audio2 = new Audio('2.mp3');
let audio3 = new Audio('3.mp3');
let audio4 = new Audio('4.mp3');
let audio5 = new Audio('5.mp3');
let audio6 = new Audio('6.mp3');
let audio7 = new Audio('7.mp3');
let audio8 = new Audio('8.mp3');
let audio9 = new Audio('9.mp3');**/
let gif = document.getElementById('gif');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songName: "8 Parche", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Butter", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "At my worst", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Doobey", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Perfect", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Excuses", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Milo Na Tum", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Srivalli", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Baari", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "We don't talk anymore", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
]
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
//listen to Events
masterPlay.addEventListener('click', () => {
    if (audio1.paused || audio1.currentTime <= 0) {
        audio1.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audio1.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
audio1.addEventListener('timeupdate', () => {
    progress = parseInt((audio1.currentTime / audio1.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audio1.currentTime = myProgressBar.value * audio1.duration / 100;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);//e.target se jaha click us jagah point krega
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audio1.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audio1.currentTime = 0;
        audio1.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
    })
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audio1.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audio1.currentTime = 0;
    audio1.play();
    gif.style.opacity = 1;
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex;
    }
    else {
        songIndex -= 1;
    }
    audio1.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audio1.currentTime = 0;
    audio1.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})