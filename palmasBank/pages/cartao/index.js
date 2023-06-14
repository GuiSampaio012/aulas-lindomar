import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'
import { TextInput } from 'react-native';
import Card from '../../assets/Card.png'
import axios from 'axios';
import Voltar from '../../voltar';
import { useNavigation } from '@react-navigation/native';

export default function Cartao({ navigation }) {


    const[numCartao, setNumCartao] = useState('')
    const[cvv, setCvv] = useState('')
    const[dataValidade, setDataValidade] = useState('')
    const [cliente, setCliente] = useState('')
    const [token, setToken] = useState('')
    const [teste, setTeste] = useState([])
    const navigate = useNavigation()

    useEffect(() => {
        console.log("FOI")
        axios.get('http://127.0.0.1:8000/auth/users/me/', { headers: { Authorization: 'JWT ' + token } }).then((response) => {
            console.log(response.data)
            axios.get(`http://127.0.0.1:8000/crud/clientes/${response.data.id}`, { headers: { Authorization: 'JWT ' + token } }).then((res) => {
                setCliente(res.data)
                console.log(res.data)
                axios.get(`http://127.0.0.1:8000/crud/cartao/?filtro=${response.data.id}`, { headers: { Authorization: 'JWT ' + token } }).then((response) => {
                    console.log(response.data[0])
                    setTeste(response['data'][0])
                    console.log(teste.cliente_conta)
                })
            })

        })
    }, [token])

    const criarCartao = () => {
        axios.post('http://127.0.0.1:8000/crud/cartao/', { conta_cartao: cliente.id }, { headers: { Authorization: 'JWT ' + token } }
        )
        .then((res) => {
            console.log(res.data);
            navigation.navigate('TelaCartao')
        })
    }

    useEffect(() => {
        pegartoken()
    }, [])

    const pegartoken = () => {
        const acesso = localStorage.getItem("dados")
        let chave = ""
        if (acesso) {
            chave = JSON.parse(acesso).access
            setToken(chave)
        }
    }

    return (
        <>
        {console.log("Teste"+ teste)}
            <Voltar></Voltar>

            {teste == null ?
                <>
                    <View style={styles.container}>
                        <View style={styles.caixote}>

                            <View style={styles.caixa}>
                                <img style={styles.img} src={Card} />
                            </View>

                            <View style={styles.caixa}>
                                <Text style={styles.entrada}>
                                    deseja solicitar um cartão de crédito para você ?
                                </Text>
                                <View style={styles.caixote2}>
                                    <TouchableOpacity style={styles.botao} onPress={() => criarCartao()}>
                                        <Text style={styles.texto}>Solicite o seu cartão</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>
                    </View>
                </> :
                <>
                    <View style={styles.container}>
                        <View style={styles.caixote}>

                            <View style={styles.caixa}>

                                <View style={styles.card}>
                                    <View style={styles.sozinho}>
                                        <Text style={styles.numeroCard}>{teste.numero}</Text>
                                    </View>
                                    <View style={styles.junto}>
                                        <Text style={styles.cvvCard}>{teste.cvv}</Text>
                                        <Text style={styles.validadeCard}>{teste.validade}</Text>
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
            }
        </>


    )
}