import getRandomIntInclusive from "../functions/getRandomIntInclusive.js";
import getRandomArbitrary from "../functions/getRandomArbitray.js";
import canvasConfig from "../canvasConfig.js";

class particle {
    constructor(){
        this.radius = getRandomArbitrary(canvasConfig.particle.minRadius, canvasConfig.particle.maxRadius)
        this.x = getRandomIntInclusive(0, screen.width)
        this.y = getRandomIntInclusive(0, screen.height)
        this.speed = getRandomArbitrary(canvasConfig.particle.minSpeed, canvasConfig.particle.maxSpeed)
        this.angle = getRandomArbitrary(0,2*Math.PI)
        this.vx = this.speed*Math.cos(this.angle)
        this.vy = this.speed*Math.cos(this.angle)
        this.opacity = getRandomArbitrary(canvasConfig.particle.minOpacity, canvasConfig.particle.maxOpacity)
        this.display = canvasConfig.display
    }
    
    draw(canvasContext) {
        canvasContext.beginPath()
        canvasContext.beginPath();
        canvasContext.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        canvasContext.closePath();
        canvasContext.fillStyle = "rgb(255,255,255,"+this.opacity+")"
        canvasContext.fill();
    }
    
}

export default particle
