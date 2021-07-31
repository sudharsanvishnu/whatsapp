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
})

export default styles;