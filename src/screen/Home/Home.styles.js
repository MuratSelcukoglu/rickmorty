import {StyleSheet} from 'react-native';
export default StyleSheet.create({
    container: {
      backgroundColor: '#323232',
      flex: 1,
    },
    header: {
      height: 140,
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.27,
      shadowRadius: 2.65,
      elevation: 6,
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 25,
    },
    headerGroup: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: 10,
      paddingRight: 10,
    },
    boxtwo: {
      backgroundColor: '#fff',
      padding: 5,
      margin: 10,
      borderRadius: 25,
      flexDirection: 'row',
      borderWidth: 2,
      borderColor: '#95a99b',
      alignItems: 'center',
      width: '90%',
      alignSelf: 'center',
    },
    input: {
      width: '90%',
      fontSize: 16,
      height: 40,
    },
  });