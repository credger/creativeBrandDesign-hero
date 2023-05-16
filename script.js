
import createParticleArray from "./functions/createParticleArray.js";
import setCanvasDimensions from "./setCanvasDimensions.js";
import addParticleLines from "./functions/addParticleLines.js";
import addParticles from "./functions/addParticles.js";


const particleArray = createParticleArray(80)

const drawCanvas = () => {

    const canvas = document.getElementById('canvas')
    const canvasContext = canvas.getContext("2d");

    setCanvasDimensions()
    addParticles(particleArray, canvasContext)
    addParticleLines(particleArray, canvasContext)

    let raf = window.requestAnimationFrame(drawCanvas)

    canvas.addEventListener("click", () => {
        window.cancelAnimationFrame(raf)
     })
}

drawCanvas()