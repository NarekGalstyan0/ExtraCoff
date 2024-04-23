import {configureStore} from "@reduxjs/toolkit"
import reducerBag from "../features/Bag/BagSlice"


export const store = configureStore({
  reducer : {
    Bag : reducerBag
  }
})
