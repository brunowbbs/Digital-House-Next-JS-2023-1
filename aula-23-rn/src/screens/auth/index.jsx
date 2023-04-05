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
import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../context/auth";

import api from "../../services/api";

import styles from "./styles";

export default function AuthScreen() {
  const { setNameUser } = useContext(AuthContext);
  const { navigate } = useNavigation();

  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState({ email: "", senha: "" });

  async function auth() {
    setLoading(true);
    try {
      const { email, senha } = formState;
      const response = await api.post("/auth", { email, password: senha });
      console.log(response.data);
      await AsyncStorage.setItem("@token", response.data.token);
      setNameUser(response.data.name);
      navigate("Home");
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
          keyboardType="email-address"
          onChangeText={(txt) =>
            setFormState({ ...formState, email: txt.toLowerCase() })
          }
          placeholderTextColor="#000"
          style={styles.input}
          placeholder="E-mail"
        />
        <TextInput
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
