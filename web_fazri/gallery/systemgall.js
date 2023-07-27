const dis_friend = document.getElementById('gal-friend');
const dis_game = document.getElementById('gal-game');
const dis_bike = document.getElementById('gal-bike');
function game() {
    dis_game.removeAttribute('class');
    dis_game.removeAttribute('style');
    dis_friend.style.display = 'none' ;
    dis_friend.setAttribute ('class', 'friend');
    dis_bike.style.display = 'none' ;
}

function friend() {
    dis_friend.removeAttribute('class');
    dis_friend.removeAttribute('style');
    dis_game.style.display = 'none' ;
    dis_game.setAttribute ('class', 'game');
    dis_bike.style.display = 'none' ;
}

function bike() {
    dis_bike.removeAttribute('class');
    dis_bike.removeAttribute('style');
    dis_game.style.display = 'none' ;
    dis_game.setAttribute ('class', 'game');
    dis_friend.style.display = 'none' ;

    
}


