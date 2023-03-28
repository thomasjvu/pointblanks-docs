// ROUTE    /api/hoodies/all
// DESC.    @GET All Hoodies
import hoodieData from "./hoodies.json"

export default eventHandler(async() => {
    return {
        hoodieData
    }
})
