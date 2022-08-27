# Airbnb 2022 clone app with React native + Redux + Expo

- #01 Init

  ```bash
  npx create-expo-app my-app

  npm start
  ```

- #02 SplashScreen

  - AppLoading이 deprecated 되었다고 알려주더라. 이걸 쓰라네 요즘은

  #### Cycle은 이런식이다.

  1. SplashScreen.preventAutoHideAsync();
  2. return null;
  3. useEffect
  4. setAppIsReady to true
  5. rerendering because state changed
  6. return (<View>...</View>)
  7. useCallback (View에서 onLayout을 useCallback을 사용해서)
  8. SplashScreen hide

- #03 Load assets, fonts

  ```bash
  npm install expo-asset
  npm install @expo/vector-icons
  ```

- #04 Redux settings

  ```bash
  npm install @reduxjs/toolkit
  npm install redux
   npm install react-redux
  ```

- #05 Redux hook

  - useSelector (특정 reducer의 state를 가져올 수 있는 hook)
  - useDispatch (action을 dispatch하기 위해 사용하는 hook)

- #06 Redux persist

  ```bash
  npm install redux-persist
  npm install @react-native-async-storage/async-storage (얘는 redux persist에서 storage가 필요한데 그 storage를 이걸로 사용 react-native의 asyncstorage가 deprecated됐다고 하네)
  ```
