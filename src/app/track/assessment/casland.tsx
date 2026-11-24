import { Link } from "expo-router";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function CasLanding() {
  return (

    <View style={styles.container}>
      <Text style={styles.title}>TED CAS Assessment</Text>
      <Text style={styles.subtitle}>Answer questions for better self-monitoring</Text>
      <Link href="/track/assessment/castest" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Begin Assessment</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontFamily: "Georgia",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: "Georgia",
    fontSize: 18,
    color: "#666",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#3498db",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 30,
  },
  buttonText: {
    fontFamily: "Georgia",
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});