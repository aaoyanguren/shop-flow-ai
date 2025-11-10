import { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

import ListItem from "../../components/ListItem";
import ItemManager from "../../components/ItemManager";

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

  const [inputValue, setInputValue] = useState("");
  const [removeEnabled, setRemoveEnabled] = useState(false);
  const [items, setItems] = useState<string[]>(DUMMY_ITEMS);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  // TODO: REMOVE
  useEffect(() => {
    console.log("[STATE] items:", items);
  }, [items]);
  useEffect(() => {
    console.log("[STATE] selectedItems:", selectedItems);
  }, [selectedItems]);
  useEffect(() => {
    console.log("[STATE] removeEnabled:", removeEnabled);
  }, [removeEnabled]);
  useEffect(() => {
    console.log("[STATE] inputValue:", inputValue);
  }, [inputValue]);

  const router = useRouter();

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

  const handleAddItems = () => {
    console.log("[STATE] inputValue:", inputValue);
    if (!inputValue) return;

    const newItem = inputValue;

    if (items.find((cat) => cat.toLowerCase() === newItem.toLowerCase())) {
      Alert.alert("Item already added");
      return;
    }

    setItems((prevCategories) => [...prevCategories, newItem]);
    setInputValue("");
  };

  const handleInputValue = (value: string) => {
    setInputValue(value);
  };

  const handleRemoveItems = () => {
    console.log("[STATE] inputValue:", inputValue);

    const itemsToKeep = items.filter((cat) => !selectedItems.includes(cat));

    setItems(itemsToKeep);
    setSelectedItems([]);
  };

  const handleSelectItem = (item: string) => {
    // if not in remove mode, route to category id page
    if (!removeEnabled) {
      router.push(`/categories/${item.toLowerCase()}`);
      return;
    }

    // if category is already selected, remove it from selectedCategories & return
    if (selectedItems.includes(item)) {
      console.log("Category already selected:", item);
      // may need to lowercase here
      setSelectedItems((prevSelected) =>
        prevSelected.filter((i) => i !== item)
      );
      return;
    }

    setSelectedItems((prevSelected) => [...prevSelected, item]);
  };

  useEffect(() => {
    console.log("[STATE] checkedItems: ", checkedItems);
  }, [checkedItems]);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: removeEnabled ? "#f4a385ff" : "#fff" },
      ]}
    >
      <Text>Category Screen: {id}</Text>

      <ItemManager
        selectedItems={selectedItems}
        inputValue={inputValue}
        setInputValue={handleInputValue}
        handleAddCategory={handleAddItems}
        handleRemoveCategory={handleRemoveItems}
        removeEnabled={removeEnabled}
        setRemoveEnabled={setRemoveEnabled}
      />

      <ScrollView style={styles.listContainer}>
        {DUMMY_ITEMS.map((item) => (
          <ListItem
            key={item}
            text={item}
            isChecked={checkedItems.includes(item)}
            isSelected={selectedItems.includes(item)}
            onPressItem={() => {
              console.log("Pressed: ", item);
              if (removeEnabled) {
                handleSelectItem(item);
                return;
              }
              handleAddCheckedItem(item);
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  buttonsContainer: {
    backgroundColor: "#fff",
    gap: 10,
    flexDirection: "row",
  },
  listContainer: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    backgroundColor: "lime",
    padding: 10,
  },
});
