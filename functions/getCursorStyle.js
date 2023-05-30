const getCursorStyle = () => {

    let cursorStyle

    document.addEventListener('mousemove', (event) => {
        cursorStyle = getComputedStyle(event.target).cursor
        console.log(cursorStyle)
    })
    
    return cursorStyle 
    
}

export default getCursorStyle