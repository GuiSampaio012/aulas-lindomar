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
    caixote2: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
    },
    img: {
        width: "300px",
        height: "200px",
    },
    card: {
        padding: "5px",
        display: "flex",
        justifyContent: 'space-between',
        width: "300px",
        height: "200px",
        backgroundColor: "white",
        borderRadius: "15px",
    },
    texto:{
        fontSize: 18,
        color: 'white'
    },
    junto:{
        padding: '10px',
        flexDirection:'row',
        display: 'flex',
        justifyContent: 'space-between',
    },
    conjunto:{
        display: 'flex',
        justifyContent: 'center',
    },
    sozinho:{
        marginTop:'85px',
        display: 'flex',
    },
    numeroCard:{
        textAlign: 'center',
        fontSize: 18,
        color: 'black'
    }, 
    cvvCard:{
        textAlign:'center',
        fontSize: 18,
        color: 'black'
    }, 
    validadeCard:{
        textAlign:'center',
        fontSize: 18,
        color: 'black'
    },  
    caixa:{
        padding: '20px',
    },
    entrada:{
        display: 'flex',
        padding: '1px',
        fontSize: '30px',
        color: 'white',
        textAlign:'center',
        justifyContent: 'center'
    },
    botao:{
        width: '180px',
        height: '55px',
        borderRadius: '10px',
        padding: '10px',
        backgroundColor: '#0C633D',
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