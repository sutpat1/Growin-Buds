import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style = {styles.title}>login</Text>
      <Image 
          source = {require("../assets/loginPlant.png")}
          style = {styles.image}></Image>
      
      <StatusBar style="auto" />

      <Text style={styles.inputField}>email</Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          placeholder="example@email.com"
          keyboardType="text"
        />
      </SafeAreaView>
      
      <Text style={styles.inputField}>password</Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          placeholder="******"
          keyboardType="text"
        />
      </SafeAreaView>

       <TouchableOpacity 
          style = {styles.login}
          onPress = {() => navigation.navigate("Home")}>
          <Text style = {styles.buttonText}>login</Text>
       </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    alignItems: 'center',
    margin: 40
  },

  title: {
    margin: 30,
    fontSize: 60,
  },

  login: {
    fontSize: 20,
    backgroundColor: '#FC9778',
    margin: 30,
    paddingHorizontal: 60,
    paddingVertical: 20,
    borderRadius: 50,
  }, 

  buttonText: {
    fontSize: 20,
  },

  input: {
    height: 60,
    width: 250,
    margin: 20,
    borderWidth: 1,
    borderRadius: 50,
    padding: 20,
  },

  inputField: {
    fontSize: 25,
    textAlign: 'left'
  }
});
