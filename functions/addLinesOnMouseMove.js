import heroConfig from "../heroConfig.json" assert {type: 'json'}

const addLinesOnMouseMove = (mousePosition, particleArray, canvasContext) => {
  
    const maxLineDistance = heroConfig.mouseLines.maxLineDistance
 
    for(let i=0; i<particleArray.length; i++){

        if(particleArray[i].display === false){
            continue
        }

        else{
            const distx = (mousePosition.x-particleArray[i].x)
            const disty = (mousePosition.y-particleArray[i].y)
            const dist = Math.sqrt(distx**2+disty**2)
                
            if(dist < maxLineDistance ){
                const opacity = heroConfig.mouseLines.opacity
                canvasContext.beginPath()
                canvasContext.moveTo(particleArray[i].x, particleArray[i].y)
                canvasContext.lineTo(mousePosition.x, mousePosition.y)
                canvasContext.strokeStyle = "rgb(255,255,255,"+opacity+")"
                canvasContext.stroke()
            } 
        }
    }

}

export default addLinesOnMouseMove

