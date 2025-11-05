import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { useRouter, Link } from "expo-router";

const Input = () => {
  return <TextInput style={styles.input} />;
};

const MyButton = () => {
  const router = useRouter();

  const handleOnPress = () => {
    router.push("/home");
  };

  return (
    <Pressable style={styles.button} onPress={handleOnPress}>
      <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
        Sign In
      </Text>
    </Pressable>
  );
};

export default function SignInScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign in screen</Text>

      <Input />
      <Input />
      <MyButton />

      <Link href="/create-account" asChild>
        <Text>Create an account</Text>
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
