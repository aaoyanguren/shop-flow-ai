import { TextInput, StyleSheet } from "react-native";

export default function Input({
  onChangeText,
  value,
}: {
  onChangeText: (text: string) => void;
  value: string;
}) {
  return (
    <TextInput style={styles.input} value={value} onChangeText={onChangeText} />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "80%",
    paddingHorizontal: 10,
  },
});
