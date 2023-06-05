import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'
import { TextInput } from 'react-native-web';
import axios from 'axios';

export default function Transferencia({navigation}) {
    const refresh = () => window.location.reload(true)
    const [saldoR, setSaldoR] = useState('')
    const [contaPag,  setContaPag] = useState('')
    const [contaRem,  setContaRem] = useState('')
    const [tipo,  setTipo] = useState('P')
  
    const [saldo, setSaldo] = useState('')

    const[token, setToken] = useState('')
    const[teste, setTeste] = useState([])
    // console.log(teste)  
    // console.log(contaPag)

    useEffect(() => {
        pegartoken()
    }, [])


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
    
    function transferencia() { 
        // essa parte da função entra no banco e seleciona os dados da conta pagadora
        let historico_transferencia = ({ valor_enviado: saldo, conta_transferencia: teste.cliente_conta, tipo: tipo, conta_remetente: contaRem})
        axios.get(`http://127.0.0.1:8000/crud/contas/?filtro=${teste.cliente_conta}`,{headers:{Authorization: 'JWT ' + token}},)
        .then((res) => {
          let usuario_encontrado = []
          usuario_encontrado.push(res.data[0])
          console.log(usuario_encontrado)
          usuario_encontrado = usuario_encontrado[0]
          
          //descontando o valor que a conta está pagando
          if(saldo > 0 && usuario_encontrado.saldo >= saldo ){
            usuario_encontrado.saldo = parseFloat(usuario_encontrado.saldo) - parseFloat(saldo)
            axios.put(`http://127.0.0.1:8000/crud/contas/${usuario_encontrado.id}`,usuario_encontrado,{headers:{Authorization: 'JWT ' + token}})
            .then((res) => {
              console.log(res.data);
            })
            // essa parte da função entra no banco e seleciona os dados da conta remetente
            axios.get(`http://127.0.0.1:8000/crud/contas/?filtro=${contaRem}`,{headers:{Authorization: 'JWT ' + token}},)
            .then((res) => {
              let remetente_encontrado = []
              remetente_encontrado.push(res.data[0])
              remetente_encontrado = remetente_encontrado[0]
    
              //adicionando o valor que a conta está recebendo
              remetente_encontrado.saldo = parseFloat(remetente_encontrado.saldo) + parseFloat(saldo)
              axios.put(`http://127.0.0.1:8000/crud/contas/${remetente_encontrado.id}`,remetente_encontrado,{headers:{Authorization: 'JWT ' + token}})
              .then((res) => {
                console.log(res.data);
              })
            })
            // adiconando a trasação para o banco
            axios.post('http://127.0.0.1:8000/crud/transferencia/', historico_transferencia)
            refresh()
          }
          else if(saldo <= 0){
            alert('DIGITE UM VALOR MAIOR QUE "0"') 
          }
          else{
            alert('SALDO INSUFICIENTE')
          }
        })
    }


    return (
    <>
        <View style={styles.container}>
            <View style={styles.caixaSaldo}>
                <View style={styles.saldo}>
                    <Text style={styles.saldoReal}> {saldoR} R$ </Text>
                </View>
            </View>


            <View style={styles.abaItens}>

                <View style={styles.acoes}>
                    <Text style={styles.texto1}>Quem irá receber a transferência ?</Text>
                    <TextInput style={styles.input}  
                        placeholder='Conta corrente'
                        keyboardType='text'
                        onChangeText={(e) => setContaRem(e)}
                    />
                </View>

                <View  style={styles.acoes}>
                    <Text style={styles.texto1}>Quanto será o valor a enviar ?</Text>
                    <TextInput  style={styles.input}
                        placeholder='Valor a enviar'
                        keyboardType='text'
                        onChangeText={(e) => setSaldo(e)}
                    />
                </View>

                <View  style={styles.acoes}>
                    <Text style={styles.texto1}>Qual será o tipo da transfêrencia ?</Text>
                    <select onChange={(e) => (setTipo(e.target.value))}
                    style={styles.tipo}>
                        <option value='P'>Pix</option>
                        <option value='D'>Depósito</option>
                        <option value='T'>Transferência</option>
                    </select>

                    <View style={styles.btn}>
                        <TouchableOpacity style={styles.itens} onPress={()=>transferencia()}>
                            <Text style={styles.texto2}
                            >
                                TRANSFERIR
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>            
      
        </View>
    </>

    )
}