import particle from "../classes/classParticle.js"

function createParticleArray(n) {

    const particleArray = new Array()
    for(let i=0; i<n; i++){
        particleArray.push(new particle)
    }

    return particleArray
}

export default createParticleArray