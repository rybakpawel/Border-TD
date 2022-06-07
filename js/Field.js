class Field {
    constructor(x, y, type) {
        this.map = document.querySelector('.map')
        this.position = {
            x,
            y
        }
        this.type = type
    }

    drawField() {
        const newField = document.createElement("img")
        newField.classList.add("field")
        newField.src = `../assets/sprites/PNG/${game.tileSize}/towerDefense_tile${this.type}.png`
        newField.style.top = `${this.position.y}px`
        newField.style.left = `${this.position.x}px`
        this.map.appendChild(newField)
    }

    clickField() {
        game.towers.forEach(tower => {
            tower.active = false
        })
    }
}