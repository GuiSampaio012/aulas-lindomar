import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'
import { TextInput } from 'react-native';
import Card from '../../assets/Card.png'
import axios from 'axios';
import Voltar from '../../voltar';

export default function TelaCartao({navigation}) {
    const[token, setToken] = useState('')
    const[teste, setTeste] = useState([])

    useEffect(() =>{
        console.log("FOI")
        axios.get('http://127.0.0.1:8000/auth/users/me/',  {headers:{Authorization: 'JWT ' + token}}).then((response) => {
            console.log(response.data)
            axios.get(`http://127.0.0.1:8000/crud/clientes/${response.data.id}`, {headers:{Authorization: 'JWT ' + token}}).then((res) =>{
                console.log(res.data)
                axios.get(`http://127.0.0.1:8000/crud/cartao/?filtro=${response.data.id}`, {headers:{Authorization: 'JWT ' + token}}).then((response) => {
                    console.log(response.data)
                    setTeste(response['data'][0])
                })
            })

        })
    },[token])

    useEffect(() => {
        pegartoken()
    }, [])
    
    const pegartoken = () => {
        const acesso = localStorage.getItem("dados")
        let chave =""
        if (acesso) {
            chave = JSON.parse(acesso).access
            setToken(chave)
        }
    }

    return (
        <>
            <Voltar></Voltar>
            <View style={styles.container}>
                <View style={styles.caixote}>

                    <View style={styles.caixa}>

                        <View style={styles.card}> 
                            <View style={styles.sozinho}>
                                <Text style={styles.numeroCard}>numero</Text>
                            </View>
                            <View style={styles.junto}>
                                <Text style={styles.cvvCard}>cvv</Text>
                                <Text style={styles.validadeCard}>validade</Text>
                            </View>
                        </View>
                        
                    </View>

                    <View style={styles.caixa}>
                        <Text style={styles.entrada}>
                           Parabéns, agora este é o seu cartão
                        </Text>
                        {/* <View style={styles.caixote2}>
                            <TouchableOpacity style={styles.botao}>
                                <Text style={styles.texto}>Solicite o seu cartão</Text>
                            </TouchableOpacity>
                        </View> */}
                    </View>
                    
                </View>
            </View>
        </>
        
        
    )
}