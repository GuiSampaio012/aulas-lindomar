import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
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
        width:'200px',
        height: '40px',
        borderBottomWidth: '1px',
        padding: '5px',
        fontSize: '20px',
        borderColor: '#fff',
        color: 'white'
    },
    // inputData:{
    //     width:'200px',
    //     height: '40px',
    //     borderBottomWidth: '1px',
    //     padding: '5px',
    //     fontSize: '20px',
    //     borderColor: '#fff',
    //     color: 'white',
    //     backgroundColor:'#0C633D'
    // },
    botao:{
        width: '120px',
        height: '45px',
        borderRadius: '10px',
        padding: '10px',
        backgroundColor: '#A4D2BC',
        justifyContent: 'center',
        alignItems: 'center', 
    },
    container2: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    texto1: {
        fontSize: '50px',
        color: '#2E8B57',
        fontWeight: 'bold',
    },
    texto2: {
        fontSize: '30px',
    },
    top: {
        flexDirection: 'column',
        backgroundColor: '#f00',
    },
    
    foto0: {
        // marginTop: "60px",
        marginBottom:"20px",
        padding: '10px',
        alignItems: 'center',
    },
    foto1: {
        width: '150px',
        height: '150px',
        backgroundColor: '#EEE9E9',
        alignItems: 'center',
        borderRadius:"25px",
        justifyContent: 'center',
    },
    btn: {
        width: '30%',
        height: '30px',
        padding: '10px',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#A4D2BC",
        borderRadius: '5px',
    },
    btnContainer: {
        pading: '5px',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50px',
        width: '100%',
    },
    sucesso: {
        fontSize: '10px',
        color: '#0f0',
    },
    txtButton: {
        fontFamily: 'Verdana',
        fontSize: '15px',
        color: '#333',
    },

})

export default styles