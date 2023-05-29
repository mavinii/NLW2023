import { StatusBar } from 'expo-status-bar'
import { ImageBackground, View, Text, TouchableOpacity } from 'react-native'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'

// Stripes is a SVG file, so it can be imported as a React component
import blurBg from './src/assets/bg-blur.png'
import Stripes from './src/assets/stripes.svg'
import TLMLogo from './src/assets/tlm-logo.svg'
import { styled } from 'nativewind'

const StylledStripes = styled(Stripes)

export default function App() {
  // This hook will load the fonts and return a boolean value
  const [hasFontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  // If the fonts have not been loaded, the app will not be rendered
  if (!hasFontsLoaded) {
    return null
  }

  return (
    <ImageBackground
      source={blurBg}
      className="py-15 relative flex-1 items-center bg-gray-900 px-8 py-10"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      {/* stipes image */}
      <StylledStripes className="absolute left-2" />

      {/* logo, title, subtitle and button */}
      <View className="flex-1 items-center justify-center gap-6">
        <TLMLogo />

        <View className="space-y-2">
          <Text className="text-center font-title text-2xl leading-tight text-gray-50">
            Your TimeLine of Memories
          </Text>

          <Text className="text-center font-body text-base leading-relaxed text-gray-100">
            This is a powerful tool to save your memories and share them with
            your friends, or just keep them for yourself.
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          className="rounded-lg bg-green-500 px-5 py-3"
        >
          <Text className="font-alt text-sm uppercase text-black">
            save Memories
          </Text>
        </TouchableOpacity>
      </View>

      {/* footer */}
      <Text className="text-center font-body text-sm leading-relaxed text-gray-100">
        Made with ❤️ by @Marcos Oliveira
      </Text>

      <StatusBar style="light" translucent />
    </ImageBackground>
  )
}
