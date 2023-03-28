import tshirtData from './tshirts.json'

export default () => {
    return {
        random_tshirt: tshirtData[Math.floor(Math.random() * tshirtData.length)]
    }
}
