import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Todo } from '../../models/models'
// import type { RootState } from '../../app/store'

// Define a type for the slice state
interface TodosState {
  todos: Todo[],
  completedTodos: Todo[]
}

// Define the initial state using that type
const initialState: TodosState = {
  todos: [],
  completedTodos: []
}

export const todosSlice = createSlice({
  name: 'todos',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setTodos: (state, action) => {
        console.log(action.payload);
        
      state.todos = [...action.payload]
    },
    setCompletedTodos: (state, action) => {
        
      state.completedTodos = action.payload
    },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // }
  }
})

export const { setTodos, setCompletedTodos } = todosSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default todosSlice.reducer