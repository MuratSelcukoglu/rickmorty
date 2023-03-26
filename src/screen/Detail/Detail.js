import React, {useEffect,useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from './Detail.styles';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCharacters} from '../../redux/state/charactersSlice';
import CharacterList from '../../component/CharacterList';

const Detail = ({route, navigation}) => {
  const {id, sezon} = route.params || {};
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [searchList, setSearchlist] = useState(null);

  useEffect(() => {
    dispatch(fetchCharacters(id));
  }, [dispatch, id]);

  const characters = useSelector(state => state.characters.characters);

  const renderList = ({item}) => <CharacterList item={item} />;


  const handleSearch = text => {
    const filteredList = characters.filter(item => {
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
    if (text !== '') {
      handleSearch(text);
    } else {
      setSearchlist(null);
    }
  }, [text]);

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
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Episode {id}</Text>
            <Text
              style={{fontSize: 14, fontWeight: 'bold', alignSelf: 'center'}}>
              ({sezon})
            </Text>
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
      <View style={styles.characterList}>
        {searchList !== null ? (
          <FlatList
            keyExtractor={(item, index) => index}
            data={searchList}
            renderItem={renderList}
          />
        ) : (
          <FlatList
            keyExtractor={(item, index) => index}
            data={characters}
            renderItem={renderList}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Detail;
