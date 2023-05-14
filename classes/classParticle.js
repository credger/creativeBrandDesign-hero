import getRandomIntInclusive from "../functions/getRandomIntInclusive.js";
import getRandomArbitrary from "../functions/getRandomArbitray.js";
import getRandomSign from "../functions/getRandomSign.js";
import heroConfig from "../heroConfig.json" assert {type: 'json'}

const minRadius = heroConfig.particle.minRadius
const maxRadius = heroConfig.particle.maxRadius
const minHeroWidth = heroConfig.particle.minHeroWidth
const maxHeroWidth = heroConfig.particle.maxHeroWidth
const minHeroHeight = heroConfig.particle.minHeroHeight
const maxHeroHeight = heroConfig.particle.maxHeroHeight
const speed = heroConfig.particle.speed
const color = heroConfig.particle.color


class particle {
    constructor(){
        this.radius = getRandomArbitrary(minRadius, maxRadius)
        this.x = getRandomIntInclusive(minHeroWidth, maxHeroWidth)
        this.y = getRandomIntInclusive(minHeroHeight, maxHeroHeight)
        this.speed = speed
        this.vx = getRandomArbitrary(0,this.speed)
        this.vy = Math.sqrt(this.speed**2 - this.vx**2)
        this.color = color
    }
    
    draw(canvasContext) {
        canvasContext.beginPath()
        canvasContext.beginPath();
        canvasContext.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        canvasContext.closePath();
        canvasContext.fillStyle = this.color;
        canvasContext.fill();
    }
    
}

export default particle
