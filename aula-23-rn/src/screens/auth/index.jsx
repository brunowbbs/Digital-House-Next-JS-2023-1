import { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackActions, useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../context/auth";

import api from "../../services/api";

import styles from "./styles";

export default function AuthScreen() {
  const { setNameUser } = useContext(AuthContext);
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState({
    email: "teste@teste.com",
    senha: "123456",
  });

  async function auth() {
    setLoading(true);
    try {
      const { email, senha } = formState;
      const response = await api.post("/auth", { email, password: senha });
      console.log(response.data);
      await AsyncStorage.setItem("@token", response.data.token);
      setNameUser(response.data.name);
      navigation.dispatch(StackActions.replace("Home"));
    } catch (error) {
      Alert.alert("Erro", "Verifique os dados informados e tente novamente");
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.cardForm}>
        <Text style={styles.textForm}>
          Informe seus dados corretamente para acessar o sistema.
        </Text>
        <TextInput
          value={formState.email}
          keyboardType="email-address"
          onChangeText={(txt) =>
            setFormState({ ...formState, email: txt.toLowerCase() })
          }
          placeholderTextColor="#000"
          style={styles.input}
          placeholder="E-mail"
        />
        <TextInput
          secureTextEntry
          value={formState.senha}
          onChangeText={(txt) => setFormState({ ...formState, senha: txt })}
          placeholderTextColor="#000"
          style={styles.input}
          placeholder="Senha"
        />

        <TouchableOpacity onPress={auth} style={styles.button}>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Text style={styles.textButton}>Entrar</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
