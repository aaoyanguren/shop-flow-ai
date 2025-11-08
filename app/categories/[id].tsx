import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function CategoryScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View>
      <Text>Category Screen: {id}</Text>
    </View>
  );
}
