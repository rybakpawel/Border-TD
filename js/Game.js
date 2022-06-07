class Game {
    constructor(tileSize, rows, columns) {
        this.start = document.querySelector('button')
        this.ui = document.querySelector('.ui')
        this.tileSize = tileSize
        this.rows = rows
        this.columns = columns
        this.lives = 20
        this.cash = 100
        this.map = new Map()
        this.enemies = []
        this.towers = []
        this.waves = [
            {
                stage: 1,
                enemies: {
                    green: 12,
                    red: 9,
                    orange: 6,
                    grey: 3
                }
            },
            {
                stage: 2,
                enemies: {
                    green: 10,
                    red: 5,
                    orange: 2,
                    grey: 1
                }
            },
            {
                stage: 3,
                enemies: {
                    green: 0,
                    red: 0,
                    orange: 0,
                    grey: 8
                }
            }
        ]
    }

    startGame() {
        this.start.addEventListener('click', () => {
            this.ui.style.display = 'flex' 
            this.start.style.display = 'none'
            this.map.drawMap()
            this.map.click()

            let stage = 1
            let animateActive = true

            const wave = new Wave(this.waves[stage - 1].stage, this.waves[stage - 1].enemies)
            this.enemies = wave.initWave()
  
            for (let i = 0; i < this.enemies.length; i++) {
                this.enemies[i].drawEnemy()
            }
        
            const animate = () => {
                if (animateActive) {
                    if (this.enemies.length > 0) requestAnimationFrame(animate)
                    else if (this.enemies.length === 0 && stage < this.waves[this.waves.length - 1].stage) {
                        stage++
                        const wave = new Wave(this.waves[stage - 1].stage, this.waves[stage - 1].enemies)
                        this.enemies = wave.initWave()
  
                        for (let i = 0; i < this.enemies.length; i++) {
                            this.enemies[i].drawEnemy()
                        }
                        requestAnimationFrame(animate)
                    }
                    ctx.clearRect(0, 0, canvas.width, canvas.height)
                    for (let i = 0; i < this.enemies.length; i++) {
                        if (this.enemies[i].position.y > canvas.height || this.enemies[i].position.x > canvas.width) {
                            this.enemies.splice(i, 1)
                            this.lives -= 1
                            document.querySelector('.ui__points__lives > p').innerHTML = this.lives
                            if (this.lives === 0) {
                                this.towers.forEach(tower => {
                                    tower.active = false
                                })
                                animateActive = false
                                this.endGame()
                            }
                        } else if (this.enemies[i].health < 1) {
                            this.cash += this.enemies[i].reward
                            document.querySelector('.ui__points__cash > p').innerHTML = this.cash
                            this.enemies.splice(i, 1)
                        }
                        if (this.enemies.length > 0) {
                            const direction = this.map.checkEnemyDirection(this.enemies[i].position.x, this.enemies[i].position.y, this.enemies[i].direction)
                            this.enemies[i].moveEnemy(direction)
                            ctx.drawImage(this.enemies[i].img, this.enemies[i].position.x, this.enemies[i].position.y)
                        }
                    }
                    if (this.towers.length > 0) {
                        this.towers.forEach(tower => {
                            tower.shotEnemy(this.enemies, 0)
                        })
                    }
                }
            }
        
            animate()
        })
    }

    endGame() {
        console.log('koniec')
    }
}