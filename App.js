import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useReducer } from 'react';


const reducer = (state,action)=>{
  switch(action.tipo){
    case 'setText':
      return {...state,texto:action.payload}
    case 'setSobrenome':
      return {...state,sobrenome:action.payload}
    default:
      return state;
  }
}

const valorInicial = {
  texto:'',
  sobrenome:''
}

export default function App() {
  let textoDigitado;
  let textoSobrenome;

  const[state,dispacth]=useReducer(reducer,valorInicial);

  return (
    
    <View style={styles.container}>
      <Text>useReduce</Text>
      <Text>{state.texto}</Text>
      <Text>{state.sobrenome}</Text>
      
      <TextInput 
        style={styles.input}
        placeholder='Digite seu nome'
        onChangeText={(texto)=>textoDigitado=texto}
      />

      <TextInput 
        style={styles.input}
        placeholder='Digite seu sobrenome'
        onChangeText={(texto)=>textoSobrenome=texto}
      />

      <Button 
        title='Alterar Nome'
        onPress={()=>dispacth({tipo:'setText',payload:textoDigitado})}       
      />

      <Button 
        title='Alterar Sobrenome'
        onPress={()=>dispacth({tipo:'setSobrenome',payload:textoSobrenome})}       
      />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap:15
  },
  input:{
    width:300,
    height:50,
    borderWidth:1,
    borderRadius:10
  }
});
