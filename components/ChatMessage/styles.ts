import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    container: {
        padding: 10,
        
    },
    messageBox: {
        borderRadius: 10,
        padding: 5,
        justifyContent: 'center'
    },
    userName: {
        color: Colors.light.tint,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    message: {
    },
    time: {
        alignSelf: 'flex-end',
        color: 'grey',
        fontSize: 10
    },
})

export default styles;
