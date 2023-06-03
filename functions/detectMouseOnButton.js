const detectMouseOnButton = (mousePosition) => {
    const array = ['logo', 'menu', 'leftButton', 'rightButton']

    let mouseOnButton = false

    for(let i=0; i<array.length; i++){
        let element = document.getElementById(array[i])
        let rect = element.getBoundingClientRect()
        let xmin = rect.x
        let xmax = rect.x + rect.width
        let ymin = rect.y
        let ymax = rect.y + rect.height
       
        if(mousePosition.x > xmin && mousePosition.x < xmax &&
            mousePosition.y > ymin && mousePosition.y <ymax){
                mouseOnButton = true
                break
        }

    }

    return mouseOnButton

}

export default detectMouseOnButton
