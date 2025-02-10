import React, { useState } from 'react';
import { SafeAreaView, Switch, Text, Image, View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  //initializing default value
  const [isEnabled, setIsEnabled] = useState(false);
  const [bgColor, setBgColor] = useState('#808080');
  const [text, setText] = useState('Off Bulb');
  const [image, setImage] = useState('https://th.bing.com/th/id/R.7a674cb2737026340123a4d674c63969?rik=11LFOBsR27KfxA&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2flightbulb-transparent%2flightbulb-transparent-3.png&ehk=X87i4Aw2yhrdKUYxXhNbn1rdhPFCmoPfOcS%2ffprI78k%3d&risl=&pid=ImgRaw&r=0');

  const toggleSwitch = () =>  {
    setBgColor((isEnabled) ?'#808080':'#ffff00'); // setting BG color depending on is enable value
    setText((isEnabled) ?  'Off Bulb ': 'On Bulb'); // setting Text Value depending on is enable value
    setIsEnabled(previousState => !previousState) // setting from counterpart of current value
    setImage((isEnabled) ?  'https://th.bing.com/th/id/R.7a674cb2737026340123a4d674c63969?rik=11LFOBsR27KfxA&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2flightbulb-transparent%2flightbulb-transparent-3.png&ehk=X87i4Aw2yhrdKUYxXhNbn1rdhPFCmoPfOcS%2ffprI78k%3d&risl=&pid=ImgRaw&r=0': 'https://www.kindpng.com/picc/m/158-1583460_yellow-light-bulb-bulb-png-transparent-background-png.png'); // setting BG color depending on is enable value


  };

  return (
    <SafeAreaProvider style={{ backgroundColor: bgColor }}> 
      <View style={styles.container}>
        <Image
          source={{
            uri: image, 
          }}
          // changing of bg color depending from bgColor Variable
          // changing image source from image variable
          // display value from text variable
          style={styles.image}
        />
        <Text style={styles.text}>
           {text} 
        </Text>
        <SafeAreaView style={styles.switchContainer}>
          <Switch
            trackColor={{ false: '#767577', true: '#0000ff' }}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </SafeAreaView>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'center',
    marginBottom: 20,
    alignSelf: 'center', // Fixing centering the image
  },
  text: {
    textAlign: 'center',
    marginBottom: 20,
  },
  switchContainer: {
    alignItems: 'center',
  },
});

export default App;
