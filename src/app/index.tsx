import { Redirect } from "expo-router";

export default function Index() {
  const isSignedIn = true;

  if (isSignedIn) return <Redirect href="/(admin)" />;

  return <Redirect href="/(user)" />;
}
