import {StyleSheet} from 'react-native'

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#3D8C64',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    caixote: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: "200px",
        height: "200px",
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
        borderBottomWidth: 1,
        padding: 10,
        fontSize: 20,
        borderColor: '#fff',
        color: 'white'
    },
    botao:{
        width: '120px',
        height: '45px',
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#A4D2BC',
        justifyContent: 'center',
        alignItems: 'center', 
        marginBottom:'35px'
    },
    grupoBotoes:{
        padding: 20,
    }
})

export default styles