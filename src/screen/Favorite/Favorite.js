import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import styles from './Favorite.styles';
import LottieView from 'lottie-react-native';
import {useSelector, useDispatch} from 'react-redux';
import {deleteFavorite} from '../../redux/favoriteSlice';

const Favorite = ({navigation}) => {
  const dispatch = useDispatch();
  const favourites = useSelector(state => state.favorite.favoriteItems);

  const createTwoButtonAlert = (name, id) =>
  Alert.alert(
    'Rick and Morty',
    `Are you sure you want to remove ${name} from favorites?`,
    [
      {
        text: 'No',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Yes', onPress: () => deletePress(id)},
    ],
  );

  const deletePress = id => {
    dispatch(
      deleteFavorite({
        id: id,
      }),
    );
  };

  const renderList = ({item}) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Favorite', {
          screen: 'CharacterDetail Page',
          params: {
            id: item.id,
            name: item.name,
          },
        })
      }
      style={styles.card}>
      <View style={styles.cardLeft}>
        <Image
          source={{uri: item.image}}
          resizeMode="stretch"
          style={styles.image}
        />
      </View>
      <View style={styles.cardRight}>
        <View style={styles.cardRightheader}>
          <Text numberOfLines={2} style={styles.fullname}>
            {item.name}
          </Text>

          <TouchableOpacity
            onPress={() => createTwoButtonAlert(item.name, item.id)}>
            <Image
              source={require('../../assets/icons/trash.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                marginRight: 5,
                marginTop: 10,
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.status}>
          <Image
            source={require('../../assets/icons/dot.png')}
            resizeMode="contain"
            style={[
              styles.dot,
              {
                tintColor:
                  item.status === 'Alive'
                    ? '#008000'
                    : item.status === 'Dead'
                    ? 'red'
                    : '#fff',
              },
            ]}
          />
          <Text numberOfLines={1} style={styles.nametext}>
            {item.status} -
          </Text>
          <Text numberOfLines={1} style={styles.nametext}>
            {' '}
            {item.species}
          </Text>
        </View>
        <View style={styles.status}>
          <Image
            source={require('../../assets/icons/origin.png')}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
              marginRight: 5,
              marginTop: 10,
            }}
          />
          <Text numberOfLines={1} style={styles.nametext}>
            {item.origin}
          </Text>
        </View>
        <View style={styles.status}>
          <Image
            source={require('../../assets/icons/location.png')}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
              marginRight: 5,
              marginTop: 10,
            }}
          />
          <Text numberOfLines={1} style={styles.nametext}>
            {item.location}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerGroup}>
          <Image
            source={require('../../assets/image/unnamed.png')}
            resizeMode="contain"
            style={{
              width: 70,
              height: 70,
            }}
          />
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>Rick and Morty</Text>
        </View>
      </View>
      <View style={styles.body}>
        {favourites[0] !== undefined ? (
          <FlatList
            keyExtractor={item => item.id}
            data={favourites}
            renderItem={renderList}
          />
        ) : (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: '80%',
            }}>
            <LottieView
              source={require('../../assets/lottie/favorite.json')}
              autoPlay
              style={{width: 200, height: 200}}
            />
            <Text
              style={{
                fontSize: 15,
                color: '#fff',
              }}>
              You do not have a favorite character.
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Favorite;
