import { Button, StyleSheet, Text, View, Alert, Modal, Pressable, TextInput } from 'react-native'
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../L0-redux/features/todoSlice';

const CreateToDo = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const [newTodo, setNewTodo] = useState('');

    const dispatch = useDispatch();

    const createNewTodo = async () => {
        dispatch(addTodo(newTodo)).then(() => {
            setNewTodo("")
            setModalVisible(false)
        })
    }

    return (
        <View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.inputBox}>
                    <TextInput style={styles.textInput}
                        onChangeText={setNewTodo}
                        value={newTodo}
                         />
                    <View style={styles.buttonsContainer}> 
                        <Button color='transparent' title='CANCEL' onPress={() => setModalVisible(false)}/>
                        <Button color='transparent' title='ADD' onPress={() => createNewTodo()}/>
                    </View>
                    </View>
                </View>
            </Modal>

            <Pressable
                style={styles.addButton}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.plusSign}>+</Text>
            </Pressable>
        </View>
    )
}

export default CreateToDo

const styles = StyleSheet.create({
    container: {
        color: 'purple',
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addButton: {
        backgroundColor: 'green',
        height: 50,
        width: 50,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    plusSign: {
        color: 'white',
        fontSize: 30
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    inputBox: {
        backgroundColor: 'black',
        paddingVertical: 22,
        paddingHorizontal: 15,
        borderRadius: 11
    },
    textInput: {
        width: 250,
        color: 'white',
        borderBottomWidth: 5,
        borderColor: 'purple',
        padding: 11
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 11
    }
})