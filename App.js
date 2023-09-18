
import { useState } from 'react';
import { Button, SafeAreaView,TouchableWithoutFeedback, ScrollView, StyleSheet,Text, TextInput, View } from 'react-native';

const ApareceJson = () => {

  const [valormostrado, setValorMostrado] = useState('');

  const [short_link, setShortLink] = useState('');

  const mostrarValor = () => {
    const aux = []
    try {
      const jsonData = JSON.parse(valormostrado);
      jsonData.forEach(element => {
        if (element.name == 'Confraternização mundial') 
        {aux.push('Reveillon ' + element.date)} 
        else if (element.name == 'Carnaval' || element.name == 'Tiradentes') {aux.push(element.name + ' ' + element.date)};
      });
      setShortLink(aux);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.container}>
      <TextInput multiline style={styles.inputTypeDesign} onChangeText={setValorMostrado} value={valormostrado}></TextInput>
      <Button title='Valor Mostrado' onPress={mostrarValor} styles={styles.button} />
      <Text multiline style={styles.resultado} >{short_link}</Text>
    </ScrollView>
    </SafeAreaView>
  )

}
const App = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.container}>
      <ApareceJson />
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 10,
  },
  inputTypeDesign: {
    fontSize: 24,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#eaeaea",
    marginBottom: 10,
  },
  button: {
    height: 20,
  },
  resultado: {
    marginTop: 12,
    fontSize: 24,
    textAlign: "center",
  },
  jsonData: {
    marginTop: 20,
    fontSize: 16,
    fontFamily: "monospace",
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
});

export default App;
