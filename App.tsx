import { SafeAreaView, StyleSheet } from "react-native"
import { Footer } from "./src/components/Footer"
import { Header } from "./src/components/Header"
import { PostsFlatList } from "./src/components/PostsFlatList"
import { StoriesFlatList } from "./src/components/StoriesFlatList"
import { theme } from "./src/styles/theme"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <StoriesFlatList />

      <PostsFlatList />

      <Footer />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
})
