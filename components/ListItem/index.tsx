import { StyleSheet, Pressable, Text, View } from "react-native";

export default function ListItem({ text }: { text: string }) {
  return (
    <Pressable style={styles.listItem}>
      <View style={styles.checkbox} />
      <Text style={styles.listItemText}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 1,
    borderColor: "grey",
    backgroundColor: "pink",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 10,
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
