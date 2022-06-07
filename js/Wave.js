class Wave {
    constructor(stage, enemies) {
        this.stage = stage
        this.enemies = {
            green: enemies.green,
            red: enemies.red,
            orange: enemies.orange,
            grey: enemies.grey,
        }
    }

    initWave() {
        let enemies = []
        const sumValues = obj => Object.values(obj).reduce((a, b) => a + b);

        for (let i = 0; i < sumValues(this.enemies); i++) {
            if (this.enemies.green > i) enemies.push(new Enemy('300', 'green', 1, 100, 1, 'down'))
            else if (this.enemies.green + this.enemies.red > i) enemies.push(new Enemy('305', 'red', 1, 120, 2, 'down'))
            else if (this.enemies.green + this.enemies.red + this.enemies.orange > i) enemies.push(new Enemy('308', 'orange', 1, 200, 3, 'down'))
            else if (this.enemies.green + this.enemies.red + this.enemies.orange + this.enemies.grey > i) enemies.push(new Enemy('311', 'grey', 1, 300, 4, 'down'))
            enemies[i].position.y -= i * 50
        }

        return enemies
    }
}