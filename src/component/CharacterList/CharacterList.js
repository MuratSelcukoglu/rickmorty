import React from 'react';
import {View, Image, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './CharacterList.styles';
import {useSelector,useDispatch} from 'react-redux';
import {addFavorite, deleteFavorite} from '../../redux/favoriteSlice';
import {useNavigation} from '@react-navigation/native';

const CharacterList = ({item}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const favourites = useSelector(state => state.favorite.favoriteItems);
  const isFavourite = favourites.find(res => res.id === item.id);

  const onPress = item => {
    if (favourites.length < 10) {
      dispatch(
        addFavorite({
          id: item.id,
          name: item.name,
          status: item.status,
          species: item.species,
          image: item.image,
          origin: item.origin.name,
          location: item.location.name,
        }),
      );
    } else {
      Alert.alert('You cannot add more than 10 favorite characters.');
    }
  };

  const secondPress = id => {
    dispatch(
      deleteFavorite({
        id: id,
      }),
    );
  };

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Home', {
          screen: 'CharacterDetail Page',
          params: {
            id: item.id,
            name:item.name
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

          {isFavourite ? (
            <TouchableOpacity onPress={() => secondPress(item.id)}>
              <Image
                source={require('../../assets/icons/kalp.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  marginRight: 5,
                  marginTop: 10,
                  tintColor: 'red',
                }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => onPress(item)}>
              <Image
                source={require('../../assets/icons/heart.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  marginRight: 5,
                  marginTop: 10,
                  tintColor: '#fff',
                }}
              />
            </TouchableOpacity>
          )}
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
            {item.origin.name}
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
            {item.location.name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CharacterList;
