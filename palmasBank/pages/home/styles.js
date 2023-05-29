import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3D8C64',
        flex: 1,
    },
    texto1:{
        fontSize: 25,
    },
    banner:{
        width: '100%',
        height:50,
        backgroundColor:'#D4F8E3'
    },
    menu:{
        justifyContent:'space-around',
        width: '100%',
        height: 40,
        flexDirection: 'row',
        padding: '5px',
    },
    subMenu:{
        width: '85%',
        height: 40,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: '10px',
    }, 
    figura:{
        width:'15%',
        height: 40,
        alignItems: 'center', 
    },
    caixaSaldo:{
        height:'28%'
    },
    saldo:{
        width:"100%",
        height:"100%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    saldoReal:{
        fontSize: '65px',
    },
    deslogar:{
        fontSize: '25px',
        color:'#3D8C64'
    },
    acoes:{
        display: 'flex',
        justifyContent: "space-evenly",
        flexDirection: "row",
        backgroundColor: '#A4D2BC',
        marginBottom: '20px',
    },
    abaItens:{
        marginTop:'10px',
        padding: '10px',
        width: '100%',
        justifyContent: "center",
        height:'66%',
        backgroundColor:'#A4D2BC'
    },
    itens:{
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginTop:'10px',
        width:'100px',
        height:'110px',
        backgroundColor:'#D4F8E3',
        borderRadius:'10px',
        textAlign:'center',
    },

})

export default styles