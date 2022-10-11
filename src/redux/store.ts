import { configureStore } from '@reduxjs/toolkit'
import todos from './reducers/todos'
// ...

export const store = configureStore({
  reducer: {
   todosList: todos
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch