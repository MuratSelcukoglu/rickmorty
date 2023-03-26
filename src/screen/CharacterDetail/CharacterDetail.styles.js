import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    backgroundColor: '#323232',
    flex: 1,
  },
  header: {
    height: 80,
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
  body: {
    flex: 1,
    margin: 10,
    padding: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: 'center',
  },
  info: {
    alignItems: 'center',
    marginTop: 20,
  },
  nametext: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
    marginTop: 10,
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'flex-start',
    width: '100%',
  },
  dot: {
    width: 25,
    height: 25,
    marginRight: 5,
    marginTop: 10,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 5,
    marginTop: 10,
  },
  favoriteAdd: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 15,
  },
});
