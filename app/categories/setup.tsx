import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";

import Input from "../../components/Input";
import ActionButton from "../../components/ActionButton";
import CategoryCard from "../../components/CategoryCard";

const InitialCategories = ["Frozen", "Produce", "Dairy", "Bakery"];

export default function CategorySetupScreen() {
  const [categories, setCategories] = useState<string[]>(InitialCategories);
  const [inputValue, setInputValue] = useState("");
  const [removeEnabled, setRemoveEnabled] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const router = useRouter();

  // TODO: REMOVE
  useEffect(() => {
    console.log("[STATE] categories:", categories);
  }, [categories]);
  useEffect(() => {
    console.log("[STATE] selectedCategories:", selectedCategories);
  }, [selectedCategories]);
  useEffect(() => {
    console.log("[STATE] removeEnabled:", removeEnabled);
  }, [removeEnabled]);
  useEffect(() => {
    console.log("[STATE] inputValue:", inputValue);
  }, [inputValue]);

  const handleAddCategory = () => {
    console.log("[STATE] inputValue:", inputValue);
    if (!inputValue) return;

    const newCategory = inputValue;

    if (
      categories.find((cat) => cat.toLowerCase() === newCategory.toLowerCase())
    )
      return;

    setCategories((prevCategories) => [...prevCategories, newCategory]);
    setInputValue("");
  };

  const handleRemoveCategory = () => {
    console.log("[STATE] inputValue:", inputValue);

    const categoriesToKeep = categories.filter(
      (cat) => !selectedCategories.includes(cat)
    );

    setCategories(categoriesToKeep);
    setSelectedCategories([]);
  };

  const handleSelectCategory = (category: string) => {
    // if not in remove mode, route to category id page
    if (!removeEnabled) {
      router.push(`/categories/${category.toLowerCase()}`);
      return;
    }

    // if category is already selected, remove it from selectedCategories & return
    if (selectedCategories.includes(category)) {
      console.log("Category already selected:", category);
      // may need to lowercase here
      setSelectedCategories((prevSelected) =>
        prevSelected.filter((cat) => cat !== category)
      );
      return;
    }

    setSelectedCategories((prevSelected) => [...prevSelected, category]);
  };

  const removeActionButtonStyles = removeEnabled ? "alternative" : "secondary";

  const getRemoveCategoryText = () => {
    if (selectedCategories.length > 0 && removeEnabled) {
      return "Delete Categories";
    }

    if (removeEnabled) {
      return "Cancel";
    }

    return "Remove Category";
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: removeEnabled ? "orange" : "#fff" },
      ]}
    >
      <Text style={styles.text}>Category Setup Screen</Text>

      <Input
        value={inputValue}
        onChangeText={setInputValue}
        placeholder="New category name"
      />

      <View style={styles.buttonsContainer}>
        <ActionButton
          isDisabled={inputValue.length === 0}
          onPress={handleAddCategory}
        >
          Add Category
        </ActionButton>
        <ActionButton
          variant={removeActionButtonStyles}
          onPress={() => {
            console.log("Remove Category Pressed");

            // If there are selected categories and remove is enabled, proceed to remove

            if (selectedCategories.length > 0 && removeEnabled) {
              console.log("Proceeding to remove categories");
              handleRemoveCategory();
            }

            // Toggle removeEnabled state
            if (!removeEnabled) {
              setRemoveEnabled(true);
            } else {
              setRemoveEnabled(false);
            }
          }}
        >
          {getRemoveCategoryText()}
        </ActionButton>
      </View>

      <View style={styles.categoriesContainer}>
        {categories.map((cat) => (
          <CategoryCard
            key={cat}
            title={cat}
            isSelectable={removeEnabled}
            onPress={() => handleSelectCategory(cat)}
          />
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  buttonsContainer: {
    backgroundColor: "#fff",
    gap: 10,
    flexDirection: "row",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  categoriesContainer: {
    marginTop: 20,
    gap: 10,
    backgroundColor: "pink",
    width: "100%",
    flexDirection: "column",
  },
});
