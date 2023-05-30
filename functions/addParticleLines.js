import canvasConfig from "../canvasConfig.js"

const addParticleLines = (particleArray, canvasContext) => {

    const maxLineDistance = canvasConfig.particleLines.maxLineDistance
    const maxOpacity = canvasConfig.particleLines.maxOpacity
 
    for(let i=0; i<particleArray.length; i++){
        for(let j=i+1; j<particleArray.length; j++){

            if(particleArray[i].display === false || particleArray[j].display === false){
                continue
            }

            else{
                const distx = (particleArray[i].x-particleArray[j].x)
                const disty = (particleArray[i].y-particleArray[j].y)
                const dist = Math.sqrt(distx**2+disty**2)
                    
                if(dist < maxLineDistance){
                    let opacity = (maxLineDistance-dist)*maxOpacity/maxLineDistance
                    canvasContext.beginPath()
                    canvasContext.moveTo(particleArray[i].x, particleArray[i].y)
                    canvasContext.lineTo(particleArray[j].x, particleArray[j].y)
                    canvasContext.strokeStyle = "rgb(255,255,255,"+opacity+")"
                    canvasContext.stroke()
                } 
            }
        }
    }
}

export default addParticleLines


