// api/hoodies/all
// method @GET

import hoodieData from "./hoodies.json"

export default eventHandler(async() => {
    return {
        hoodieData
    }
})
