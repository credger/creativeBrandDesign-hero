import addButtonContents from "./functions/addButtonContent.js";
import addWaveBottom from "./functions/addWaveBottom.js";
import createMenuIcon from "./functions/createMenuIcon.js";
import drawCanvas from "./functions/drawCanvas.js";
import handleClick from "./functions/handleClick.js";
import closePopUp from "./functions/closePopUp.js";
import reloadOnNavigation from "./functions/reloadOnNavigation.js";


// if(PerformanceNavigationTiming.type == "back_forward"){
//     location.reload(true);
//  }

reloadOnNavigation()
drawCanvas()
addWaveBottom()
addButtonContents()
createMenuIcon()
handleClick()
closePopUp()


//cd repos/creativeBrandDesign-heroClone
//python3 -m http.server
//localhost:8000



  