import { useCallback, useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import { Asset } from 'expo-asset';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Gate from './components/Gate';

//! Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

//! All images load func
const cacheImages = (images) =>
  images.map((image) => {
    if (typeof image === 'string') {
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
          require('./assets/cat.jpeg'),
          'https://pluspng.com/img-png/airbnb-vector-png-airbnb-logo-airbnb-logo-877.png',
        ];

        await cacheFonts(fonts);
        await cacheImages(images);

        //! Artificially delay for two seconds to simulate a slow loading
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        //! Tell the application to render
        setAppReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appReady) {
      // ! This tells the splash screen to hide immediately! If we call this after
      // ! `setappReady`, then we may see a blank screen while the app is
      // ! loading its initial state and rendering its first pixels. So instead,
      // ! we hide the splash screen once we know the root view has already
      // ! performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appReady]);

  if (!appReady) {
    return null;
  }
  return (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      onLayout={onLayoutRootView}
    >
      <Gate />
    </View>
  );
}
