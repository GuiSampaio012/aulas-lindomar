import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'
import axios from 'axios'
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Arvores from '../../assets/images-removebg-preview.png'
import { useNavigation } from '@react-navigation/native'


export default function Login() {
    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')
    const [logado, setLogado] = useState(false)
    const navigation = useNavigation()

    const btCadastro = () => {
        navigation.navigate('Cadastro')
    }



    const logar = () => {
        // essa funcão LOGA
        axios.post('http://127.0.0.1:8000/auth/jwt/create', {
          email: login,
          password: senha
        }).then((res) =>{ 
            localStorage.setItem('dados',JSON.stringify(res.data))
            navigation.navigate('Home')
        })
        console.log('function logar:');
        console.log(login)
        console.log(senha)
    }
    
    
    const refresh = () => {
        const token = JSON.parse(localStorage.getItem('dados'))
        axios.post('http://127.0.0.1:8000/auth/jwt/refresh', {
          refresh: token.refresh
        }).then(res => localStorage.setItem('dados', JSON.stringify({...token, access: res.data.access})))
    
    }
    
    
    

    return (
        <View style={styles.container}>

            <View style={styles.caixote}>
                <View>
                    <img style={styles.img} src={Arvores}/>
                </View>
                <View style={styles.caixa}>
                    <TextInput
                        style={styles.entrada}
                        placeholder='usuario'
                        keyboardType='email'
                        value={login}
                        onChangeText={(e) => setLogin(e)}
                    />
                </View>

                <View style={styles.caixa}>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.entrada}
                        placeholder='password'
                        keyboardType='text'
                        value={senha}
                        onChangeText={(e) => setSenha(e)}
                    />
                </View>

                    
                <View style={styles.grupoBotoes}>  
                    <TouchableOpacity
                        style={styles.botao}
                        onPress={()=>logar()}
                    >
                        <Text style={styles.texto}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botao}
                        onPress={()=>btCadastro()}
                    >
                        <Text style={styles.texto}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
                   

            </View>
        </View>

            
    )
}