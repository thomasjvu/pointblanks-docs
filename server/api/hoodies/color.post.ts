// ROUTE    /api/hoodies/color
// DESC.    @POST Find Hoodies by Color
import hoodieData from "./hoodies.json"

export default eventHandler(async(e) => {
    const body = await readBody(e)
    const { color } = body;
    if (!color) {
        return {
            status: 400,
            message: "Bad Request. No name provided in the body."
        }
    }
    return {
        names: hoodieData.filter((obj) => obj.color.includes(color.toUpperCase()))
    }
})
