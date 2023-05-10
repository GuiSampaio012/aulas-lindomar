import { View, Text, TouchableOpacity } from 'react-native'
import {Fontisto} from '@expo/vector-icons'
import styles from './styles'

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.banner}>
                
            </View>

            <View style={styles.menu}>
                <View style={styles.subMenu}>
                    <Text>Suporte</Text>
                    <Text>Downloads</Text>
                    <Text>Contact</Text>
                </View>
                
                <View style={styles.figura}>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('Login')}
                    >
                        <Fontisto name={'user-secret'} size={35} color='black'/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}