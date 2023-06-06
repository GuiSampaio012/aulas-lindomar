import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'
import { TextInput } from 'react-native';
import axios from 'axios';

export default function Extrato({navigation}) {
    const [saldoR, setSaldoR] = useState('')
  
    const [saldo, setSaldo] = useState('')

    const[token, setToken] = useState('')
    const[teste, setTeste] = useState([])
    const[dadosTran, setDadosTran] = useState([])


    
    useEffect(() =>{
        console.log("FOI")
        axios.get('http://127.0.0.1:8000/auth/users/me/', {headers:{Authorization: 'JWT ' + token}}).then((response) => {
            console.log(response.data)
            axios.get(`http://127.0.0.1:8000/crud/clientes/${response.data.id}`, {headers:{Authorization: 'JWT ' + token}}).then((res) =>{
                console.log(res.data)
                axios.get(`http://127.0.0.1:8000/crud/contas/?filtro=${response.data.id}`, {headers:{Authorization: 'JWT ' + token}}).then((response) => {
                    console.log(response.data)
                    setTeste(response['data'][0])
                    console.log(teste.cliente_conta)
                    setSaldoR(response['data'][0]['saldo'])
                    axios.get(`http://127.0.0.1:8000/crud/transferencia/?filtro=${response.data[0].cliente_conta}`).then((res) =>{
                        console.log(res.data)
                        setDadosTran(res['data'])
                    })
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
        <View style={styles.container}>

            <View style={styles.guardarInfo}>  
                {dadosTran.map((dadosTran) => (
                    <View style={styles.container2} key={dadosTran.id}> 
                        <table>
                            <tr>
                                <th>Valor enviado</th>
                                <th>Conta pagadora</th>
                                <th>Tipo de transferencia</th>
                                <th>Conta remetente</th>
                                <th>data da transação</th>
                            </tr>
                            <tr>
                                <td><Text style={styles.entrada}>{dadosTran.valor_enviado}</Text></td>
                                <td><Text style={styles.entrada}>{dadosTran.conta_transferencia}</Text></td>
                                <td><Text style={styles.entrada}>{dadosTran.tipo}</Text></td>
                                <td><Text style={styles.entrada}>{dadosTran.conta_remetente}</Text></td>
                                <td><Text style={styles.entrada}>{dadosTran.data_hora}</Text></td>
                            </tr>
                        </table>
                    </View>
                ))}
                   
            </View>
            
        </View>
        
    )
}