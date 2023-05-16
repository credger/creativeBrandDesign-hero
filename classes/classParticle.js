import getRandomIntInclusive from "../functions/getRandomIntInclusive.js";
import getRandomArbitrary from "../functions/getRandomArbitray.js";
import getRandomSign from "../functions/getRandomSign.js";
import heroConfig from "../heroConfig.json" assert {type: 'json'}

class particle {
    constructor(){
        this.radius = getRandomArbitrary(heroConfig.particle.minRadius, heroConfig.particle.maxRadius)
        this.x = getRandomIntInclusive(0, screen.width)
        this.y = getRandomIntInclusive(0, screen.height)
        this.speed = heroConfig.particle.speed
        this.vx = getRandomArbitrary(0,this.speed)*getRandomSign()
        this.vy = Math.sqrt(this.speed**2 - this.vx**2)*getRandomSign()
        this.color = heroConfig.particle.color
        this.display = heroConfig.display
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
