import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY_LOCAL = 'videoplayer-current-time';
    
player.on('timeupdate', throttle(function (currentTime) {
    const seconds = currentTime.seconds;
    localStorage.setItem(KEY_LOCAL, JSON.stringify(seconds))}, 1000));

const resalt = JSON.parse(localStorage.getItem(KEY_LOCAL));
//console.log(resalt);

player.setCurrentTime(resalt).then(function(seconds) {
   }).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});

