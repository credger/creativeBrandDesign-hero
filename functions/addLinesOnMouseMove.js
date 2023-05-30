import canvasConfig from "../canvasConfig.js"
import detectMouseOnButton from "./detectMouseOnButton.js"
import detectMouseOnHero from "./detectMouseonHero.js"

const addLinesOnMouseMove = (mousePosition, particleArray, canvasContext) => {
  
    const maxLineDistance = canvasConfig.mouseLines.maxLineDistance
    const mouseOnButton = detectMouseOnButton(mousePosition)
    const mouseOnHero = detectMouseOnHero(mousePosition)
    const scrollTop = document.getElementById('main').scrollTop
  
    for(let i=0; i<particleArray.length; i++){

        if(particleArray[i].display === false || mouseOnButton === true || mouseOnHero === false){
            continue
        }

        else{
            const distx = (mousePosition.x-particleArray[i].x)
            const disty = (mousePosition.y+scrollTop-particleArray[i].y)
            const dist = Math.sqrt(distx**2+disty**2)
                
            if(dist < maxLineDistance ){
                const opacity = canvasConfig.mouseLines.opacity
                canvasContext.beginPath()
                canvasContext.moveTo(particleArray[i].x, particleArray[i].y)
                canvasContext.lineTo(mousePosition.x, mousePosition.y+scrollTop)
                canvasContext.strokeStyle = "rgb(255,255,255,"+opacity+")"
                canvasContext.stroke()
            } 
        }
    }

}

export default addLinesOnMouseMove

