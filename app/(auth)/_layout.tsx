import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // No header on auth screens
        contentStyle: { backgroundColor: "#fff" },
        animation: "fade", // Different transition animation
      }}
    >
      <Stack.Screen name="sign-in" />
      <Stack.Screen name="create-account" />
    </Stack>
  );
}
