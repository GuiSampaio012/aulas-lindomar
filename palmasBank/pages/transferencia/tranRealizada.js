import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'
import { TextInput } from 'react-native';
import TranRea from '../../assets/tranRea.png'

export default function TranRealizada({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.caixote}>


                <View style={styles.caixa}>
                    <img style={styles.img} src={TranRea}/>
                </View>


                <View style={styles.caixa}>
                    <Text
                        style={styles.sucesso}                       
                    >
                        TRANSFERÊNCIA REALIZADA COM SUCESSO!!
                    </Text>
                </View>
                
            </View>
        </View>
        
    )
}