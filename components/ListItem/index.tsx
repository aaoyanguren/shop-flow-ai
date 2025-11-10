import { StyleSheet, Pressable, Text, View } from "react-native";

export default function ListItem({
  isChecked = false,
  isSelected = false,
  text,
  onPressItem,
}: {
  isChecked: boolean;
  isSelected: boolean;
  text: string;
  onPressItem: () => void;
}) {
  const getItemBgColor = () => {
    let col = "white";
    if (isChecked) {
      col = "#eee";
    }

    if (isSelected) {
      col = "#ffe7e7ff";
    }

    return col;
  };

  return (
    <Pressable
      onPress={onPressItem}
      style={[
        styles.listItem,
        {
          borderColor: isSelected ? "#f86565ff" : "white",
          backgroundColor: getItemBgColor(),
        },
      ]}
    >
      <View
        style={[
          styles.checkbox,
          { backgroundColor: isChecked ? "lime" : "none" },
        ]}
      />
      <Text style={[styles.listItemText, isChecked && styles.checked]}>
        {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 2,
    borderRadius: 5,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 10,
    marginTop: 8, // TODO: Revisit this
  },
  checkbox: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 2,
    height: 16,
    width: 16,
  },
  listItemText: {
    fontSize: 16,
  },
  checked: {
    textDecorationLine: "line-through",
    color: "grey",
  },
});
