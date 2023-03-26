import React, {useState} from 'react';
import {View, ScrollView, TouchableOpacity, Image} from 'react-native';
import styles from './EpisodeCategory.styles';

const EpisodeCategory = ({setEpisodeNum}) => {
  const [number, setNumber] = useState(1);
  
  return (
    <View style={styles.Container}>
      <ScrollView
        pagingEnabled={false}
        horizontal
        style={{marginRight: 20}}
        showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => setEpisodeNum(1) || setNumber(1)}>
          <View
            style={[
              styles.card1,
              {backgroundColor: number === 1 ? '#eee8aa' : '#fff'},
            ]}>
            <Image
              source={require('../../assets/icons/episode1.png')}
              resizeMode="contain"
              style={{
                width: 45,
                height: 45,
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => setEpisodeNum(2) || setNumber(2)}>
          <View
            style={[
              styles.card1,
              {backgroundColor: number === 2 ? '#eee8aa' : '#fff'},
            ]}>
            <Image
              source={require('../../assets/icons/episode2.png')}
              resizeMode="contain"
              style={{
                width: 45,
                height: 45,
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => setEpisodeNum(3) || setNumber(3)}>
          <View
            style={[
              styles.card1,
              {backgroundColor: number === 3 ? '#eee8aa' : '#fff'},
            ]}>
            <Image
              source={require('../../assets/icons/episode3.png')}
              resizeMode="contain"
              style={{
                width: 45,
                height: 45,
              }}
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default EpisodeCategory;
