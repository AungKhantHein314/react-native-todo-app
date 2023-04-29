import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

// getNews
export const getDones = createAsyncThunk(
    "done/getDones",
    async () => {
        const jsonValue = await AsyncStorage.getItem('@donelist');
        return JSON.parse(jsonValue);
    }
)

// addDone
export const addDone = createAsyncThunk(
    "done/addDone",
    async (newDone, { getState }) => {
        var doneList = getState().dones == null ? {} : getState().dones;
        let o = {...doneList};
        if (Object.keys(doneList).length != 0) {
            let key = parseInt(Object.keys(doneList)[Object.keys(doneList).length - 1]) + 1;
            o[key] = newDone;
        } else {
            o = { 1: newDone };
        }

        const jsonValue = JSON.stringify(o)
        await AsyncStorage.setItem('@donelist', jsonValue)
        return o;
    }
)

// editDone
export const editDone = createAsyncThunk(
    "done/editDone",
    async (thunk, { getState }) => {
        var doneList = getState().dones == null ? {} : getState().dones;
        let o = {...doneList};
        console.log(o);
        o[thunk.id] = thunk.editedTodo;
        const jsonValue = JSON.stringify(o)
        console.log(jsonValue, thunk, o);
        await AsyncStorage.setItem('@donelist', jsonValue)
        return o;
    }
)

// deleteDone
export const deleteDone = createAsyncThunk(
    "done/deleteDone",
    async (id, { getState }) => {
        var doneList = getState().dones == null ? {} : getState().dones;
        let o = {...doneList};
        delete o[id];
        const jsonValue = JSON.stringify(o)
        await AsyncStorage.setItem('@donelist', jsonValue)
        return o;
    }
)

const doneSlice = createSlice({
    name: "dones",
    initialState: {},
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getDones.fulfilled, (state, action) => {
            return action.payload
        }),
        builder.addCase(addDone.fulfilled, (state, action) => {
            return action.payload;
        }),
        builder.addCase(editDone.fulfilled, (state, action) => {
            return action.payload;
        }),
        builder.addCase(deleteDone.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export default doneSlice.reducer