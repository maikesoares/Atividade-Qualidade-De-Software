import React from 'react';
import { StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Chat = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textoCategoria}>
        <FontAwesome5 name="film" size={25} color="red" />
        Selecione a categoria:{' '}
      </Text>
      <ScrollView>
        <TouchableOpacity style={styles.botaoOpacity}>
          <Text style={styles.textoBotao}>
            <Feather
              style={styles.iconeTexto}
              name="activity"
              size={50}
              color="black"
            />
            Ação
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoOpacity}>
          <Text style={styles.textoBotao}>
            <AntDesign name="rocket1" size={50} color="black" />
            Aventura
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoOpacity}>
          <Text style={styles.textoBotao}>
            <MaterialIcons name="science" size={50} color="black" />
            Ficção
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoOpacity}>
          <Text style={styles.textoBotao}>
            <MaterialIcons name="theater-comedy" size={50} color="black" />
            Comédia
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoOpacity}>
          <Text style={styles.textoBotao}>
            <Fontisto name="persons" size={50} color="black" />
            Romance
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoOpacity}>
          <Text style={styles.textoBotao}>
            <MaterialCommunityIcons name="knife" size={50} color="black" />
            Terror
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoOpacity}>
          <Text style={styles.textoBotao}>
            <FontAwesome5 name="surprise" size={50} color="black" />
            Suspense
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  textoBotao: {
    fontSize: 50,
    textAlign: 'center',
    color: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: '#0A122A',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  botaoOpacity: {
    marginTop: 10,
    backgroundColor: '#FE2E2E',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
  },
  iconeTexto: {
    textAlign: 'center',
  },
  textoCategoria: {
    color: 'white',
    fontSize: 25,
  },
});
