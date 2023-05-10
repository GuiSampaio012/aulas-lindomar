import {StyleSheet} from 'react-native'

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#f7c331',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    texto:{
        fontSize: 18,
        color: 'white'
    }, 
    caixa:{
        padding: 20,
    },
    entrada:{
        width:200,
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        fontSize: 20,
        borderColor: '#555'
    },
    botao:{
        width: 80,
        height: 45,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#555',
        justifyContent: 'center',
        alignItems: 'center', 
    }
})

export default styles