import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import CreateToDo from '../L3-components/Todo/CreateToDo'
import ToDoList from '../L3-components/Todo/ToDoList'
import FooterMenu from '../L3-components/FooterMenu/FooterMenu';
import { getTodos } from '../L0-redux/features/todoSlice';

const Todo = ({ navigation }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTodos())
    }, [])

    const list = useSelector(state => state.todos);

    return (
        <View style={styles.container}>
            <ToDoList list={list} isTodo={true}/>
            <View style={styles.createTodo}>
                <CreateToDo list={list} />
                <FooterMenu navigation={navigation}/>
            </View>
        </View>
    )
}

export default Todo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 15,
        justifyContent: 'space-between',
        backgroundColor: 'black'
    },
    createTodo: {
        alignItems: 'flex-end'
    }
})