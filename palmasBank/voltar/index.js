import { View, Text, TouchableOpacity } from 'react-native'
import {Fontisto} from '@expo/vector-icons'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Voltar(){
    const navigation = useNavigation()

    return(
        <View style={styles.container}>
            <View style={styles.menu}>
                <View style={styles.figura}>

                    <TouchableOpacity
                    onPress={()=>navigation.navigate('NavBar')}
                    >
                        <Fontisto name={'arrow-left'} size={35} color='black'/>
                    </TouchableOpacity>
                    
                </View>
            </View>  
        </View>
    )
}