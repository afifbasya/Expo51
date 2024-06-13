import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function index() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(true);

    const handleSubmit = () => {
        //pengkondisian (if / else)
        if (email === "") {
            return Alert.alert('Error', 'Maaf Email Harus Diisi');
        }

        if (password === "") {
            return Alert.alert('Error', 'Maaf Password Harus Diisi');
        }

        postAPI();
    }

    const postAPI = async () => {
        await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password
            })
        })
            .then(response => response.json())
            .then(json => {
                console.log("Json : ", json);
            })
    }

    return (
        <View style={styles.container}>
            <Text>Email :</Text>
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
            />

            <Text style={{ marginTop: 20 }}>Password :</Text>
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                secureTextEntry={show}
            />

            <TouchableOpacity onPress={() => setShow(!show)}>
                <Text>{show ? "Tampil" : "Sembunyikan"}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
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