import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const FooterMenu = ({ navigation }) => {

    const navigate = (href) => {
        navigation.navigate(href)
    }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
      <Button style={styles.text} title='Todo' color='black' onPress={() => navigate('ToDo')}/>
      </View>
      <View style={styles.box}>
        <Button style={styles.text} title='Done' color='black' onPress={() => navigate('Done')}/>
      </View>
    </View>
  )
}

export default FooterMenu

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 7,
    },
    box: {
        width: '50%',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'white',
        paddingVertical: 3
    },
    text: {
        color: 'white'
    }
})