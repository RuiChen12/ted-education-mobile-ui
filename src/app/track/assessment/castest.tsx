import { useState } from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const questions = [
  {
    question: "test1",
    options: ["answer1", "answer2"],
    value: "answer1"
  },
  {
    question: "test2",
    options: ["answer1", "answer2"],
    value: "answer1"
  },
];

export default function QuizScreen() {
  const router = useRouter(); 
  const [currentQuestion, setCurrentQuestion] = useState(0); 
  const [score, setScore] = useState(0); 
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null); 
  const [userAnswers, setUserAnswers] = useState<{question: string, answer: string}[]>([]); 

  const handleSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;

    const answer = {
      question: questions[currentQuestion].question,
      answer: selectedAnswer,
      points: selectedAnswer === questions[currentQuestion].value ? 1 : 0,
    };
    const nextScore = score + answer.points;
    const nextAnswers = [...userAnswers, answer];
    setUserAnswers(nextAnswers);
    setScore(nextScore);

    setSelectedAnswer(null);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      router.push({
        pathname: "/track/assessment/casresult",
        params: { 
          score: nextScore,
          answers: JSON.stringify(nextAnswers),
        },
      });
    }
  };

  return (
    <SafeAreaView edges={["top", "bottom"]} style={styles.container}>
      <Text style={styles.questionCount}>
        Question {currentQuestion + 1}/{questions.length}
      </Text>
      <Text style={styles.question}>
        {questions[currentQuestion].question}
      </Text>
      {questions[currentQuestion].options.map((option, index) => (
        <Pressable
          key={index}
          style={[
            styles.option,
            selectedAnswer === option && styles.selectedOption 
          ]}
          onPress={() => handleSelect(option)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </Pressable>
      ))}

      <Pressable
        style={[
          styles.submitButton,
          !selectedAnswer && styles.disabledButton
        ]}
        onPress={handleSubmit}
        disabled={!selectedAnswer}
      >
        <Text style={styles.submitButtonText}>
          {currentQuestion < questions.length - 1 ? "Submit & Next" : "Submit & Finish"}
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: 24,
      paddingBottom: 20,
      backgroundColor: "#fff",
    },
    questionCount: {
      fontSize: 18,
      color: "#666",
      marginBottom: 20,
    },
    question: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 30,
    },
    option: {
      backgroundColor: "#f0f0f0",
      padding: 15,
      borderRadius: 10,
      marginBottom: 15,
    },
    selectedOption: {
      backgroundColor: "#d4e6ff",
      borderWidth: 1,
      borderColor: "#3498db",
    },
    optionText: {
      fontSize: 18,
    },
    submitButton: {
      backgroundColor: "#3498db",
      padding: 15,
      borderRadius: 10,
      marginTop: 20,
      alignItems: "center",
    },
    disabledButton: {
      backgroundColor: "#cccccc",
    },
    submitButtonText: {
      color: "white",
      fontSize: 18,
      fontWeight: "600",
    },
  });