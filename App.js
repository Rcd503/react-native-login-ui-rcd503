import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Constants from 'expo-constants';
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        <Text style={styles.text}>Open login app</Text>

        <TextInput style={styles.inputtext}
          placeholder="Username"
          focusable='true'
          autoFocus
        />
        <TextInput style={styles.inputtext}
          placeholder="Password"
          secureTextEntry
          focusable='true'
        />
        
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.userBtn}
            onPress={() => { alert("Login Succefully") }}
          >
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.userBtn}
            onPress={() => { alert("Welcome SignPage") }}
          >
            <Text style={styles.btnText}>SignUp</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.textdev}>Dev. Rcd503</Text>
      </View>
    );
  };

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e90ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
  },
  text: {

    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    borderBottomWidth: 5,
    borderColor: '#FFD700'

  },
  textdev: {

    fontSize: 12,
    color: '#FFD700',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    borderBottomWidth: 3,
    borderColor: '#FFD700',

    marginTop: 50,

  },
  inputtext: {
    fontSize: 20,
    width: '90%',
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 86,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',


  },
  userBtn: {
    backgroundColor: '#FFD700',
    padding: 15,
    width: '45%',
    borderRadius: 86,
  },
  btnText: {
    fontSize: 18,
    textAlign: 'center',

  },
});
