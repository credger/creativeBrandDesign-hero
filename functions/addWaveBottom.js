const addWaveBottom = () => {

    const waveBottom = document.getElementById('waveBottom')
    waveBottom.setAttribute('viewBox', '0 0 1000 100')
    waveBottom.setAttribute("preserveAspectRatio", "none")

    const waveOne = document.createElementNS("http://www.w3.org/2000/svg", 'path')
    waveOne.setAttribute("d","M 0 14 s 88.64 3.48 300 36 c 260 40 514 27 703 -10 l 12 28 l 3 36 h -1018 z")
    waveOne.style.fill = "rgb(255,255,255,0.15)"
    waveBottom.appendChild(waveOne);

    const waveTwo = document.createElementNS("http://www.w3.org/2000/svg", 'path')
    waveTwo.setAttribute("d","M 0 45 s 271 45.13 500 32 c 157 -9 330 -47 515 -63 v 86 h -1015 z")
    waveTwo.style.fill = "rgb(255,255,255,0.3)"
    waveBottom.appendChild(waveTwo);

    const waveThree = document.createElementNS("http://www.w3.org/2000/svg", 'path')
    waveThree.setAttribute("d","M 0 58 s 188.29 32 508 32 c 290 0 494 -35 494 -35 v 45 h -1002 z")
    waveThree.style.fill = "#fff"
    waveBottom.appendChild(waveThree);

}

export default addWaveBottom


