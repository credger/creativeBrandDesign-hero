const createMenuIcon = () => {
    const rowArray = ['menuIconRowOne', 'menuIconRowTwo', 'menuIconRowThree']
    const menu = document.getElementById('menu')

   rowArray.forEach(element => {
    const visible = document.createElement('div')
    const hidden = document.createElement('div')

    visible.setAttribute('id', element+'Visible')
    hidden.setAttribute('id', element+'Hidden' )

    menu.appendChild(visible)
    menu.appendChild(hidden)
   })
    
}

export default createMenuIcon;