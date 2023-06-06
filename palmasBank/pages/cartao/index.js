import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'
import { TextInput } from 'react-native';

export default function Cartao({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.caixote}>
                <View style={styles.caixa}>
                    <Text
                        style={styles.entrada}                       
                    >
                        deseja solicitar um cartão de crédito para você ?
                    </Text>
                </View>

                <View style={styles.caixa}>
                    <TouchableOpacity><Text>Solicitar seu cartão</Text></TouchableOpacity>
                </View>
                
            </View>
        </View>
        
    )
}