class Map {
    constructor() {
        this.fullMap = [
             // 023 - road down 1
             // 024 - grass
             // 025 - road down 2                                                                                       //
            ['024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024'],
            ['024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024'],
            ['024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024'],
            ['024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024'],
            ['024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024'],
            ['024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024'],
            ['024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024'],
            ['024', '024', '024', '024', '025', '046', '047', '047', '047', '004', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024'],
            ['024', '024', '024', '024', '026', '001', '001', '001', '002', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024'],
            ['024', '024', '024', '024', '024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024'],
            ['024', '024', '024', '024', '024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024'], //
            ['024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024'],
            ['024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024'],
            ['024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024'],
            ['024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024'],
            ['024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024'],
            ['024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024'],
            ['024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024'],
            ['024', '024', '024', '024', '025', '046', '047', '047', '047', '004', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024'],
            ['024', '024', '024', '024', '026', '001', '001', '001', '002', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024'],
            ['024', '024', '024', '024', '024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024'],
            ['024', '024', '024', '024', '024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024']
            
            // ['024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024'],
            // ['024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024'],
            // ['024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024'],
            // ['024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024'],
            // ['024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024'],
            // ['024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024'],
            // ['024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024'],
            // ['024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024'],
            // ['024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024'],
            // ['024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024'],
            // ['024', '024', '024', '024', '025', '023', '024', '024', '024', '024', '024', '024', '024', '024', '024', '024']
        ]
    }

    drawMap() {
        let fieldPosition = {
            x: 0,
            y: 0
        }
        for (let i = 0; i < this.fullMap.length; i++) {
            for (let j = 0; j < this.fullMap[0].length; j++) {
                if (typeof this.fullMap[i][j] === 'string') this.fullMap[i][j] = new Field(fieldPosition.x, fieldPosition.y, this.fullMap[i][j])
                this.fullMap[i][j].drawField()
                fieldPosition.x += game.tileSize
            }
            fieldPosition = {
                x: 0,
                y: fieldPosition.y += game.tileSize
            }
        }

        return this.fullMap
    }

    checkEnemyDirection(x, y, direction) {
        const coordinates = {
            x: Math.floor(x / game.tileSize),
            y: Math.floor(y / game.tileSize)
        }

        if (this.fullMap[coordinates.y + 1] === undefined) return 'down'
        else if (this.fullMap[coordinates.x + 1] === undefined) return 'right'

        if (direction === 'down' && coordinates.y > 0 && this.fullMap[coordinates.y + 1][coordinates.x].type !== '023' && this.fullMap[coordinates.y + 1][coordinates.x].type !== '025') {
            if (this.fullMap[coordinates.y][coordinates.x - 1].type === '001' && this.fullMap[coordinates.y][coordinates.x - 1].type === '047') return 'left'
            else return 'right'
        } else if (direction === 'right' && coordinates.x > 0 && this.fullMap[coordinates.y][coordinates.x + 1].type !== '001' && this.fullMap[coordinates.y][coordinates.x + 1].type !== '047') {
            if (this.fullMap[coordinates.y + 1][coordinates.x].type === '023' && this.fullMap[coordinates.y + 1][coordinates.x].type === '025') return 'up'
            else return 'down'
        } else if (direction === 'up' && coordinates.y < 0 && this.fullMap[coordinates.y - 1][coordinates.x].type !== '023' && this.fullMap[coordinates.y - 1][coordinates.x + 1].type !== '025') {
            if (this.fullMap[coordinates.y][coordinates.x - 1].type === '001' && this.fullMap[coordinates.y][coordinates.x - 1].type === '047') return 'left'
            else return 'right'
        } else if (direction === 'left' && coordinates.x < 0 && this.fullMap[coordinates.y][coordinates.x - 1].type !== '001' && this.fullMap[coordinates.y][coordinates.x - 1].type !== '047') {
            if (this.fullMap[coordinates.y + 1][coordinates.x].type === '023' && this.fullMap[coordinates.y + 1][coordinates.x].type === '025') return 'up'
            else return 'down'
        }        

        return direction
    }

    buildTower(e, field, selectedTower, coordinates, cost) {
        selectedTower = document.querySelector('.selected-tower')
        selectedTower.src = field.src
        selectedTower.dataset.tower = field.dataset.tower
        selectedTower.classList.add('selected-tower--active')
        selectedTower.style.left = e.clientX - game.tileSize / 2 + "px"
        selectedTower.style.top = e.clientY - game.tileSize / 2 + "px"
        
        document.addEventListener("mousemove", e => {
            if (selectedTower) {
                selectedTower.style.left = e.clientX - game.tileSize / 2 + "px"
                selectedTower.style.top = e.clientY - game.tileSize / 2 + "px"
            }
        })

        if (selectedTower && e.clientX < game.tileSize * game.rows && e.clientY < game.tileSize * game.columns && !(this.fullMap[coordinates.y][coordinates.x] instanceof Tower) && this.fullMap[coordinates.y][coordinates.x].type === '024') {
            this.fullMap[coordinates.y][coordinates.x] = new Tower(coordinates.x * game.tileSize, coordinates.y * game.tileSize, selectedTower.dataset.tower)
            this.fullMap[coordinates.y][coordinates.x].drawTower()
            selectedTower.classList.remove('selected-tower--active')
            selectedTower = false
            game.towers.push(this.fullMap[coordinates.y][coordinates.x])
            game.cash -= cost
            document.querySelector('.ui__points__cash > p').innerHTML = game.cash
        } 
    }

    click() {
        let selectedTower
        onclick = e => {
            const field = e.target
            const coordinates = {
                x: Math.floor(e.clientX / game.tileSize),
                y: Math.floor(e.clientY / game.tileSize)
            }
            const mapField = this.fullMap[coordinates.y][coordinates.x]

            if (field.hasAttribute('data-tower')) {
                switch (field.dataset.tower) {
                    case '203':
                        if (game.cash >= 50) this.buildTower(e, field, selectedTower, coordinates, 50)
                        break
                    case '204':
                        if (game.cash >= 100) this.buildTower(e, field, selectedTower, coordinates, 100)
                        break
                    case '205':
                        if (game.cash >= 150) this.buildTower(e, field, selectedTower, coordinates, 150)
                        break
                    case '206':
                        if (game.cash >= 250) this.buildTower(e, field, selectedTower, coordinates, 250)
                        break
                }
                
            } else if (mapField instanceof Tower) mapField.clickTower()
            else if (mapField instanceof Field) mapField.clickField()
        }
    }
}

