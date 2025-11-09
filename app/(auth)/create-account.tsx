import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import Input from "../../components/Input";
import NavButton from "../../components/NavButton";
import TextLink from "../../components/TextLink";

export default function CreateAccountScreen() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log("First Name changed:", firstName);
  }, [firstName]);

  useEffect(() => {
    console.log("Last Name changed:", lastName);
  }, [lastName]);

  useEffect(() => {
    console.log("Password changed:", password);
  }, [password]);

  const setFirstNameText = (text: string) => {
    setFirstName(text);
  };

  const setLastNameText = (text: string) => {
    setLastName(text);
  };

  const setEmailText = (text: string) => {
    setEmail(text);
  };

  const setPasswordText = (text: string) => {
    setPassword(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create account screen</Text>

      <Input
        value={firstName}
        onChangeText={setFirstNameText}
        placeholder="first name"
      />
      <Input
        value={lastName}
        onChangeText={setLastNameText}
        placeholder="last name"
      />

      <Input value={email} onChangeText={setEmailText} placeholder="email" />
      <Input
        value={password}
        onChangeText={setPasswordText}
        placeholder="password"
      />

      <NavButton href="/sign-in" text="Create" />

      <TextLink text="Have an account?" href="/sign-in" />
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
