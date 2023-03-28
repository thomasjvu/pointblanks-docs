// ROUTE    /api/hoodies/name
// DESC.    @POST Find Hoodies by Name
import hoodieData from "./hoodies.json"

export default eventHandler(async(e) => {
    const body = await readBody(e)
    const { name } = body;
    if (!name) {
        return {
            status: 400,
            message: "Bad Request. No name provided in the body."
        }
    }
    return {
        names: hoodieData.filter((obj) => obj.name.includes(name.toUpperCase()))
    }
})
