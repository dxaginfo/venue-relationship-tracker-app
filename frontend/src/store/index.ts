import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import venueReducer from './slices/venueSlice';
import contactReducer from './slices/contactSlice';
import performanceReducer from './slices/performanceSlice';
import communicationReducer from './slices/communicationSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    venues: venueReducer,
    contacts: contactReducer,
    performances: performanceReducer,
    communications: communicationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
