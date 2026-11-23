import { ScrollView, StyleSheet } from "react-native";
import ScreenContainer from "@/components/ui/screen-container";
import SectionHeader from "@/components/ui/section-header";
import { theme } from "@/constants/theme";
import TrackCard from "@/components/track/track-card";

export default function LearnScreen() {
  return (
    <ScreenContainer>
      <ScrollView contentContainerStyle={styles.container}>
        <SectionHeader title="Track" BackButton />
        <TrackCard
          title="CAS Assessments"
          description="Review/Take a CAS Assessment"
          icon="TrackTab"
          route="/track/castest"
        />
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: theme.spacing.md,
    gap: theme.spacing.sm,
  },
});