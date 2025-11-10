import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";

import Input from "../Input";
import ActionButton from "../ActionButton";

export default function ItemManager({
  handleAddCategory,
  handleRemoveCategory,
  inputValue,
  setInputValue,
  removeEnabled = false,
  setRemoveEnabled,
  selectedItems, // selectedCategories
}: {
  handleAddCategory: () => void;
  handleRemoveCategory: () => void;
  inputValue: string;
  setInputValue: (value: string) => void;
  removeEnabled: boolean;
  setRemoveEnabled: (value: boolean) => void;
  selectedItems: string[] | [];
}) {
  const removeActionButtonStyles =
    removeEnabled && !!selectedItems.length ? "alternative" : "secondary";

  const getRemoveCategoryText = () => {
    if (selectedItems.length > 0 && removeEnabled) {
      return "Delete";
    }

    if (removeEnabled) {
      return "Cancel";
    }

    return "Remove Category";
  };

  return (
    <>
      <Input
        value={inputValue}
        onChangeText={setInputValue}
        placeholder="New category name"
      />

      <View style={styles.actionsContainer}>
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

            if (selectedItems.length > 0 && removeEnabled) {
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
    </>
  );
}

const styles = StyleSheet.create({
  actionsContainer: {
    backgroundColor: "#fff",
    gap: 10,
    flexDirection: "row",
    marginTop: 10,
  },
});
