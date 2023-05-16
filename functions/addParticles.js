import addParticleVelocity from "./addParticleVelocity.js"
import setParticleDisplay from "./setParticleDisplay.js"

const addParticles = (particleArray, canvasContext) => {

    particleArray.forEach((particle) => {
        setParticleDisplay(particle)

        if(particle.display === true){
            particle.draw(canvasContext)
            addParticleVelocity(particle)
        }
    })
}

export default addParticles