import particle from "../classes/classParticle.js"

const createParticleArray = (pixelsPerParticle) => {

    const totalPixels = screen.width*screen.height
    const numberParticles = Math.floor(totalPixels / pixelsPerParticle)
    console.log('numberParticles: ', numberParticles)

    const particleArray = new Array()
    for(let i=0; i<numberParticles; i++){
        particleArray.push(new particle)
    }

    return particleArray
}

export default createParticleArray