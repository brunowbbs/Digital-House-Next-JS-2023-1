import { useRoute } from "@react-navigation/native";
import { View, Text } from "react-native";

export default function DetailsScreen() {
  const { params } = useRoute();

  const { id } = params;

  alert(id);

  return (
    <View>
      <Text>Ola Details</Text>
    </View>
  );
}
