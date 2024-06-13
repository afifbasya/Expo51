import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function index() {
  return (
    <View style={styles.container}>
      <Text>Email :</Text>
      <TextInput style={styles.input} />

      <Text style={{ marginTop: 20 }}>Password :</Text>
      <TextInput style={styles.input} />

      <TouchableOpacity style={styles.button}>
        <Text style={{ color: 'white' }}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    backgroundColor: 'white',
    marginTop: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 5
  },
  button: {
    marginTop: 20,
    backgroundColor: 'black',
    padding: 10,
    alignItems: 'center'
  }
})