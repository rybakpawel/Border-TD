class Projectile {
    constructor(position, index, speed) {
        this.canvas = document.querySelector('canvas')
        this.ctx = this.canvas.getContext('2d')
        this.position = position
        this.index = index
        this.speed = speed
        this.direction
        // this.img
    }

    drawProjectile() {
        this.ctx.beginPath()
        this.ctx.fillStyle = 'red'
        this.ctx.arc(this.position.x + game.tileSize / 2, this.position.y + game.tileSize / 2, 5, 0, Math.PI * 2)
        this.ctx.fill()

        // this.img = new Image()
        // this.img.onload = () => {
        //     this.ctx.drawImage(this.img, this.position.x, this.position.y)
        // }
        // this.img.src = `../assets/sprites/PNG/32/towerDefense_tile${this.index}.png`
        // console.log(this.img)
    }

    moveProjectile(x, y) {
        if (x && y) {
            const angle = Math.atan2(y - this.position.y, x - this.position.x)
            this.direction = {
                x: Math.cos(angle),
                y: Math.sin(angle)
            }
        }
        this.position.x += this.direction.x * this.speed
        this.position.y += this.direction.y * this.speed
        this.drawProjectile()
    }
}