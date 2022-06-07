class Enemy {
    constructor(index, color, speed, health, reward, direction) {
        this.canvas = document.querySelector('canvas')
        this.ctx = this.canvas.getContext('2d')
        this.position = {
            x: Math.random() * ((game.tileSize * 6 - game.tileSize) - (game.tileSize * 5 - game.tileSize)) + (game.tileSize * 5 - game.tileSize),
            y: 0
        }
        this.index = index
        this.color = color
        this.speed = speed
        this.health = health
        this.reward = reward
        this.direction = direction
        this.img
    }

    drawEnemy() {
        this.img = new Image()
        this.img.onload = () => {
            this.ctx.drawImage(this.img, this.position.x, this.position.y)
        }
        this.img.src = `../assets/sprites/PNG/${game.tileSize}/towerDefense_tile${this.index}.png`
    }

    moveEnemy(direction) {
        this.direction = direction
        switch (this.direction) {
            case 'down':
                this.position.y += this.speed
                if (this.color === 'green') this.index = '300'
                else if (this.color === 'red') this.index = '305'
                else if (this.color === 'orange') this.index = '308'
                else if (this.color === 'grey') this.index = '311'
                this.img.src = `../assets/sprites/PNG/${game.tileSize}/towerDefense_tile${this.index}.png`
                break
            case 'up':
                this.position.y -= this.speed
                if (this.color === 'green') this.index = '301'
                else if (this.color === 'red') this.index = '303'
                else if (this.color === 'orange') this.index = '306'
                else if (this.color === 'grey') this.index = '309'
                this.img.src = `../assets/sprites/PNG/${game.tileSize}/towerDefense_tile${this.index}.png`
                break
            case 'left':
                this.position.x -= this.speed
                if (this.color === 'green') this.index = '302'
                else if (this.color === 'red') this.index = '304'
                else if (this.color === 'orange') this.index = '307'
                else if (this.color === 'grey') this.index = '310'
                this.img.src = `../assets/sprites/PNG/${game.tileSize}/towerDefense_tile${this.index}.png`
                break
            case 'right':
                this.position.x += this.speed
                if (this.color === 'green') this.index = '245'
                else if (this.color === 'red') this.index = '246'
                else if (this.color === 'orange') this.index = '247'
                else if (this.color === 'grey') this.index = '248'
                this.img.src = `../assets/sprites/PNG/${game.tileSize}/towerDefense_tile${this.index}.png`
                break
            default:
                break
        }        
    }
}