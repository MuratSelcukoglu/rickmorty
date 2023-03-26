import React, {useEffect} from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './CharacterDetail.styles';
import {useDispatch, useSelector} from 'react-redux';
import {getCharacterdetail} from '../../redux/state/characterDetailSlice';
import LottieView from 'lottie-react-native';

const CharacterDetail = ({route, navigation}) => {
  const {id, name} = route.params || {};
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacterdetail(id));
  }, [dispatch, id]);

  const {characterDetail, isLoading} = useSelector(
    state => state.characterDetail,
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerGroup}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../assets/icons/left.png')}
              resizeMode="contain"
              style={{
                width: 40,
                height: 40,
              }}
            />
          </TouchableOpacity>
          <View>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{name}</Text>
          </View>
          <Image
            source={require('../../assets/image/unnamed.png')}
            resizeMode="contain"
            style={{
              width: 70,
              height: 70,
            }}
          />
        </View>
      </View>
      {!isLoading ? (
        characterDetail && (
          <View style={styles.body}>
            <Image
              source={{uri: characterDetail.image}}
              resizeMode="stretch"
              style={styles.image}
            />
            <View style={styles.info}>
              <View style={styles.status}>
                <Image
                  source={require('../../assets/icons/dot.png')}
                  resizeMode="contain"
                  style={[
                    styles.dot,
                    {
                      tintColor:
                        characterDetail.status === 'Alive'
                          ? '#008000'
                          : characterDetail.status === 'Dead'
                          ? 'red'
                          : '#fff',
                    },
                  ]}
                />
                <Text numberOfLines={1} style={styles.nametext}>
                  {characterDetail.status} -
                </Text>
                <Text numberOfLines={1} style={styles.nametext}>
                  {' '}
                  {characterDetail.species}
                </Text>
              </View>

              <View style={styles.status}>
                <Image
                  source={require('../../assets/icons/gender.png')}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    marginRight: 10,
                    marginTop: 10,
                  }}
                />
                <Text numberOfLines={1} style={styles.nametext}>
                  {characterDetail.gender}
                </Text>
              </View>
              <View style={styles.status}>
                <Image
                  source={require('../../assets/icons/origin.png')}
                  resizeMode="contain"
                  style={styles.icon}
                />
                <Text style={styles.nametext}>
                  {characterDetail.origin && characterDetail.origin.name}
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
                <Text style={styles.nametext}>
                  {characterDetail.location && characterDetail.location.name}
                </Text>
              </View>
            </View>
          </View>
        )
      ) : (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 300,
          }}>
          <LottieView
            source={require('../../assets/lottie/loading.json')}
            autoPlay
            style={{width: 200, height: 200}}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default CharacterDetail;
