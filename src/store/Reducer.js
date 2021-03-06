import { createReducer } from '@reduxjs/toolkit'
import { add, remove, increment, decrement, clear } from '../store/Actions';

const itemReducer = createReducer([], (builder) => {
    builder
    .addCase(add, (state, action) => {
        let index = state.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
            return [...state];
        } else {
            return [...state, { ...action.payload, counter: 1 }];
        }
      })
    builder
    .addCase(remove, (state, action) => {
        let index = state.findIndex(item => item.id === action.payload.id);
        state.splice(index, 1);
      })
    builder
    .addCase(increment, (state, action) => {
        let index = state.findIndex(item => item.id === action.payload.id);
        state[index].counter += 1;
      })
    builder
    .addCase(decrement, (state, action) => {
        let index = state.findIndex(item => item.id === action.payload.id);
        if (state[index].counter > 1) {
            state[index].counter -= 1;
        }
      })
      builder
      .addCase(clear, (state) => {
        state.splice(0, state.length)
        })
})

export default itemReducer;