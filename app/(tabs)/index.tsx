import { StyleSheet, Alert, TextInput, TouchableOpacity } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import {
  KeyboardAwareScrollView,
  KeyboardController,
} from 'react-native-keyboard-controller';

export default function HomeScreen() {
  return (
    <KeyboardAwareScrollView
      bounces={false}
      keyboardDismissMode="interactive"
      keyboardShouldPersistTaps="handled"
      style={styles.container}
    >
      <TextInput editable style={styles.input} />
      <TouchableOpacity onPress={() => KeyboardController.dismiss().then(() => Alert.alert('Dismissed'))}>
        <ThemedText>Press me to dismiss</ThemedText>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  container: {
    flex: 1,
    paddingTop: 100
  },
});
