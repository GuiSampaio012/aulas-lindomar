import { View, Text, TouchableOpacity } from 'react-native'
import {Fontisto} from '@expo/vector-icons'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'

export default function Home() {
    const navigation = useNavigation()
    const deslogar = () => {
        //3 etapas
        //1 - limpar localstorage
        localStorage.clear()
        //2 - alterar o state setLogado
        setLogado(false)
        //3 - redirecionar para o login
        navigate('/login')
    }
    return (
        <View style={styles.container}>
            <View style={styles.banner}>
                <View style={styles.menu}>

                    <View style={styles.figura}>
                        <TouchableOpacity
                            onPress={()=>navigation.navigate('Login')}
                        >
                            <Fontisto name={'user-secret'} size={35} color='black'/>
                        </TouchableOpacity>
                        
                    </View>
                    <View style={styles.figura}>
                        <TouchableOpacity
                            onPress={()=>navigation.navigate('Login')}
                        >
                            <Fontisto name={'user-secret'} size={35} color='black'/>
                        </TouchableOpacity>
                        
                    </View>

                    {/* <View style={styles.subMenu}>
                        <Text>Suporte</Text>
                        <Text>Downloads</Text>
                        <Text>Contact</Text>
                    </View> */}
                    
                    
                </View>  
            </View>

            <View style={styles.caixaSaldo}>
                <View style={styles.saldo}>
                    <Text style={styles.saldoReal}> 0,00 R$ </Text>
                </View>
            </View>

            <View style={styles.abaItens}>
                <View style={styles.acoes}>

                    <TouchableOpacity>
                        <View style={styles.itens}>
                            emprestimo
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>navigation.navigate('Extrato')}>
                        <View style={styles.itens}>
                            extrato
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.itens}>
                            cartão de crédito
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.itens}>
                            investimentos
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                        <View style={styles.itens}>
                            seguros
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                        <View style={styles.itens}>
                            financias
                        </View>
                    </TouchableOpacity>
                    
                    {/* <View style={styles.itens}>
                        transferencias
                    </View> */}
                    {/* <View style={styles.itens}>
                        atendimento
                    </View> */}
                </View>
            </View>

        </View>
    )
}