import { ScrollView, StyleSheet } from "react-native";
import ScreenContainer from "@/components/ui/screen-container";
import SectionHeader from "@/components/ui/section-header";
import { theme } from "@/constants/theme";

export default function LearnScreen() {
  return (
    <ScreenContainer>
      <ScrollView contentContainerStyle={styles.container}>
        <SectionHeader title="Track" BackButton />
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: theme.spacing.md,
  },
});