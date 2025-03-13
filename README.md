# Keyboard dismiss issue reproduction

This is an example project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app), then installed [`react-native-keyboard-controller`](https://github.com/kirillzyusko/react-native-keyboard-controller) and set up the screen with a `TextInput` and a `TouchableOpacity` to dismiss the keyboard.

## Issue
The issue is that the `KeyboardController.dismiss` stays pending until the first time the keyboard is dismissed, resolves right after the first time the keyboard is dismissed, then after that it would work as expected (when it's called, it dismisses the keyboard if it's shown, then resolves). 

## Steps to reproduce
1. when the app is started, press on the TouchableOpacity to dismiss the keyboard
2. notice that the callback is not called (Alert is not shown)
3. press on the TextInput to focus it
4. press out of the TextInput to blur it and dismiss the keyboard
5. notice that the callback is called (Alert is shown)
6. now press on the TouchableOpacity to dismiss the keyboard, notice that the callback is called (Alert is shown) no matter if the keyboard is shown or not

## Screen record

https://github.com/user-attachments/assets/5a54a4b3-36e7-499c-87a8-236eb1b43e8e
