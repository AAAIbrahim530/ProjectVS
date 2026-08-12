import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome your React App!</Text>

      <Text style={styles.Headingtext}>Enter Name</Text>
      <TextInput style={styles.InputBox} placeholder="Enter First Name" />
      <Text style={styles.Headingtext}>Enter Surname</Text>
      <TextInput style={styles.InputBox} placeholder="Enter Surname" />
      <Button title = "Add User"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeText: {
    paddingTop: 40,
    color:'purple',
    fontWeight:'bold',
    fontSize: 28,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  InputBox: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 20,
    width: '100%',
  },
  Headingtext: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
