import { StackActions, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Text, View, Image } from "react-native";

export default function SplashScreen() {
  const navigation = useNavigation();

  // function navigateToAuth() {}

  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace("Auth"));
    }, 3000);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        style={{ width: 150, height: 150 }}
        source={{
          uri: "https://usemobile.com.br/wp-content/uploads/2022/08/react-native-logo.png",
        }}
      />
      <Text>Logo do app</Text>
    </View>
  );
}
