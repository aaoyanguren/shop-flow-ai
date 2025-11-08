import { Pressable, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function NavButton({
  text,
  href,
}: {
  text: string;
  href: string;
}) {
  const router = useRouter();

  const handleOnPress = () => {
    router.push(href);
  };

  return (
    <Pressable style={styles.button} onPress={handleOnPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
