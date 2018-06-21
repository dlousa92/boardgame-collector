
function showDetails (e) {
  console.log(e.target)
  e.target.classList.add('showdetails')
}

const boardgame = document.body.querySelectorAll('.collectionbox')
console.log(boardgame)
for (let i = 0; i < boardgame.length; i++) {
  boardgame[i].addEventListener('mouseover', showDetails)
}
