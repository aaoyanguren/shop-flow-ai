import { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";

import Input from "../../components/Input";
import ActionButton from "../../components/ActionButton";
import ListItem from "../../components/ListItem";

const DUMMY_ITEMS = [
  "pizza",
  "waffles",
  "chicken nuggets",
  "frozen strawberries",
];

const DUMMY_REDUX_STATE_ITEMS = ["chicken nuggets", "pizza"];

export default function CategoryScreen() {
  const [checkedItems, setCheckedItems] = useState<string[]>(
    DUMMY_REDUX_STATE_ITEMS
  );

  const { id } = useLocalSearchParams<{ id: string }>();

  const handleAddCheckedItem = (item: string) => {
    // item already checked remove and return early
    if (checkedItems.includes(item)) {
      console.log("Item already checked, returning...");
      setCheckedItems((prev) => prev.filter((i) => i !== item));
      return;
    }

    setCheckedItems((prev) => [...prev, item]);
  };

  useEffect(() => {
    console.log("[STATE] checkedItems: ", checkedItems);
  }, [checkedItems]);

  return (
    <View>
      <Text>Category Screen: {id}</Text>

      <Input value="" onChangeText={() => {}} placeholder="Item name" />

      <View style={styles.buttonsContainer}>
        <ActionButton onPress={() => {}}>Add Item</ActionButton>
        <ActionButton onPress={() => {}}>Remove Items</ActionButton>
      </View>

      <ScrollView style={styles.listContainer}>
        {DUMMY_ITEMS.map((item) => (
          <ListItem
            key={item}
            text={item}
            isChecked={checkedItems.includes(item)}
            onPressItem={() => {
              console.log("Pressed: ", item);
              handleAddCheckedItem(item);
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    backgroundColor: "#fff",
    gap: 10,
    flexDirection: "row",
  },
  listContainer: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    height: 500,
    backgroundColor: "lime",
    padding: 10,
  },
});
