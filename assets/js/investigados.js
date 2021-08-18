import { Animal } from "./Animal.js"

class Leon extends Animal {
    constructor(...args) {
        super(...args)
    }

    Rugir(player) {
        player.src = `./assets/sounds/${this.Sonido}`
        player.load();
        player.play();
    }
}
class Lobo extends Animal {
    constructor(...args) {
        super(...args)
    }

    Aullar() {
        player.src = `./assets/sounds/${this.Sonido}`
        player.load();
        player.play();
    }
}
class Oso extends Animal {
    constructor(...args) {
        super(...args)
    }

    Gruñir() {
        player.src = `./assets/sounds/${this.Sonido}`
        player.load();
        player.play();
    }
}
class Serpiente extends Animal {
    constructor(...args) {
        super(...args)
    }

    Sisear() {
        player.src = `./assets/sounds/${this.Sonido}`
        player.load();
        player.play();
    }
}
class Aguila extends Animal {
    constructor(...args) {
        super(...args)
    }

    Chillar() {
        player.src = `./assets/sounds/${this.Sonido}`
        player.load();
        player.play();
    }
}

export { Animal, Leon, Lobo, Oso, Serpiente, Aguila };