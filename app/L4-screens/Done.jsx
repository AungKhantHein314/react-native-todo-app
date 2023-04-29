import { View, Text, StyleSheet } from 'react-native'
import { useEffect, useState } from 'react'
import ToDoList from '../L3-components/Todo/ToDoList'
import FooterMenu from '../L3-components/FooterMenu/FooterMenu';
import { useSelector, useDispatch } from 'react-redux';
import { getDones } from '../L0-redux/features/doneSlice';

const Done = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDones());
  }, [])

  const list = useSelector(state => state.dones);

  return (
    <View style={styles.container}>
      <ToDoList list={list} isTodo={false}/>
      <View style={styles.createTodo}>
        <FooterMenu navigation={navigation} />
      </View>
    </View>
  )
}

export default Done

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