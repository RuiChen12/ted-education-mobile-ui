import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

interface AnswerItem {
  question: string;
  answer: string;
  points: number;
}

export default function ResultsScreen() {
  const router = useRouter();
  const { score, answers } = useLocalSearchParams();
  const answerData: AnswerItem[] = JSON.parse(answers as string);

  return (
    <SafeAreaView edges={["top", "bottom"]} style={styles.container}>
      <Text style={styles.title}>Assessment Completed</Text>
      <Text style={styles.subtitle}>Your Score:</Text>
      <Text style={styles.score}>
        {score}
      </Text>

      <ScrollView style={styles.answersContainer}>
        <Text style={styles.answersTitle}>Your Answers:</Text>
        {answerData.map((item, index) => (
          <View key={index} style={styles.answerItem}>
            <Text style={styles.answerText}>
              Q{index + 1}: {item.question} — {item.answer}
            </Text>
            <Text style={styles.answerStatus}>+{item.points}</Text>
          </View>
        ))}
      </ScrollView>
      <Pressable 
        style={[styles.button, styles.homeButton]}
        onPress={() => router.replace("/(tabs)/home")}
      >
        <Text style={styles.buttonText}>Home</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  score: {
    fontSize: 24,
    color: "black",
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  message: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  answersContainer: {
    flex: 1,
    marginBottom: 20,
    width: "100%",
  },
  answersTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  answerItem: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#D8E0E4",
    backgroundColor: "#FFFFFF",
  },
  answerText: {
    fontSize: 16,
    marginBottom: 5,
  },
  answerStatus: {
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    marginBottom: 15,
  },
  homeButton: {
    backgroundColor: "#17395D",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
  },
});
