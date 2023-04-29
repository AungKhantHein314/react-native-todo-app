import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

// getNews
export const getTodos = createAsyncThunk(
    "todo/getTodos",
    async () => {
        const jsonValue = await AsyncStorage.getItem('@todolist');
        return JSON.parse(jsonValue);
    }
)

// addTodo
export const addTodo = createAsyncThunk(
    "todo/addTodo",
    async (newTodo, { getState }) => {
        var todoList = getState().todos == null ? {} : getState().todos;
        let o = {...todoList};
        if (Object.keys(todoList).length != 0) {
            let key = parseInt(Object.keys(todoList)[Object.keys(todoList).length - 1]) + 1;
            o[key] = newTodo;
        } else {
            o = { 1: newTodo };
        }

        const jsonValue = JSON.stringify(o)
        await AsyncStorage.setItem('@todolist', jsonValue)
        return o;
    }
)

// editTodo
export const editTodo = createAsyncThunk(
    "todo/editTodo",
    async (thunk, { getState }) => {
        var todoList = getState().todos == null ? {} : getState().todos;
        let o = {...todoList};
        o[thunk.id] = thunk.editedTodo;
        const jsonValue = JSON.stringify(o)
        await AsyncStorage.setItem('@todolist', jsonValue)
        return o;
    }
)

// deleteTodo
export const deleteTodo = createAsyncThunk(
    "todo/deleteTodo",
    async (id, { getState }) => {
        var todoList = getState().todos == null ? {} : getState().todos;
        let o = {...todoList};
        delete o[id];
        const jsonValue = JSON.stringify(o)
        await AsyncStorage.setItem('@todolist', jsonValue)
        return o;
    }
)

const todoSlice = createSlice({
    name: "todos",
    initialState: {},
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getTodos.fulfilled, (state, action) => {
            return action.payload
        }),
        builder.addCase(addTodo.fulfilled, (state, action) => {
            return action.payload;
        }),
        builder.addCase(editTodo.fulfilled, (state, action) => {
            return action.payload;
        }),
        builder.addCase(deleteTodo.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export default todoSlice.reducer