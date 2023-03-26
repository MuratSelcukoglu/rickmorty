import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    backgroundColor: '#424242',
    height: 160,
    marginBottom: 10,
    margin: 5,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 2.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  cardLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '40%',
    height: '100%',
  },
  cardRight: {
    width: '60%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: '100%',
    marginLeft: 10,
  },
  cardRightheader: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  fullname: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 10,
    width:140,
  
  },
  nametext: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
    marginTop: 10,
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 120,
  },
  dot: {
    width: 10,
    height: 10,
    marginRight: 10,
    marginTop: 10,
  },
});
