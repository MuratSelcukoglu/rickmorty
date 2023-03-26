import React, {useState, useEffect} from 'react';
import {Text, SafeAreaView, View, Image, TextInput} from 'react-native';
import styles from './Home.styles';
import EpisodeCategory from '../../component/EpisodeCategory';
import EpisodeList from '../../component/EpisodeList';
import {useDispatch} from 'react-redux';
import {getEpisode} from '../../redux/state/episodeState';

const Home = () => {
  const [episodeNum, setEpisodeNum] = useState(1);
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  useEffect(() => {
    dispatch(getEpisode(episodeNum));
  }, [dispatch, episodeNum]);


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
        <View style={styles.boxtwo}>
          <Image
            source={require('../../assets/icons/search.png')}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="Search"
            autoCapitalize="characters"
            placeholderTextColor={'grey'}
            numberOfLines={1}
            onChangeText={setText}
            value={text}
          />
        </View>
      </View>
      <EpisodeCategory setEpisodeNum={setEpisodeNum} />
      <EpisodeList searchText={text} />
    </SafeAreaView>
  );
};

export default Home;
