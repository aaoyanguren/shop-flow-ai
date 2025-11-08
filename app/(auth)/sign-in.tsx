import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

import Input from "../../components/Input";
import TextLink from "../../components/TextLink";
import NavButton from "../../components/NavButton";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log("Email changed:", email);
  }, [email]);

  useEffect(() => {
    console.log("Password changed:", password);
  }, [password]);

  const setEmailText = (text: string) => {
    setEmail(text);
  };

  const setPasswordText = (text: string) => {
    setPassword(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign in screen</Text>

      <Input value={email} onChangeText={setEmailText} placeholder="email" />
      <Input
        value={password}
        onChangeText={setPasswordText}
        placeholder="password"
      />

      <NavButton text="Sign In" href="/home" />

      {/* // TODO: create nav constant */}
      <TextLink text="Create an account" href="/create-account" />
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
});
