import { StyleSheet, Text, View, Modal, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import OptionsMenu from "react-native-options-menu";
import CheckBox from 'expo-checkbox';

import { editTodo, deleteTodo, addTodo } from '../../L0-redux/features/todoSlice';
import { addDone, deleteDone, editDone } from '../../L0-redux/features/doneSlice';

const ToDo = ({ todo, id, list, setList, storageKey, secondStorageKey, isTodo }) => {
    const dispatch = useDispatch();

    const [toggleCheckBox, setToggleCheckBox] = useState(!isTodo)
    const Icon = (<Text style={{ color: 'white', fontSize: 20 }}>...</Text>)

    const [editedTodo, setEditedTodo] = useState(todo);
    const [modalVisible, setModalVisible] = useState(false);

    const showEditTodo = () => {
        setModalVisible(true);
    }

    const handleEdit = () => {
        isTodo ? dispatch(editTodo({editedTodo, id})) : dispatch(editDone({editedTodo, id}));
        setModalVisible(false);
    }

    const handleDelete = () => {
        isTodo ? dispatch(deleteTodo(id)) : dispatch(deleteDone(id));
    }

    const handleValueChange = () => {
        if(isTodo) {
            dispatch(deleteTodo(id));
            dispatch(addDone(todo));
        } else {
            dispatch(deleteDone(id));
            dispatch(addTodo(todo));
        }
    }

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={handleValueChange}
                />
                <Text style={styles.text}>{todo}</Text>
            </View>

            <OptionsMenu
                style={styles.optionsMenu}
                
                customButton={Icon}
                destructiveIndex={1}
                options={["Edit", "Delete", "Cancel"]}
                actions={[showEditTodo, handleDelete, () => {}]} />
            
            
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.inputBox}>
                    <TextInput style={styles.textInput}
                        onChangeText={setEditedTodo}
                        value={editedTodo}
                         />
                    <View style={styles.buttonsContainer}> 
                        <Button color='transparent' title='CANCEL' onPress={() => setModalVisible(false)}/>
                        <Button color='transparent' title='EDIT' onPress={handleEdit}/>
                    </View>
                    </View>
                </View>
            </Modal>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        paddingLeft: 15,
        color: 'white'
    },
    optionsMenu: {
        backgroundColor: 'black',
        color: 'white'
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

export default ToDo

