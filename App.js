import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [sayac, setSayac]=useState(0)
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'blue'}}>
      <View style={{flex:4, backgroundColor:'black', flexDirection: 'row', alignItems: 'center', gap:20}}>
        <Image source={require("./src/react-native-logo-884x1024.webp")} style={{width: 110, height: 125}} />
        <Text style={{color:'white', fontSize: 25}}>ZİKİRMATİK</Text>
      </View>
      <View style={{flex:16, backgroundColor:'yellow', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
        <Image source={require("./src/zikirmatik.png")} style={{width: 175, height: 210}} />
      </View>
      <View style={{flex:2, backgroundColor: 'green', justifyContent: 'center', flexDirection:'row'}}>
          <Text style={{fontSize: 50}}>{sayac}</Text>
      </View>
      <View style={{flex:3, backgroundColor:'orange', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
        <TouchableOpacity onPress={()=>setSayac(0)}>
          <Text style={{fontSize:20}}>Sıfırla</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setSayac(sayac+1)}>
          <Text style={{fontSize:20}}>Arttır</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})