document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');
    const stopButton = document.getElementById('stop');
    const title = document.getElementById('title');
    const songs = document.getElementById('songs').getElementsByTagName('li');
    const progress = document.getElementById('progress');

    playButton.addEventListener('click', () => {
        audio.play();
        title.textContent = "Playing: " + audio.src.split('/').pop();
    });

    pauseButton.addEventListener('click', () => {
        audio.pause();
        title.textContent = "Paused: " + audio.src.split('/').pop();
    });

    stopButton.addEventListener('click', () => {
        audio.pause();
        audio.currentTime = 0;
        title.textContent = "Stopped: " + audio.src.split('/').pop();
    });

    Array.from(songs).forEach(song => {
        song.addEventListener('click', (event) => {
            audio.src = event.target.getAttribute('data-src');
            title.textContent = "Selected: " + event.target.textContent;
            audio.play();
        });
    });
    audio.addEventListener('timeupdate', () => {
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        progress.style.setProperty('--progress-width', `${progressPercent}%`);
});
});
