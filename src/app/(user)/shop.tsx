import { View, Text, StyleSheet } from 'react-native'

export default function shop() {
  return (
    <View  style={styles.container}>
      <Text>shop</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});