// home
let homeOriginScore = 0
let homeScore = document.getElementById('home-score')
homeScore.textContent = homeOriginScore

function homeAdd1(){
    homeOriginScore += 1
    homeScore.textContent = homeOriginScore
}
function homeAdd2(){
    homeOriginScore += 2
    homeScore.textContent = homeOriginScore
}
function homeAdd3(){
    homeOriginScore += 3
    homeScore.textContent = homeOriginScore
}


//guest
let guestOriginScore = 0
let guestScore = document.getElementById('guest-score')
guestScore.textContent = guestOriginScore

function guestAdd1(){
    guestOriginScore += 1
    guestScore.textContent = guestOriginScore
}
function guestAdd2(){
    guestOriginScore += 2
    guestScore.textContent = guestOriginScore
}
function guestAdd3(){
    guestOriginScore += 3
    guestScore.textContent = guestOriginScore
}


//refresh
function refresh() {
    let homeOriginScore = 0
    let guestOriginScore =0
    homeScore.textContent = homeOriginScore
    guestScore.textContent = guestOriginScore
}

