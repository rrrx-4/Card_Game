import { configureStore } from '@reduxjs/toolkit'

import cardSlice from './redux/cardSlice'

export const store = configureStore({

    reducer: {
        card: cardSlice,
    }


})