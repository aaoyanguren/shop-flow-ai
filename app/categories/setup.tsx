import { use, useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";

import Input from "../../components/Input";

const InitialCategories = ["Frozen", "Produce", "Dairy", "Bakery"];

const CategoryCard = ({
  title,
  isSelectable = false,
  onPress,
}: {
  title: string;
  isSelectable: boolean;
  onPress?: (arg: string) => void;
}) => {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    console.log(`CategoryCard: ${title} isSelected:`, isSelected);
  }, [isSelected]);

  const onPressCard = () => {
    console.log("OnPressCard: (isSelectable)", isSelectable);

    if (isSelectable) {
      setIsSelected((prev) => !prev);
    }

    onPress && onPress(title);
  };

  const selectedStyle = {
    borderColor: "red",
    borderWidth: 2,
  };

  return (
    <Pressable onPress={onPressCard}>
      <View
        style={{
          ...styles.card,
          ...(isSelected ? selectedStyle : {}),
        }}
      >
        <Text style={styles.cardText}>{title}</Text>
      </View>
    </Pressable>
  );
};

const CategoryButton = ({
  children,
  isDisabled = false,
  onPress,
}: {
  children: string;
  isDisabled?: boolean;
  onPress: () => void;
}) => {
  return (
    <Pressable
      style={{
        ...styles.button,
        backgroundColor: isDisabled ? "#ddd" : "#007AFF",
      }}
      onPress={onPress}
      disabled={isDisabled}
    >
      <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
        {children}
      </Text>
    </Pressable>
  );
};

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

    const newCategory = inputValue.toLowerCase();

    if (categories.find((cat) => cat.toLowerCase() === newCategory)) return;

    setCategories((prevCategories) => [...prevCategories, inputValue]);
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

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: removeEnabled ? "orange" : "#fff" },
      ]}
    >
      <Text style={styles.text}>Category Setup Screen</Text>
      <Input value={inputValue} onChangeText={setInputValue} />
      <View style={styles.buttonsContainer}>
        <CategoryButton
          isDisabled={inputValue.length === 0}
          onPress={handleAddCategory}
        >
          Add Category
        </CategoryButton>
        <CategoryButton
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
          Remove Category
        </CategoryButton>
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
  card: {
    backgroundColor: "#f0f0f0",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  cardText: {
    fontSize: 18,
    fontWeight: "500",
  },
  buttonsContainer: {
    backgroundColor: "#fff",
    gap: 10,
    flexDirection: "row",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "80%",
    paddingHorizontal: 10,
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
