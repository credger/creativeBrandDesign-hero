
const detectMouseOnHero = (mousePosition) => {
 
let mouseOnHero = false
const hero = document.getElementById('hero')
const rect = hero.getBoundingClientRect()

const xmin = rect.x
const xmax = rect.x + rect.width
const ymin = rect.y
const ymax = rect.y + rect.height

if(mousePosition.x > xmin && mousePosition.x < xmax &&
    mousePosition.y > ymin && mousePosition.y <ymax){
        mouseOnHero = true
}

return mouseOnHero


}

export default detectMouseOnHero