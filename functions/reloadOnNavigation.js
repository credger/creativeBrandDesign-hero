
const reloadOnNavigation = () => {

    console.log('reloadOnNavigation')

    window.addEventListener( "pageshow", (e) => {
        let perfEntries = performance.getEntriesByType("navigation");

        console.log('type: ', perfEntries[0].type)

        if (perfEntries[0].type === "back_forward") {
            location.reload();
        }

      });

}


export default reloadOnNavigation

