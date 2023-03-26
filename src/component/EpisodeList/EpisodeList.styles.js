import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
    marginBottom:10,
    padding:5
  },
  card: {
    backgroundColor: '#424242',
    height: 80,
    marginBottom: 10,
    margin: 5,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
   
  },
  image: {
    width: '40%',
    height: '100%',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  cardLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '60%',
    height: '100%',
  },
  cardRight: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: '100%',
    right: 15,
  },
  nametext:{
    width: 150,
    fontSize: 14,
    left: 10,
    color: '#fff',
    fontWeight: '600',
    marginBottom:5
  }
});
