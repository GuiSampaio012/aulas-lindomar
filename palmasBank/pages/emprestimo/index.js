import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'
import { TextInput } from 'react-native-web';
import axios from 'axios';
import Voltar from '../../voltar';

export default function Emprestimo({navigation}) {
    const[contador, setContador] = useState(0)
    const refresh = () => window.location.reload(true)
    const [saldoR, setSaldoR] = useState('')
    const [saldo, setSaldo] = useState(1000)
    const[token, setToken] = useState('')
    const[teste, setTeste] = useState([])
    // console.log(teste)  
    // console.log(contaPag)

    useEffect(() => {
        pegartoken()
    }, [])

    // useEffect(() => {
    //     const unsubscribe = navigation.addListener('focus', () => {
    //       // Lógica ou chamada de função para atualizar os dados antes de renderizar
    //       console.log('Página renderizada automaticamente!');
    //     });
    
    //     // Limpeza do listener quando o componente é desmontado
    //     return unsubscribe;
    // }, [navigation]);


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

    
    const pegartoken = () => {
        const acesso = localStorage.getItem("dados")
        let chave =""
        if (acesso) {
            chave = JSON.parse(acesso).access
            setToken(chave)
        }
    }
    
    function emprestar() { 
        // essa parte da função entra no banco e seleciona os dados da conta do usuario
        axios.get(`http://127.0.0.1:8000/crud/contas/?filtro=${teste.cliente_conta}`,{headers:{Authorization: 'JWT ' + token}},)
        .then((res) => {
          let usuario_encontrado = []
          usuario_encontrado.push(res.data[0])
          usuario_encontrado = usuario_encontrado[0]
          console.log(usuario_encontrado)
          
          //adiconando o valor do empréstimo para a conta do usuario
          if(saldo > 0){
            usuario_encontrado.saldo = parseFloat(usuario_encontrado.saldo) + parseFloat(saldo)
            axios.put(`http://127.0.0.1:8000/crud/contas/${usuario_encontrado.id}`,usuario_encontrado,{headers:{Authorization: 'JWT ' + token}})
            .then((res) => {
              console.log(res.data);
              navigation.navigate('TelaEmprestimo')
            })
          }
          else{
            alert('NÃO FOI POSSÍVEL REALIZAR A TRANSFERENCIA')
          }
        })
    }


    return (
    <>
        <Voltar></Voltar>
        <View style={styles.container}>
            
            <View style={styles.caixaSaldo}>
                <View style={styles.saldo}>
                    <Text style={styles.saldoReal}> {saldoR} R$ </Text>
                </View>
            </View>


            <View style={styles.abaItens}>

                <View  style={styles.acoes}>
                    <Text style={styles.texto1}>Que valor deseja pegar emprestado ?</Text>
                    <select onChange={(e) => (setSaldo(e.target.value))}
                    style={styles.tipo}>
                        <option value='1000'>1000</option>
                        <option value='2000'>2000</option>
                        <option value='3000'>3000</option>
                    </select>
                    {/* <TextInput  style={styles.input}
                        placeholder='Valor a pegar emprestado'
                        keyboardType='text'
                        onChangeText={(e) => setSaldo(e)}
                    /> */}
                </View>

                <View style={styles.acoes}>
                    <View style={styles.btn}>
                        <TouchableOpacity style={styles.itens} onPress={()=>emprestar()}>
                            <Text style={styles.texto2}>
                                Solicitar emprestimo
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>            
      
        </View>
    </>

    )
}