import { View, Text, TouchableOpacity } from 'react-native'
import {Fontisto} from '@expo/vector-icons'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'

export default function Home({logado}) {
    const navigation = useNavigation()
    const deslogar = () => {
        //3 etapas
        //1 - limpar localstorage
        localStorage.clear()
        //2 - alterar o state setLogado
        console.log(logado)
        logado = false
        //3 - redirecionar para o login
        navigation.navigate('Login')
    }
    return (
        <View style={styles.container}>
            <View style={styles.banner}>
                <View style={styles.menu}>
                    <View style={styles.figura}>
                        <TouchableOpacity
                            onPress={()=>deslogar()}
                        >
                            <Text style={styles.deslogar}>DESLOGAR </Text>
                        </TouchableOpacity>
                        
                    </View>
                    <View style={styles.figura}>
                        <TouchableOpacity
                            onPress={()=>navigation.navigate('Login')}
                        >
                            <Fontisto name={'male'} size={35} color='black'/>
                        </TouchableOpacity>
                    </View>           
                </View>  
            </View>

            <View style={styles.caixaSaldo}>
                <View style={styles.saldo}>
                    <Text style={styles.saldoReal}> 0,00 R$ </Text>
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

                    <TouchableOpacity style={styles.itens}>
                        <Text>
                            cartão de crédito
                        </Text>
                    </TouchableOpacity>
                  
                    <TouchableOpacity style={styles.itens}>
                        <Text>
                            investimentos
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.acoes}>               
                    
                    <TouchableOpacity style={styles.itens}>
                        <Text>
                            emprestimo
                        </Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.itens}>
                        <Text>
                            financias
                        </Text>
                    </TouchableOpacity>
                </View>    
                    
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