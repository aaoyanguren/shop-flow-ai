import { Redirect } from "expo-router";

export default function Index() {
  const isAuthenticated = false; // TODO: Check actual auth state

  if (isAuthenticated) {
    return <Redirect href="/home" />;
  }

  return <Redirect href="/sign-in" />;
}
