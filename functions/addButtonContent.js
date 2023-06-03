const addButtonContents = () => {
    const leftButtonHidden = document.getElementById('leftButtonHidden')
    leftButtonHidden.setAttribute('viewBox', '0 0 512 512')

    const square1 = document.createElementNS("http://www.w3.org/2000/svg", 'path')
    square1.setAttribute("d","M306.67 352H205.33a24 24 0 0 0-24 24v80a24 24 0 0 0 24 24h101.34a24 24 0 0 0 24-24v-80a24 24 0 0 0-24-24zM488 192H386.67a24 24 0 0 0-24 24v80a24 24 0 0 0 24 24H488a24 24 0 0 0 24-24v-80a24 24 0 0 0-24-24zM306.67 32H205.33a24 24 0 0 0-24 24v80a24 24 0 0 0 24 24h101.34a24 24 0 0 0 24-24V56a24 24 0 0 0-24-24zM125.33 192H24a24 24 0 0 0-24 24v80a24 24 0 0 0 24 24h101.33a24 24 0 0 0 24-24v-80a24 24 0 0 0-24-24z")
    square1.setAttribute("class", 'svgOne')
    leftButtonHidden.appendChild(square1)

    const square2 = document.createElementNS("http://www.w3.org/2000/svg", 'path')
    square2.setAttribute("d","M488 352H386.67a24 24 0 0 0-24 24v80a24 24 0 0 0 24 24H488a24 24 0 0 0 24-24v-80a24 24 0 0 0-24-24zM306.67 192H205.33a24 24 0 0 0-24 24v80a24 24 0 0 0 24 24h101.34a24 24 0 0 0 24-24v-80a24 24 0 0 0-24-24zM488 32H386.67a24 24 0 0 0-24 24v80a24 24 0 0 0 24 24H488a24 24 0 0 0 24-24V56a24 24 0 0 0-24-24zm-362.67 0H24A24 24 0 0 0 0 56v80a24 24 0 0 0 24 24h101.33a24 24 0 0 0 24-24V56a24 24 0 0 0-24-24zm0 320H24a24 24 0 0 0-24 24v80a24 24 0 0 0 24 24h101.33a24 24 0 0 0 24-24v-80a24 24 0 0 0-24-24z")
    square2.setAttribute("class", 'svgTwo')
    leftButtonHidden.appendChild(square2)

    const rightButtonHidden = document.getElementById('rightButtonHidden')
    rightButtonHidden.setAttribute('viewBox', '0 0 512 512')

    const arrow1 = document.createElementNS("http://www.w3.org/2000/svg", 'path')
    arrow1.setAttribute("d","M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z")
    arrow1.setAttribute("class", 'svgOne')
    rightButtonHidden.appendChild(arrow1)

    const arrow2 = document.createElementNS("http://www.w3.org/2000/svg", 'path')
    arrow2.setAttribute("d","M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z")
    arrow2.setAttribute("class", 'svgTwo')
    rightButtonHidden.appendChild(arrow2)


}

export default addButtonContents



{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<path class="fa-secondary" d="M306.67 352H205.33a24 24 0 0 0-24 24v80a24 24 0 0 0 24 24h101.34a24 24 0 0 0 24-24v-80a24 24 0 0 0-24-24zM488 192H386.67a24 24 0 0 0-24 24v80a24 24 0 0 0 24 24H488a24 24 0 0 0 24-24v-80a24 24 0 0 0-24-24zM306.67 32H205.33a24 24 0 0 0-24 24v80a24 24 0 0 0 24 24h101.34a24 24 0 0 0 24-24V56a24 24 0 0 0-24-24zM125.33 192H24a24 24 0 0 0-24 24v80a24 24 0 0 0 24 24h101.33a24 24 0 0 0 24-24v-80a24 24 0 0 0-24-24z"></path>
<path class="fa-primary" d="M488 352H386.67a24 24 0 0 0-24 24v80a24 24 0 0 0 24 24H488a24 24 0 0 0 24-24v-80a24 24 0 0 0-24-24zM306.67 192H205.33a24 24 0 0 0-24 24v80a24 24 0 0 0 24 24h101.34a24 24 0 0 0 24-24v-80a24 24 0 0 0-24-24zM488 32H386.67a24 24 0 0 0-24 24v80a24 24 0 0 0 24 24H488a24 24 0 0 0 24-24V56a24 24 0 0 0-24-24zm-362.67 0H24A24 24 0 0 0 0 56v80a24 24 0 0 0 24 24h101.33a24 24 0 0 0 24-24V56a24 24 0 0 0-24-24zm0 320H24a24 24 0 0 0-24 24v80a24 24 0 0 0 24 24h101.33a24 24 0 0 0 24-24v-80a24 24 0 0 0-24-24z"></path>
</svg> */}


// const waveOne = document.createElementNS("http://www.w3.org/2000/svg", 'path')
//     waveOne.setAttribute("d","M 0 14 s 88.64 3.48 300 36 c 260 40 514 27 703 -10 l 12 28 l 3 36 h -1018 z")
//     waveOne.style.fill = "rgb(255,255,255,0.15)"
//     waveBottom.appendChild(waveOne);