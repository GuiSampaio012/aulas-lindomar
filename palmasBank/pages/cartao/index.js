import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'
import { TextInput } from 'react-native';

export default function Cartao({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.caixote}>
                <View style={styles.caixa}>
                    <TextInput
                        style={styles.entrada}
                        placeholder='Nome'
                        onChangeText={(e) => {}}
                    />
                </View>

                <View style={styles.caixa}>
                    <TextInput
                        style={styles.entrada}
                        placeholder='Cpf'
                        onChangeText={(e) => {}}
                    />
                </View>

                <View style={styles.caixa}>
                    <TextInput
                        style={styles.entrada}
                        placeholder='Data de Nascimento'
                        onChangeText={(e) => {}}
                    />
                </View>

                <View style={styles.caixa}>
                    <TextInput
                        style={styles.entrada}
                        placeholder='Celular'
                        onChangeText={(e) => {}}
                    />
                </View>

                <View style={styles.caixa}>
                    <TextInput
                        style={styles.entrada}
                        placeholder='Email'
                        keyboardType='email'
                        onChangeText={(e) => {}}
                    />
                </View>

                <View style={styles.caixa}>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.entrada}
                        placeholder='Senha'
                        keyboardType='text'
                        onChangeText={(e) => {}}
                    />
                </View>

                <View style={styles.caixa}>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.entrada}
                        placeholder='Confirme a Senha'
                        keyboardType='text'
                        onChangeText={(e) => {}}
                    />
                </View>
            </View>
        </View>
        
    )
}