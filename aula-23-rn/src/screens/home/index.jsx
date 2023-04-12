import { View, SafeAreaView, Alert, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { useContext, useEffect, useState } from "react";
// import { Button } from "react-native-paper";

import { AuthContext } from "../../context/auth";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import { FlatList } from "native-base";

export default function HomeScreen() {
  const { nameUser } = useContext(AuthContext);
  const { navigate } = useNavigation();

  const [times, setTimes] = useState([]);

  async function getTokenAsyncStorage() {
    return await AsyncStorage.getItem("@token");
    // alert(response);
  }

  useEffect(() => {
    getTimes();
  }, []);

  async function getTimes() {
    try {
      const token = await getTokenAsyncStorage();

      // console.log(token);

      const response = await api.get("/teams", {
        headers: {
          Authorization: token,
        },
      });
      setTimes(response.data);
    } catch (error) {
      Alert.alert("Erro", "Erro ao buscar times");
    }

    // console.log(response.data);
  }

  return (
    <SafeAreaView>
      <View>
        <Text>Olá, {nameUser}</Text>

        <Button
          icon="logout"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          sair
        </Button>

        <FlatList
          data={times}
          renderItem={({ item }) => {
            console.log(item);
            return (
              <Card onPress={() => navigate("Details", { id: item._id })}>
                <Image
                  source={{ uri: item.image }}
                  style={{ width: 50, height: 200, resizeMode: "contain" }}
                />
                <Card.Content>
                  <Text variant="titleLarge">{item.name}</Text>
                </Card.Content>
              </Card>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}
