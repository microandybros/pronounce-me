/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  StatusBar,
  Button,
} from 'react-native';

import Tts from 'react-native-tts';

const sayStuff = (sayThis: string) => {
  Tts.speak(sayThis, {
    iosVoiceId: 'com.apple.ttsbundle.Zosia-compact',
  });
};

const App = () => {
  const [sayThis, setSayThis] = useState('');

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <TextInput
              placeholder={'i will say this'}
              value={sayThis}
              onChangeText={setSayThis}
            />
            <Button
              title={'Prepare to die'}
              onPress={() => {
                sayStuff(sayThis);
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  body: {
    backgroundColor: 'white',
  },
});

export default App;
