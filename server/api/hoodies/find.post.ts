// api/hoodies/find
// method @POST
// post { hoodie: string }

import hoodieData from "./hoodies.json"

export default eventHandler(async(e) => {
    const body = await readBody(e) // body {}
    const { hoodie } = body;
    return {
        names: hoodieData.filter((obj) => obj.name.includes(hoodie))
    }
})
