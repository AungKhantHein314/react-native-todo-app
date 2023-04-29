import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

import ToDo from './ToDo'

const ToDoList = ({ list, setList, isTodo }) => {

    // useEffect(() => {
    //     getData();
    // }, [])

    // const [list, setList] = useState(null);

    // const getData = async () => {
    //     try {
    //         const jsonValue = await AsyncStorage.getItem('@todolist')
    //         console.log("as" + jsonValue);
    //         setList(jsonValue != null ? JSON.parse(jsonValue) : null)
    //     } catch (e) {
    //         // error reading value
    //     }
    // }

    let keys = list && Object.keys(list);
    let todoList = keys != null && keys.map(id => <ToDo key={id} id={id} list={list} setList={setList} todo={list[id]} storageKey={isTodo ? '@todolist' : '@donelist'} secondStorageKey={!isTodo ? '@todolist' : '@donelist'} isTodo={isTodo}/>)

    return (
        <View>
            <>{todoList}</>
        </View>
    )
}

export default ToDoList

const styles = StyleSheet.create({

})