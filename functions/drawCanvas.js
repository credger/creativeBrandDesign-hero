import setCanvasDimensions from "./setCanvasDimensions.js";
import addParticleLines from "./addParticleLines.js";
import addParticles from "./addParticles.js";
import addLinesOnMouseover from "./addLinesOnMouseMove.js";


const drawCanvas = (particleArray, canvasContext, mousePosition) => {

    setCanvasDimensions()
    addParticles(particleArray, canvasContext)
    addParticleLines(particleArray, canvasContext)
    addLinesOnMouseover(mousePosition, particleArray, canvasContext)
    requestAnimationFrame = window.requestAnimationFrame(drawCanvas)

}

export default drawCanvas