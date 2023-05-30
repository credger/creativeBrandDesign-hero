const closePopUp = () => {

    const popUpCloseButton = document.getElementById('popUpCloseButton')
    const popUp = document.getElementById('popUp')


    popUpCloseButton.addEventListener('click', (e) => {
        popUp.style.display = 'none'
    })

}

export default closePopUp