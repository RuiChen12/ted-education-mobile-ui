import { useState } from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const questions = [
  {
    component: "Spontaneous Orbital Pain",
    question: "Do you feel pain or pressure behind your eyes when they are at rest?",
    options: ["Yes", "No"],
    value: "Yes"
  },
  {
    component: "Gaze Evoked Orbital Pain",
    question: "Do you feel pain or tightness when looking in different directions?",
    options: ["Yes", "No"],
    value: "Yes"
  },
  {
    component: "Conjunctival Chemosis",
    question: "Do you feel swelling or have a jelly-like appearance over the surface of your eye?",
    options: ["Yes", "No"],
    value: "Yes"
  },
  {
    component: "Eyelid Swelling",
    question: "Are you experiencing fluctuating swelling with your upper or lower eyelids?",
    options: ["Yes", "No"],
    value: "Yes"
  },
  {
    component: "Eyelid Erythema",
    question: "Are you experiencing redness of your upper or lower eyelid skin?",
    options: ["Yes", "No"],
    value: "Yes"
  },
  {
    component: "Conjunctival Injection",
    question: "Are you experiencing any eye redness?",
    options: ["Yes", "No"],
    value: "Yes"
  },
  {
    component: "Caruncular Inflammation",
    question: "Are you experiencing redness and swelling of the fleshy tissue at the inner corner of your eye?",
    options: ["Yes", "No"],
    value: "Yes"
  },
  {
    component: "Corrected Vision Over Three Months",
    question: "Over the last three months, do you believe that your corrected vision in either eye has worsened?",
    options: ["Yes", "No"],
    value: "Yes"
  },
  {
    component: "Bulging Over Three Months",
    question: "Over the last three months, do you believe that the bulging in either of your eyes has worsened significantly?",
    options: ["Yes", "No"],
    value: "Yes"
  },
  {
    component: "Eye Movement/Double Vision Over Three Months",
    question: "Over the last three months, do you believe that the restriction of your eye movement and/or double vision has become significantly worse?",
    options: ["Yes", "No"],
    value: "Yes"
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