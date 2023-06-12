import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'
import { TextInput } from 'react-native';
import TranRea from '../../assets/tranRea.png'
import Voltar from '../../voltar';

export default function TelaEmprestimo({navigation}) {
    return (
        <>
            <Voltar></Voltar>
            <View style={styles.container}>
                <View style={styles.caixote}>


                    <View style={styles.caixa}>
                        <img style={styles.img} src={TranRea}/>
                    </View>


                    <View style={styles.caixa}>
                        <Text
                            style={styles.sucesso}                       
                        >
                            EMPRÉSTIMO REALIZADO COM SUCESSO!!
                        </Text>
                    </View>
                    
                </View>
            </View>
        </>

        
    )
}