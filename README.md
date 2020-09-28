# auth-demo

This is an auth demo. This project is built with react native and firebase

## Requirement

- `Node`
- `Yarn`: Yarn to install package

### Tech Stack

- React Native
- Node
- Android Studio
- XCode
- package manager
- Cocoapod
- Firebase
- React/React native https://facebook.github.io/react-native/

### Language Used

- ECMAScript 2015
- Java
- Swift/Obj-C

### Installation

- Clone the project to your local machine
- Download and install project dependencies using `yarn install`
- To start the project use `yarn start`
- To install the pod files for, `cd ios` and run `pod install` which will download the required dependencies for your pod files
- To run on ios emulator run `yarn ios`
- To run on android emulator run `yarn android`

## File/Folder Setup

Follow the following guide to under the folder structures

- `__mocks__/`: Folder contains test mocks
- `__tests__/`: Folder contains test files
- `android/`: Folder for android related files
- `assets/`: Folder contains all assets such as fonts and images
- `ios/`: Folder for ios related files
- `src/`: Folder contains the root project files
- `src/apis/`: Folder contains API endpoints definitions
- `src/components/`: Folder contains UI components
- `src/navigation/`: Folder contains all navigation route definitions
- `src/screens/`: Folder contains individual screens
- `src/styles/`: Folder contains UI styles
- `src/utils/`: Folder contains utilities and helpers

## Building Production App

After setting up with all requirements mentioned above, To build individual apps

### Android

You can run the following command to simply build your android `yarn android:assets && cd android && ./gradlew assembleRelease && cd ..` and navigate to `android/app/build/outputs/apk/release/app-release.apk` to view your released apk, and to upload your app to google playstore checkout https://support.google.com/googleplay/android-developer/answer/113469?hl=en

### Ios

To generate ios app, you are required to be signed in with your developer account on your target machine and setup your provisioning profile which will be used to generate and sign your build. https://medium.com/@abhimuralidharan/what-is-a-provisioning-profile-in-ios-77987a7c54c2

Open the `ios` folder in xcode, select the auth-demo.xcworkspace file and open, from the file explore panel, click on the project `auth-demo`, in the general tab, update the version number, click on `product` from the menu and `archive` to bundle the app, when the app is bundled you can then upload the generated app or export it fro distribution.

Read more

- okta page: https://developer.okta.com/blog/2019/04/05/react-native-ios-app-store
- apple page: https://developer.apple.com/ios/submit/
- generating provisioning profile: https://medium.com/@abhimuralidharan/what-is-a-provisioning-profile-in-ios-77987a7c54c2

