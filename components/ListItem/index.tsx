import { StyleSheet, Pressable, Text, View } from "react-native";

export default function ListItem({
  isChecked = false,
  text,
  onPressItem,
}: {
  isChecked: boolean;
  text: string;
  onPressItem: () => void;
}) {
  return (
    <Pressable onPress={onPressItem} style={styles.listItem}>
      <View
        style={[
          styles.checkbox,
          { backgroundColor: isChecked ? "green" : "none" },
        ]}
      />
      <Text style={styles.listItemText}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 1,
    borderColor: "grey",
    backgroundColor: "pink",
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
});
