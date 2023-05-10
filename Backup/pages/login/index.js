import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const auth = getAuth();

    const btLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigation.navigate('Create')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }
    return (
        <View style={styles.container}>

            <View style={styles.caixa}>
                <TextInput
                    style={styles.entrada}
                    placeholder='email'
                    keyboardType='email'
                    value={email}
                    onChangeText={(e) => setEmail(e)}
                />
            </View>

            <View style={styles.caixa}>
                <TextInput
                    secureTextEntry={true}
                    style={styles.entrada}
                    placeholder='password'
                    keyboardType='text'
                    value={password}
                    onChangeText={(e) => setPassword(e)}
                />
            </View>

            <View style={styles.caixa}>
                <TouchableOpacity
                    style={styles.botao}
                    onPress={()=>btLogin()}
                >
                    <Text style={styles.texto}>Login</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}