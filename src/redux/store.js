import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rootReducer from "./contacts/contacts-reducer";
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';


const middleware = [
    ...getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
    }),
  logger,
];

 export const store = configureStore({
   reducer: {
     contacts: rootReducer,

    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

