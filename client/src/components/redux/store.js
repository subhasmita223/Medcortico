import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import doctorReducer from './doctorSlice';
import HeartDiseaseReducer from './heartDiseaseSlice'
const store = configureStore({
    reducer: {
      auth: authReducer,
      doctor:doctorReducer,
      heartDisease:HeartDiseaseReducer
    },
});

export default store;