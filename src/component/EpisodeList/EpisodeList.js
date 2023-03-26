import React, {useState, useEffect} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import styles from './EpisodeList.styles';
import {useSelector} from 'react-redux';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';

const EpisodeList = ({searchText}) => {
  const navigation = useNavigation();
  const {episode, isLoading} = useSelector(state => state.episode);
  const [searchList, setSearchlist] = useState(null);

  const renderList = ({item}) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('Home', {
          screen: 'Detail Page',
          params: {
            id: item.id,
            sezon: item.episode,
          },
        })
      }>
      <View style={styles.cardLeft}>
        <Image
          source={require('../../assets/image/ricky.jpeg')}
          resizeMode="stretch"
          style={styles.image}
        />
        <View>
          <Text numberOfLines={2} style={styles.nametext}>
            {item.name}
          </Text>
          <Text numberOfLines={2} style={styles.nametext}>
            ({item.air_date})
          </Text>
        </View>
      </View>
      <View style={styles.cardRight}>
        <Text
          style={{
            fontSize: 14,
            bottom: 5,
            color: '#fff',
            fontWeight: '600',
          }}>
          {item.episode}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const handleSearch = text => {
    const filteredList = episode.results.filter(item => {
      const searcedText = text.toUpperCase();
      const itemTitle = item.name.toUpperCase();
      return itemTitle.indexOf(searcedText) > -1;
    });
    if (text !== '') {
      setSearchlist(filteredList);
    } else {
      setSearchlist(null);
    }
  };

  useEffect(() => {
    if (searchText !== '') {
      handleSearch(searchText);
    } else {
      setSearchlist(null);
    }
  }, [searchText]);

  return (
    <View style={styles.container}>
      {!isLoading ? (
        episode.results &&
        (searchList !== null ? (
          <FlatList
            keyExtractor={item => item.id}
            data={searchList}
            renderItem={renderList}
          />
        ) : (
          <FlatList
            keyExtractor={item => item.id}
            data={episode.results}
            renderItem={renderList}
          />
        ))
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
    </View>
  );
};

export default EpisodeList;
