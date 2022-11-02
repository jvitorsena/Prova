import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";

export default function App() {

  const [text, setText] = useState<string>('');
  const [num1, setNum1] = useState<number>();
  const [num2, setNum2] = useState<number>();


  return (
    <ScrollView>
      <View style={{marginVertical: 10, marginHorizontal: 20, borderColor: 'white', borderWidth: 1}}>
        <Text>"Prova de Mobile"</Text>
        <TextInput style={{marginVertical: 10, marginHorizontal: 20, borderColor: 'white', borderWidth: 1}}
          placeholder='Texto livre'
          onChangeText={(string) => { setText(string); }}
        />
        <TextInput style={{marginVertical: 10, marginHorizontal: 20, borderColor: 'white', borderWidth: 1}}
          placeholder='Numero 01'
          keyboardType="number-pad"
          onChangeText={(number) => { setNum1(Number(number)); }}
        />
        <TextInput style={{marginVertical: 10, marginHorizontal: 20, borderColor: 'white', borderWidth: 1}}
          placeholder='Numero 02'
          keyboardType="number-pad"
          onChangeText={(number) => { setNum2(Number(number)); }}
        />
        <Text style={{marginVertical: 10, marginHorizontal: 20, fontSize: 30}}>{text}</Text>
        <Text style={{marginVertical: 10, marginHorizontal: 20, fontSize: 30}}>{num1}</Text>
        <Text style={{marginVertical: 10, marginHorizontal: 20, fontSize: 30}}>{num2}</Text>
      </View>
    </ScrollView>
  );
}