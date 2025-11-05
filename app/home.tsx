import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";

const FlowCard = () => {
  const router = useRouter();
  const onPressCard = () => {
    router.push("/categories/setup");
  };

  return (
    <Pressable onPress={onPressCard}>
      <View style={styles.card}>
        <Text style={styles.cardText}>New Flow</Text>
      </View>
    </Pressable>
  );
};

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Shop Flow AI!</Text>

      <FlowCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#f0f0f0",
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    width: "80%",

    alignItems: "center",
    justifyContent: "center",
  },
  cardText: {
    fontSize: 18,
    fontWeight: "500",
  },
});
