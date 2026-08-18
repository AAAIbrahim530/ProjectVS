import { StatusBar } from 'expo-status-bar';
import { useEffect, useState, useRef, ReactNode} from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, ScrollView, SafeAreaViewBase, Animated, ViewStyle, StyleProp} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

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
  const [Error,setError] = useState(false);

  console.log("App starting up");
  return (
    
    
    <View>
      <SafeAreaView>
        <ScrollView>
      <View style ={styles.mainPicture}>

        <Image 
        style = {styles.imageSize}
        source={require('./assets/react-Native.png')}/>

      </View>

      <Text style={styles.welcomeText}>Welcome your React App!</Text>

      <FadeView>
        <Text style={Error? styles.red :
  styles.blank}>
          {Error? "Please add all the fields" : ""}
        </Text>

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

        if ((isEmpty(Name)==false) && (isEmpty(Surname)==false))
{
        navigation.navigate('ViewDetails' , { NameSend : Name, SurnameSend : Surname });
        console.log("Name:" + Name + 
          "Surname:" + Surname);
          setError(false);
}
else
{
  setError(true);
}

         }}/>
         </FadeView>
         </ScrollView>
         </SafeAreaView>
         
    </View>
  );
};

function isEmpty(value: string) {
  return(
    // null or undefined
    (value == null) || 

    // has length and it's zero
    (value.hasOwnProperty('length') && value.length === 0) || 

    // is an Object and has no keys
    (value.constructor === Object && Object.keys(value).length === 0)
  )
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
  red: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 26,
    textAlign: 'center'
  },
  blank: {
    fontSize: 0,
  }
});

interface FadeViewProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}
  const FadeView = ({ children, style }: FadeViewProps) => {
    const fadeAnim = useRef(new Animated.Value(0)).current

    useEffect(() => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration:3000,
          useNativeDriver: false
        }
      ).start();
    },[fadeAnim])

    return (
      <Animated.View
        style={{
          ...(style as object),
          opacity: fadeAnim,
        }}
      >
        {children}
      </Animated.View>
    );
  }