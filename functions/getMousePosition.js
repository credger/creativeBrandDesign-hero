const getMousePosition = () => {

    let mousePosition = {
        x: null,
        y: null,
        screenX: null
    }

    document.addEventListener('mousemove', (event) => {
        mousePosition.x = event.clientX
        mousePosition.y = event.clientY
    })
    
    return mousePosition
    
}

export default getMousePosition