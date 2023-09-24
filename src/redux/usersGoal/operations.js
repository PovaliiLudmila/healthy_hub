import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://goit-healthy-hub.onrender.com/api';

export function setHeadersToken(token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const fetchGoals = createAsyncThunk(
  'user/statistics',
  async (_, thunkAPI) => {
    try {
      setHeadersToken(thunkAPI.getState().auth.token);
      const response = await axios.get('/user/statistics');

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addWater = createAsyncThunk(
  'user/water-intake',
  async (quantity, thunkAPI) => {
    try {
      setHeadersToken(thunkAPI.getState().auth.token);
      const response = await axios.post('/user/water-intake', {
        water: quantity,
      });

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// diaryOnMain
export const fetchGoalsConfirm = createAsyncThunk(
  'user/food-intake',
  async (data, thunkAPI) => {
    const { placeholderData, mealName } = data;
    
    try {
      setHeadersToken(thunkAPI.getState().auth.token);
      const response = await axios.post('/user/food-intake', {
        [mealName]: placeholderData,
      });
      // console.log(placeholderData);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// updateWeight
export const updateWeight = createAsyncThunk(
  'user/updateWeight',
  async (inputWeight, thunkAPI) => {
    try {
      setHeadersToken(thunkAPI.getState().auth.token);
      const response = await axios.put('/user/weight', { weight: inputWeight });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// updateGoal
export const updateGoal = createAsyncThunk(
  'user/updateGoal',
  async (selectedGoal, thunkAPI) => {
    try {
      setHeadersToken(thunkAPI.getState().auth.token);
      const response = await axios.patch('/user/goal', { goal: selectedGoal });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);