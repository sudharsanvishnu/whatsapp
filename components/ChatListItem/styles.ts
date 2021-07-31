import { StyleSheet } from  'react-native';

const styles = StyleSheet.create ({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 10
    },
    leftContainer: {
        flexDirection: 'row',
    },
    midContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    avatar: {
        width: 50,
        height: 50,
        marginRight: 15,
        borderRadius: 50,
    },
    userName: {
        fontWeight: 'bold',
        fontSize: 20
    },
    lastMessage: {
        fontSize: 16,
        color: 'grey'
    },
    time: {
        color: 'grey',
        fontSize: 14,
        
    }
})

export default styles;