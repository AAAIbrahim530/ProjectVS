import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button} from 'react-native';


export default function App() {
  return (
    <View >
      <View style ={styles.mainPicture}>
        <Image style = {styles.ImageSize}
        source={require('C:\\VisualCodeProject\\Mast\\ProjectVS\\images\\react-Native.png')}/>
      </View>
      <Text style={styles.welcomeText}>Welcome your React App!</Text>

<View style= {styles.InputFlex}>

      <Text style={styles.Headingtext}>Enter Name</Text>
      <TextInput style={styles.InputBox} placeholder="Enter First Name" />

</View>

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
  mainPicture: {
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageSize: {
    width: 350,
    height: 350,
  },
  InputFlex: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-evenly',
  },
});
