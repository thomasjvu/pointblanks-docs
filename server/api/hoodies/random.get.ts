// ROUTE    /api/hoodies/random
// DESC.    @GET Random Hoodie
import hoodieData from './hoodies.json'

export default () => {
    return {
        random_hoodie: hoodieData[Math.floor(Math.random() * hoodieData.length)]
    }
}
