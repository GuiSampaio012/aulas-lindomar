import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#3D8C64',
        flex: 1,
        alignItems: 'center',
        padding: '20px',
    },
    texto1:{
        fontSize: '135%',
    },
    texto2:{
        fontSize: '90%',
        fontWeight: '800',
        fontFamily:'URW Chancery L, cursive',
    },
    caixaSaldo:{
        height:'20%',
    },
    saldo:{
        marginTop: '5px',
        width:"100%",
        height:"100%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    saldoReal:{
        fontSize: '405%',
        //fontSize: '65px',
    },
    input:{
        marginTop: '10px',
        height:'40px',
        color:'white',
        backgroundColor:'#0C633D',
        borderRadius: '10px',
        textAlign: 'center',
    },
    acoes:{
        width: '100%',
        display: 'flex',
        justifyContent: "center",   
        marginBottom:'30%'
    },
    abaItens:{
        padding: '7px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
    },
    itens:{
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginTop:'10px',
        width:'100px',
        height:'80px',
        backgroundColor:'#D4F8E3',
        borderRadius:'10px',
        textAlign:'center',
    },
    btn:{
        marginTop:'30px',
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
    },
    tipo:{
        marginTop: '10px',
        height:'40px',
        borderWidth:'0px',
        color:'#fff',
        backgroundColor:'#0C633D',
        // outlineoffset: '2px',
        borderRadius: '10px',
        textAlign: 'center',
    }

})

export default styles