var $start = document.querySelector('#start')
var $game = document.querySelector('#game')

$start.addEventListener('click', startGeam)

function startGeam() {
    $game.style.backgroundColor = '#fff'
    $start.classList.add('hide')

    renderBox()
}

function renderBox() {
    
}