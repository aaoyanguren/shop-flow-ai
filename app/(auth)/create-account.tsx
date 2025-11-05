import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { useRouter, Link } from "expo-router";

const Input = () => {
  return <TextInput style={styles.input} />;
};

const MyButton = () => {
  const router = useRouter();

  const handleOnPress = () => {
    router.push("/sign-in");
  };

  return (
    <Pressable style={styles.button} onPress={handleOnPress}>
      <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
        Create Account
      </Text>
    </Pressable>
  );
};

export default function CreateAccountScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create account screen</Text>

      <Input />
      <Input />
      <MyButton />

      <Link href="/sign-in" asChild>
        <Text>Have an account?</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    gap: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "80%",
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
