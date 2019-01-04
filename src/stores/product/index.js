// import axios from './api'
import { action } from 'mobx'

class ProductStore {

  @action listAll(offset, limit = 10) {
    return [
      {
        id: 1,
        name: "Alexa",
        description: "Echo Dot is our most popular voice-controlled speaker, now with an improved sound and a new design. Echo Dot connects to Alexa",
        price: 7000,
        rating: 4
      },
      {
        id: 2,
        name: "Alexa",
        description: "Echo Dot is our most popular voice-controlled speaker, now with an improved sound and a new design. Echo Dot connects to Alexa",
        price: 7000,
        rating: 4
      }
    ]
  }
}

const productStore = new ProductStore()
export default productStore