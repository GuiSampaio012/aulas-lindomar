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
        display: 'flex',
        padding: '1px',
        fontSize: '15px',
        color: 'white',
        textAlign:'center',
        justifyContent: 'center'
    },
    botao:{
        width: '120px',
        height: '45px',
        borderRadius: '10px',
        padding: '10px',
        backgroundColor: '#A4D2BC',
        justifyContent: 'center',
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
    sucesso: {
        fontSize: '10px',
        color: '#0f0',
    },
    guardarInfo:{
        backgroundColor: '#3D8C64',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
    },
    container2: {
        justifyContent: 'center',
        backgroundColor:'#0C633D',
        flexDirection: 'row',
        padding: '3px',
        marginBottom: '10px',
        width: '100%',
        alignItems: 'center',
        height:'100px',
        
    },

})

export default styles