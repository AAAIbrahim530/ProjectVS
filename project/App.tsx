import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  ViewDetails: { NameSend: string; SurnameSend: string };
};
const Stack = createNativeStackNavigator<RootStackParamList>();
type MainScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type ViewDetailsProps = NativeStackScreenProps<RootStackParamList, 'ViewDetails'>;



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="ViewDetails" component={ViewDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



function MainScreen({ navigation }:
  MainScreenProps) 
{
  const [Name, setName] = useState('');
  const [Surname, setSurname] = useState('');

  console.log("App starting up");
  return (
    
    
    <View>

      <View style ={styles.mainPicture}>

        <Image 
        style = {styles.imageSize}
        source={require('./assets/react-Native.png')}/>

      </View>

      <Text style={styles.welcomeText}>Welcome your React App!</Text>

<View style= {styles.InputFlex}>

      <Text style={styles.headingtext}>Enter Name</Text>
      <TextInput style={styles.inputBox} placeholder="Enter First Name" 
      onChangeText = {newText => setName(newText.replace(/[^a-zA-Z\s]/g, ''))}
      autoCapitalize="words"
      autoComplete="name"
      keyboardType="default"/>

</View>

<View style= {styles.InputFlex}>

      <Text style={styles.headingtext}>Enter Surname</Text>
      <TextInput style={styles.inputBox} placeholder="Enter Surname" 
      onChangeText = {newText => setSurname(newText.replace(/[^a-zA-Z\s]/g, ''))}
      autoCapitalize="words"
      autoComplete="name-family"
      keyboardType="default"/>

   </View>

  <Button title = "Add User"
      onPress={() => {
        navigation.navigate('ViewDetails' , { NameSend : Name, SurnameSend : Surname });
        console.log("Name:" + Name + 
          "Surname:" + Surname);
         }}/>
    </View>
  );
};

function ViewDetails({ navigation ,route }: 
  ViewDetailsProps) 
  {
  const NameGet = route.params.NameSend;
  const SurnameGet = route.params.SurnameSend;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Name : {NameGet} Surname: {SurnameGet}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  welcomeText: {
    paddingTop: 40,
    color:'purple',
    fontWeight:'bold',
    fontSize: 28,
    textAlign: 'center',
  },
  inputBox: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 20,
    width: '100%',
  },
  headingtext: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  mainPicture: {
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageSize: {
    width: 350,
    height: 350,
  },
  InputFlex: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-evenly',
  },
  });