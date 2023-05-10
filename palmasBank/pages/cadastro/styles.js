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
        padding: '20px',
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
        width: 80,
        height: 45,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#A4D2BC',
        justifyContent: 'center',
        alignItems: 'center', 
    },






    container2: {
        // marginTop:"100px",
        flex: 1,
       
        width: '100%',
        alignItems: 'center',
    },
    texto1: {
        fontSize: 50,
        color: '#2E8B57',
        fontWeight: 'bold',
    },
    texto2: {
        fontSize: 30,
    },
    top: {
        flexDirection: 'column',
        backgroundColor: '#f00',
    },
    
    foto0: {
        // marginTop: "60px",
        marginBottom:"20px",
        padding: 10,
        alignItems: 'center',
    },
    foto1: {
        width: 150,
        height: 150,
        backgroundColor: '#EEE9E9',
        alignItems: 'center',
        borderRadius:"25px",
        justifyContent: 'center',
    },
    btn: {
        width: '30%',
        height: '30px',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#A4D2BC",
        borderRadius: 5,
    },
    btnContainer: {
        pading: 5,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: '100%',
    },
    sucesso: {
        fontSize: 10,
        color: '#0f0',
    },
    txtButton: {
        fontFamily: 'Verdana',
        fontSize: 15,
        color: '#333',
    },
})

export default styles