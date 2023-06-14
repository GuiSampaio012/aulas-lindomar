import { View, Text, TouchableOpacity } from 'react-native'
import {Fontisto} from '@expo/vector-icons'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
    const [logado,setLogado] = useState(false)
    const[token, setToken] = useState('')
    const[teste, setTeste] = useState([])
    const[idCli, setIdCli] = useState('')
    const[saldo, setSaldo] = useState('')
    const navigation = useNavigation()

    const acesso = localStorage.getItem("dados")
    let chave =""

    const refresh = () => window.location.reload(true)

    


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
                    setSaldo(response['data'][0]['saldo'])
                })
            })

        })
    },[token])


    useEffect(() =>{
        console.log(chave);
        axios.post(`http://127.0.0.1:8000/auth/jwt/verify/`, {token: chave})
        .then((response) =>{
            if(response.status==200 || response.status==201){
                setLogado(true)
            }
            else{
                setLogado(false) 
                refresh()
            }
        })
    },[])

    const pegartoken = () => {
        if (acesso) {
            chave = JSON.parse(acesso).access
            setToken(chave)
        }
        else{
            chave = 'deu ruim'
        }
    }

    
    const deslogar = () => {
        //3 etapas
        //1 - limpar localstorage
        localStorage.clear()
        //2 - alterar o state setLogado
        console.log(logado)
        setLogado(false)
        //3 - redirecionar para o login
        refresh()
    }

    return (
        <View style={styles.container}>
            <View style={styles.banner}>
                <View style={styles.menu}>
                    <View style={styles.figura}>
                        {logado? 
                            <TouchableOpacity
                                onPress={()=>deslogar()}
                            >
                                <Text style={styles.deslogar}>DESLOGAR </Text>
                            </TouchableOpacity>: 


                            <TouchableOpacity
                            onPress={()=>navigation.navigate('Login')}
                            >
                                <Fontisto name={'male'} size={35} color='black'/>
                            </TouchableOpacity>
                        }
                    </View>
                </View>  
            </View>

            <View style={styles.caixaSaldo}>
                <View style={styles.saldo}>
                    <Text style={styles.saldoReal}> {saldo} R$</Text>
                </View>
            </View>

            <View style={styles.abaItens}>
                <View style={styles.acoes}>

                    <TouchableOpacity style={styles.itens} onPress={()=>navigation.navigate('Transferencia')}>
                        <Text>
                            transferências
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.itens} onPress={()=>navigation.navigate('Extrato')}>
                        <Text>
                            extrato
                        </Text>
                    </TouchableOpacity>
                </View>
                    
                <View style={styles.acoes}>

                    <TouchableOpacity style={styles.itens} onPress={()=>navigation.navigate('Cartao')}>
                        <Text>
                            cartão de crédito
                        </Text>
                    </TouchableOpacity>
                  
                    <TouchableOpacity style={styles.itens} onPress={()=>navigation.navigate('Emprestimo')}>
                        <Text>
                            emprestimo
                        </Text>
                    </TouchableOpacity>

                </View>

                {/* <View style={styles.acoes}>               
        
                    <TouchableOpacity style={styles.itens}>
                        <Text>
                            investimentos
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.itens}>
                        <Text>
                            financias
                        </Text>
                    </TouchableOpacity>
                </View>     */}
                    
                    {/* <View style={styles.itens}>
                        transferencias
                    </View> */}
                    {/* <View style={styles.itens}>
                        atendimento
                    </View> */}
                
            </View>

        </View>
    )
}