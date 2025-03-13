# Keyboard dismiss issue reproduction

This is an example project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app), then installed [`react-native-keyboard-controller`](https://github.com/kirillzyusko/react-native-keyboard-controller) and set up the screen with a `TextInput` and a `TouchableOpacity` to dismiss the keyboard.

## Issue
The issue is that the `KeyboardController.dismiss` stays pending until the first time the keyboard is dismissed, resolves right after the first time the keyboard is dismissed, then after that it would work as expected (when it's called, it dismisses the keyboard if it's shown, then resolves). 

## Steps to reproduce
- when the app is started, press on the `TouchableOpacity` to dismiss the keyboard
- notice that the callback is not called (Alert is not shown)
- press on the `TextInput` to focus it
- press out of the `TextInput` to blur it and dismiss the keyboard
- notice that the callback is called (Alert is shown)
- now press on the `TouchableOpacity` to dismiss the keyboard, notice that the callback is called (Alert is shown) no matter if the keyboard is shown or not

