import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'
import Arvores from '../../assets/images-removebg-preview.png'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

const Cadastro=({navigation})=> {
    const navigate = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [semiSenha, setSemiSenha] = useState('')

    const ativa = "A"
    const saldo = 1000
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const foto = "teste"
    const [data_nascimento, setData_nascimento] = useState('');
    const [celular, setCelular] = useState('');
    const tipo_cliente = "F"
   
    const[token, setToken] = useState('')
    const[teste, setTeste] = useState([])

    useEffect(() => {
        pegartoken()
    }, [])

    // useEffect(() =>{
    //     axios.get('http://127.0.0.1:8000/crud/contas/', {headers:{Authorization: 'JWT ' + token}}).then((response) => {
    //         //console.log(response)
    //         setTeste(response['data'][0])
    // },)
    // },[token])
    
    const pegartoken = () => {
        const acesso = localStorage.getItem("dados")
        let chave =""
        if (acesso) {
            chave = JSON.parse(acesso).access
            setToken(chave)
        }
    }

    const cadastrar = () => {
        // essa funcão CADASTRA
        if (semiSenha == password){
            axios.post('http://127.0.0.1:8000/auth/users/', {
            nome: nome,
            cpf: cpf,
            foto_logo:foto,
            data_nascimento:data_nascimento,
            celular:celular,
            tipo_cliente:tipo_cliente,
            email:email,
            password: password
            }).then((res) =>{ 
                if(res.status==200||res.status==201) {
                    console.log(res.data.id)
                    localStorage.setItem('dadosCad',JSON.stringify(res.data))
                    axios.post('http://127.0.0.1:8000/auth/jwt/create', {
                        email: email,
                        password: password
                    }).then((res) =>{ 
                        localStorage.setItem('dados',JSON.stringify(res.data))
                        axios.get('http://127.0.0.1:8000/auth/users/me/',  {headers:{Authorization: 'JWT ' + res.data.access}})
                        .then((response) => {
                            console.log(response.data)
                            axios.post('http://127.0.0.1:8000/crud/contas/',{
                                cliente_conta:response.data.id,
                                ativa:ativa,
                                saldo:saldo
                                },{headers:{Authorization: 'JWT ' + res.data.access}},)
                                .then((res) =>{
                                    console.log(res.data);
                                    navigation.navigate('Home')
                                })
                        })    
                    })
                    
                }
            })
            navigation.navigate('Login')
            console.log('deu certooooo')
        }
        else{
            console.log('senha está incorreta')
            alert('senha incorreta')
        }
        
        console.log('function cadastrar:');
    }

    return (
        <View style={styles.container}>

            <View style={styles.caixote}>
                <View style={styles.caixa}>
                    <TextInput
                        style={styles.entrada}
                        placeholder='Nome'
                        onChangeText={(e) => {setNome(e)}}
                    />
                </View>

                <View style={styles.caixa}>
                    <TextInput
                        style={styles.entrada}
                        placeholder='Cpf'
                        onChangeText={(e) => {setCpf(e)}}
                    />
                </View>

                <View style={styles.caixa}>
                    <TextInput
                        style={styles.entrada}
                        placeholder='Data de Nascimento'
                        onChangeText={(e) => {setData_nascimento(e)}}
                    />
                </View>

                <View style={styles.caixa}>
                    <TextInput
                        style={styles.entrada}
                        placeholder='Celular'
                        onChangeText={(e) => {setCelular(e)}}
                    />
                </View>

                <View style={styles.caixa}>
                    <TextInput
                        style={styles.entrada}
                        placeholder='Email'
                        keyboardType='email'
                        onChangeText={(e) => setEmail(e)}
                    />
                </View>

                <View style={styles.caixa}>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.entrada}
                        placeholder='Senha'
                        keyboardType='text'
                        onChangeText={(e) => setSemiSenha(e)}
                    />
                </View>

                <View style={styles.caixa}>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.entrada}
                        placeholder='Confirme a Senha'
                        keyboardType='text'
                        onChangeText={(e) => setPassword(e)}
                    />
                </View>

                {/* <View style={styles.caixa}> 
                    <View style={styles.foto0}>
                        <img src={preview} style={styles.foto1} />
                    </View>

                    <View style={styles.entrada}>
                        <input
                            type='file'
                            onChange={e => {
                            setImage(e.target.files[0])
                            }}
                        />
                    </View>

                    <View>
                        <Text style={styles.sucesso}>{texto}</Text>
                    </View> 
                </View> */}

                <View style={styles.caixa}>
                    <TouchableOpacity
                        style={styles.botao}
                        onPress = {() => cadastrar()}
                    >
                        <Text style={styles.texto}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
                
                {/* <TouchableOpacity style={styles.btn} onPress={upload}>
                    <Text style={styles.texto}>Upload</Text>
                </TouchableOpacity> */}
            </View>

        </View>
    )
}
export default Cadastro;