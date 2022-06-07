class Tower {
    constructor(x, y, index, level = 1) {
        this.canvas = document.querySelector('canvas')
        this.ctx = this.canvas.getContext('2d')
        this.map = document.querySelector('.map')
        this.position = {
            x,
            y
        }
        this.index = index
        this.level = level
        this.range
        this.damage
        this.cost
        this.active = false
        this.projectiles = []
    }

    drawTower() {
        switch (this.index) {
            case '203':
                this.range = 200
                this.damage = 20
                this.cost = 25
                break
            case '204':
                this.range = 130
                this.damage = 70
                this.cost = 35
                break
            case '205':
                this.range = 170
                this.damage = 55
                this.cost = 40
                break
            case '206':
                this.range = 140
                this.damage = 100
                this.cost = 75
                break
        }
        const newField = document.createElement("img")
        newField.classList.add("field")
        newField.src = `../assets/sprites/PNG/${game.tileSize}/towerDefense_tile${this.index}.png`
        newField.style.top = `${this.position.y}px`
        newField.style.left = `${this.position.x}px`
        this.map.appendChild(newField)
    }

    clickTower() {
        if (this.active) return false
        game.towers.forEach(tower => {
            tower.active = false
        })
        this.active = true
        const animate = () => {
            this.ctx.beginPath()
            this.ctx.fillStyle = "rgba(0, 0, 0, 0.3)"
            this.ctx.arc(this.position.x + game.tileSize / 2, this.position.y + game.tileSize / 2, this.range, 0, Math.PI * 2)
            this.ctx.fill()
            if (this.active) requestAnimationFrame(animate)  
        }
        animate()
    }

    shotEnemy(enemies, index) {
        if (Math.pow((enemies[index].position.x - this.position.x), 2) + Math.pow((enemies[index].position.y - this.position.y), 2) < Math.pow(this.range, 2)) {
            if (this.projectiles.length < 1) {
                let projectilePosition = JSON.parse(JSON.stringify(this.position));
                this.projectiles.push(new Projectile(projectilePosition, '272', 10))
            } else {
                this.projectiles.forEach(projectile => {
                    const dist = Math.hypot(projectile.position.x - enemies[index].position.x, projectile.position.y - enemies[index].position.y)
                    if (dist < 20) {
                        this.projectiles.pop()
                        enemies[index].health -= this.damage
                    } 
                    if (projectile.position.x > this.position.x + this.range ||
                        projectile.position.x < this.position.x - this.range || 
                        projectile.position.y > this.position.y + this.range || 
                        projectile.position.y < this.position.y - this.range) this.projectiles.pop()
                    if (projectile.position.x === this.position.x && projectile.position.y === this.position.y) projectile.moveProjectile(enemies[index].position.x, enemies[index].position.y)
                    else projectile.moveProjectile()
                })
            }
        } else if (enemies.length > index + 1) this.shotEnemy(enemies, index + 1)
    }

    upgradeTower() {
        
    }
}