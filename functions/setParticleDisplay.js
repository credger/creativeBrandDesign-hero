const setParticleDisplay = (particle) => {

    const xmin = 0
    const ymin = 0
    const xmax = document.getElementById('canvas').clientWidth + particle.radius + 1
    const ymax = document.getElementById('canvas').clientHeight + particle.radius + 1

    if(particle.x < xmin || particle.y < ymin || particle.x > xmax || particle.y > ymax){
        particle.display = false
    }

    else{
        particle.display = true
    }
}

export default setParticleDisplay