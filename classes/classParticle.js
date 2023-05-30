import getRandomIntInclusive from "../functions/getRandomIntInclusive.js";
import getRandomArbitrary from "../functions/getRandomArbitray.js";
import getRandomSign from "../functions/getRandomSign.js";
import canvasConfig from "../canvasConfig.js";

class particle {
    constructor(){
        this.radius = getRandomArbitrary(canvasConfig.particle.minRadius, canvasConfig.particle.maxRadius)
        this.x = getRandomIntInclusive(0, screen.width)
        this.y = getRandomIntInclusive(0, screen.height)
        this.speed = canvasConfig.particle.speed
        this.vx = getRandomArbitrary(0,this.speed)*getRandomSign()
        this.vy = Math.sqrt(this.speed**2 - this.vx**2)*getRandomSign()
        this.color = canvasConfig.particle.color
        this.display = canvasConfig.display
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
