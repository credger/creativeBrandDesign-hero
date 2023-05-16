const addParticleVelocity = (particle) => {
    particle.x += particle.vx;
    particle.y += particle.vy;
    
    if (particle.y + particle.vy > canvas.height-particle.radius || particle.y + particle.vy < particle.radius) {
        particle.vy = -particle.vy;
    }
    if (particle.x + particle.vx > canvas.width-particle.radius || particle.x + particle.vx < particle.radius) {
        particle.vx = -particle.vx;
    } 
}

export default addParticleVelocity