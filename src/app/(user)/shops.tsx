import { StyleSheet, Text, View } from "react-native";

export default function shops() {
  return (
    <View style={styles.container}>
      <Text>shops</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
