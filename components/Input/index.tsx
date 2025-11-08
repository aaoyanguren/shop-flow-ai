import { TextInput, StyleSheet } from "react-native";

export default function Input({
  hasError = false,
  onChangeText,
  placeholder = "",
  value,
}: {
  hasError?: boolean;
  onChangeText: (text: string) => void;
  placeholder?: string;
  value: string;
}) {
  const dynamicStyles = hasError ? styles.error : styles.initial;

  return (
    <TextInput
      style={{ ...styles.input, ...dynamicStyles }}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderRadius: 5,
    height: 50,
    paddingHorizontal: 10,
    width: "80%",
  },
  initial: {
    borderColor: "gray",
  },
  error: {
    borderColor: "red",
  },
});
