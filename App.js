import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import Splash from "./src/screen/onboarding/Splash";
import OnboardingIntro from "./src/screen/onboarding/OnboardingIntro";
import colors from "./assets/colors/colors";


export default App = () => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2500)
  }, [])
  StatusBar.setBackgroundColor(colors.primary)
  StatusBar.setBarStyle('light-content')
  return (
    isLoading ? <Splash /> : <OnboardingIntro />
  )
}

