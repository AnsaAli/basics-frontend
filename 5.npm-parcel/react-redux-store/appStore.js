import {configureStore} from'@reduxjs/toolkit';
import cartReducer from './appReducer'


const appStore = configureStore({
    reducer:{
        cart : cartReducer
    }
})

export default appStore;