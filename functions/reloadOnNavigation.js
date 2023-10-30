
const reloadOnNavigation = () => {

    window.addEventListener( "pageshow", (e) => {
        let perfEntries = performance.getEntriesByType("navigation");

        if (perfEntries[0].type === "back_forward") {
            location.reload();
        }

      });

}


export default reloadOnNavigation

