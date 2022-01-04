import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';
import { filmes } from '../components/ListaFilmes';
import { filmes2 } from '../components/ListaFilmes2';
import { filmes3 } from '../components/ListaFilmes3';
const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style style={styles.view}>
        <Text style={styles.texto}>
          ASSISTA AGORA
          <FontAwesome5 name="film" size={40} color="red" />
        </Text>
      </View>
      <Text></Text>
      <Text></Text>
      <ScrollView>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={filmes}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => Alert.alert('Filme Selecionado', item.nome)}
            >
              <Image style={styles.imagem} source={{ uri: item.imgUrl }} />
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => <View style={styles.separador} />}
        />
        <Text></Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={filmes2}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => Alert.alert('Filme Selecionado', item.nome)}
            >
              <Image style={styles.imagem} source={{ uri: item.imgUrl }} />
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => <View style={styles.separador} />}
        />
        <Text></Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={filmes3}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => Alert.alert('Filme Selecionado', item.nome)}
            >
              <Image style={styles.imagem} source={{ uri: item.imgUrl }} />
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => <View style={styles.separador} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  texto: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: '#0A122A',
    paddingHorizontal: 20,
  },

  view: {
    padding: 5,
    borderColor: 'yellow',
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
  },
  imagem: {
    height: 256,
    width: 172,
  },
  separador: {
    width: 15,
    flexDirection: 'column',
  },
});
