import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'
import { TextInput } from 'react-native';
import TranRea from '../../assets/tranRea.png'

export default function Cartao({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.caixote}>


                <View style={styles.caixa}>
                    <img style={styles.img} src={TranRea}/>
                </View>


                <View style={styles.caixa}>
                    <Text
                        style={styles.entrada}                       
                    >
                        TRANSFERÊNCIA REALIZADA COM SUCESSO!!
                    </Text>
                </View>
                
            </View>
        </View>
        
    )
}