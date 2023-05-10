import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#42bdb0',
        flex: 1,
    },
    texto1:{
        fontSize: 25,
    },
    banner:{
        width: '100%',
        height:50,
    },
    menu:{
        width: '100%',
        height: 40,
        flexDirection: 'row',
    },
    subMenu:{
        width: '85%',
        height: 40,
        alignItems: 'center',
            flexDirection: 'row',
        justifyContent: 'space-around',
    }, 
    figura:{
        width:'15%',
        height: 40,
        alignItems: 'center', 
    }
})

export default styles