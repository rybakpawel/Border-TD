const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const tileSize = 32
const rows = 32
const columns = 22

canvas.width = tileSize * rows
canvas.height = tileSize * columns

const game = new Game(tileSize, rows, columns)
game.startGame()