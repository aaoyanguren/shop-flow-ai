import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

import Input from "../../components/Input";
import ListItem from "../../components/ListItem";

const DUMMY_ITEMS = [
  "pizza",
  "waffles",
  "chicken nuggets",
  "frozen strawberries",
];

export default function CategoryScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View>
      <Text>Category Screen: {id}</Text>

      <Input value="" onChangeText={() => {}} placeholder="Item name" />

      <View style={styles.listContainer}>
        {DUMMY_ITEMS.map((item) => (
          <ListItem key={item} text={item} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    gap: 12,
  },
});
