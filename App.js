import { useEffect, useState } from "react";
import { Image } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Ionicons } from "@expo/vector-icons";
import { Asset } from "expo-asset";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import Gate from "./components/Gate";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/es/integration/react";
import { Provider } from "react-redux";

//! Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

//! All images load func
const cacheImages = (images) =>
  images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

//! All fonts load func
const cacheFonts = (fonts) =>
  fonts.map((font) => {
    Font.loadAsync(font);
  });

export default function App() {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        const fonts = [Ionicons.font, FontAwesome.font];
        const images = [
          require("./assets/cat.jpeg"),
          "https://pluspng.com/img-png/airbnb-vector-png-airbnb-logo-airbnb-logo-877.png",
          "https://images.unsplash.com/photo-1521568277769-1284832c95be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2848&q=80",
        ];

        await cacheFonts(fonts);
        await cacheImages(images);

        //! Artificially delay for two seconds to simulate a slow loading
        //await new Promise((resolve) => setTimeout(resolve, 2000));
        //! Tell the application to render
        setAppReady(true);
        await SplashScreen.hideAsync();
      } catch (e) {
        console.error(e);
      }
    }

    prepare();
  }, []);

  if (!appReady) {
    return null;
  }
  return (
    <Provider store={store}>
      {/* PersistGate는 핸드폰에 저장된 state를 load할 때까지 기다려줬다가 load가 다 끝나면 rendering을 하게 해주는 아이 */}
      <PersistGate persistor={persistor}>
        <Gate />
      </PersistGate>
    </Provider>
  );
}
