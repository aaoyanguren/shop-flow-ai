import { StyleSheet, Text } from "react-native";
import { Link } from "expo-router";

export default function TextLink({
  text,
  href,
}: {
  text: string;
  href: string;
}) {
  return (
    <Link style={styles.link} href={href} asChild>
      <Text>{text}</Text>
    </Link>
  );
}

const styles = StyleSheet.create({
  link: {
    color: "blue",
    fontSize: 16,
  },
});
