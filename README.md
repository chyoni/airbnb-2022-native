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

- #07 PersistGate

  - 얘는 persist setting이 다 끝나고 그 setting대로 실행하기 위해 state의 변경사항점을 load해주는 아이

  - react-native-debugger라는 앱을 사용해서 좀더 프로페셔널하게 관리하고 디버깅하자

  ```bash
  brew install --cask react-native-debugger
  ```

- #08 React Navigation

  ```bash
  npm install @react-navigation/native
  expo install react-native-screens react-native-safe-area-context
  npm install @react-navigation/stack
  npm install react-native-gesture-handler
  npx pod-install ios
  ```

- #09 Navigation Options

  - https://reactnavigation.org/docs/stack-navigator

- #10 Styled components

  ```bash
  npm i --save styled-components
  expo install expo-blur
  ```

- #11 Auth button

  - Auth navigation에서 사용되는 버튼의 컴포넌트를 만듦

  ```bash
  npm install prop-types
  ```

- #12 Sign in screen

- #13 Sign in Input component

- #14 KeyboardAvoidingView, Signup screen

- #15 Axios for API (axios call settings)

  ```bash
  npm install axios
  ```

- #16 Create account api 1

- #17 Create account DONE

- #18 Login api 1

- #19 Login api 2 (get token by server)

- #20 Login DONE

- #21 Tab navigation

  ```bash
  npm install @react-navigation/bottom-tabs
  ```

- #22 Rooms slices

- #23 Design pattern (Container / Presenter)

- #24 Dispatch rooms

- #25 Duplicated push removed

- #26 Room card component

- #27 Room card component 2

- #28 Room card component 3

  React native swiper

  ```bash
  npm i --save react-native-swiper@next
  ```

- #29 Load more rooms

- #30 Swiper change to react-native-web-swiper

  ```bash
  npm i react-native-web-swiper --save

  ```

- #31 My favs

- #32 Toggle favs 1

- #33 Favs screen 1

- #34 Favs screen 2

- #35 Favs screen 3

- #36 Favs DONE

- #37 Tabs and Stack

- #38 Room detail screen 1

- #39 Room detail screen 2

- #39 Room detail screen 3

- #40 Room detail screen 4

- #41 Room detail screen 5

- #42 Room detail screen 6 (Maps)

  ```bash
  npm install react-native-maps
  ```

- #43 Room detail screen 7

- #44 Search 1

- #45 Search 2

- #46 Search 3

- #47 Search 4

- #48 Search DONE

- #49 Profile 1

- #50 Profile DONE

- #51 Edit profile 1

- #52 Map 1

- #53 Map 2

  - ScrollView의 현재 index를 스크롤뷰 x의 값을 이용해 구한다.

- #54 Map 3

  - 현재 index를 구했으면 그 index에 맞게 맵의 center를 이동시킨다.

- #55 Map 4 (Marker Image)

- #56 Map DONE
