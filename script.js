
import createParticleArray from "./functions/createParticleArray.js";
import setCanvasDimensions from "./functions/setCanvasDimensions.js";
import addParticleLines from "./functions/addParticleLines.js";
import addParticles from "./functions/addParticles.js";
import heroConfig from "../heroConfig.json" assert {type: 'json'}
import addLinesOnMouseMove from "./functions/addLinesOnMouseMove.js";
import getMousePosition from "./functions/getMousePosition.js";
//import drawCanvas from "./functions/drawCanvas.js";



const particleArray = createParticleArray(heroConfig.canvas.pixelsPerParticle)
const canvas = document.getElementById('canvas')
const canvasContext = canvas.getContext("2d");
const mousePosition = getMousePosition()
let requestAnimationFrame


//drawCanvas(particleArray, canvasContext, mousePosition)

const drawCanvas = () => {

    setCanvasDimensions()
    addParticles(particleArray, canvasContext)
    addParticleLines(particleArray, canvasContext)
    addLinesOnMouseMove(mousePosition, particleArray, canvasContext)
    requestAnimationFrame = window.requestAnimationFrame(drawCanvas)

}

drawCanvas()



  