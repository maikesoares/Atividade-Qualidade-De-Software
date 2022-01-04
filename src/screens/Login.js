import { useState } from 'react';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const Formulario = () => {
  const [input, setInput] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Ionicons
        style={styles.iconeLogin}
        name="md-person-outline"
        size={150}
        color="white"
      />
      <TextInput style={styles.input} placeholder="E-mail" />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={input}
        onChange={(texto) => setInput(texto)}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.botaoOpacity}>
        <Text style={styles.textoBotao}>LOGIN</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Formulario;

const styles = StyleSheet.create({
  texto: {
    color: 'white',
    fontSize: 50,
    textAlign: 'center',
  },
  input: {
    color: 'black',
    backgroundColor: '#E5E7EB',
    padding: 10,
    borderRadius: 10,
    marginTop: 15,
  },
  botaoOpacity: {
    marginTop: 20,
    backgroundColor: '#FE2E2E',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
  },
  textoBotao: {
    color: 'white',
    fontSize: 20,
  },
  textoForm: {
    color: 'white',
    fontSize: 30,
    marginTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#0A122A',
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  iconeLogin: {
    textAlign: 'center',
  },
});
