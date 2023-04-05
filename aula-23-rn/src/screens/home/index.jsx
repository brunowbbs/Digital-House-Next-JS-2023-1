import { View, Text, SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/auth";

export default function HomeScreen() {
  const { nameUser } = useContext(AuthContext);

  async function getTokenAsyncStorage() {
    const response = await AsyncStorage.getItem("@token");
    alert(response);
  }

  useEffect(() => {
    getTokenAsyncStorage();
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text>Olá, {nameUser}</Text>
      </View>
    </SafeAreaView>
  );
}
