import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'
import { TextInput } from 'react-native';
import Card from '../../assets/Card.png'
import axios from 'axios';
import Voltar from '../../voltar';

export default function Cartao({navigation}) {
    const[token, setToken] = useState('')
    const[teste, setTeste] = useState([])

    useEffect(() =>{
        console.log("FOI")
        axios.get('http://127.0.0.1:8000/auth/users/me/',  {headers:{Authorization: 'JWT ' + token}}).then((response) => {
            console.log(response.data)
            axios.get(`http://127.0.0.1:8000/crud/clientes/${response.data.id}`, {headers:{Authorization: 'JWT ' + token}}).then((res) =>{
                console.log(res.data)
                axios.get(`http://127.0.0.1:8000/crud/contas/?filtro=${response.data.id}`, {headers:{Authorization: 'JWT ' + token}}).then((response) => {
                    console.log(response.data)
                    setTeste(response['data'][0])
                    console.log(teste.cliente_conta)
                    setSaldoR(response['data'][0]['saldo'])
                })
            })

        })
    },[token])

    // const criarCartao = () => {
    //     axios.post('http://127.0.0.1:8000/crud/cartao/',{
            
    //     })
    //     .then((res) =>{
    //         console.log(res.data);
    //     })
    // }

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
                        <img style={styles.img} src={Card}/>
                    </View>

                    <View style={styles.caixa}>
                        <Text style={styles.entrada}>
                            deseja solicitar um cartão de crédito para você ?
                        </Text>
                        <View style={styles.caixote2}>
                            <TouchableOpacity style={styles.botao} onPress={()=>navigation.navigate('TelaCartao')}>
                                <Text style={styles.texto}>Solicite o seu cartão</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                </View>
            </View>
        </>

        
    )
}