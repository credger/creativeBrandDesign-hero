const handleClick = () => {

    const elementArray = ['logo', 'menu', 'leftButton', 'rightButton']
    const popUp = document.getElementById('popUp')

    elementArray.forEach(item => {
        const element = document.getElementById(item)
        element.addEventListener('click', (e) => {
            popUp.style.display = 'flex'
        })
    })


}

export default handleClick