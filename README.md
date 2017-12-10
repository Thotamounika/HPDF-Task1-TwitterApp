"# HPDF-Task1-TwitterApp" 
Task-1-HPDF

Used NativeBase to design the following screensfrom the Twitter Android app (with no backend integration)

Twitter timeline Twitter profile menu Twitter search box

System Requirements

Globally installed node >= 6.0 Globally installed npm >= 4.0 Globally installed React Native CLI which allow you to easily create and initialize projects.

Install NativeBase https://docs.nativebase.io/docs/GetStarted.html

Use the React Native command line interface to generate a new React Native project called "AwesomeProject": react-native init AwesomeProject(https://facebook.github.io/react-native/docs/getting-started.html)

You will need an Android device to run your React Native Android app. This can be either a physical Android device, or more commonly, you can use an AVD which allows you to emulate an Android device on your computer. start your emulator in android studio or use your android phone by plugging it in to your computer using a USB cable and enable USB debugging.

To enable USB debugging on your device, you will first need to enable the "Developer options" menu by going to Settings → About phone and then tapping the Build number row at the bottom seven times. You can then go back to Settings → Developer options to enable "USB debugging".

cd AwesomeProject react-native run-android

Now that you have successfully run the app. replace App.js file with src folder in this repository.

In case you are using latest version of react-native: I also updated the packages.json file I changed the dependencies inside packages.json file by downgrading from "react-native": "0.51.0" to "react-native": "0.49.5". because some functionalities of nativebase are not supported for latest version.
