import { StyleSheet, View, ScrollView } from 'react-native';
import { AppText as Text } from '../../components/ui/AppText';
import TrackCard from '@/components/track/TrackCard';
import DisclaimerCard from '@/components/track/DisclaimerCard';
import SectionHeader from '@/components/ui/section-header';
import ScreenContainer from '@/components/ui/screen-container';
import { theme } from '@/constants/theme';

export default function TrackScreen() {
  return (
    <View style={styles.screen}>
      <ScreenContainer>
        <ScrollView contentContainerStyle={styles.container}>
          <SectionHeader title="Track" BackButton />

          <View style={styles.content}>
            <Text className="text-left text-[18px] leading-[25px] text-[#618FA7]"
              style={{
                fontFamily: 'Georgia',
                fontWeight: '200',
              }}
            >
              Take CAS assessments and standardized pictures for tracking purposes.
            </Text>
            <TrackCard
              icon="Test"
              name="CAS Assessment"
              accessibilityLabel="cas"
              description="Take CAS assessments on TED-related symptoms."
              link="/track/assessment/casland"
            />
            <TrackCard
              icon="Camera"
              name="Photography"
              accessibilityLabel="Track"
              description="Take guided photos for documentation."
              link="/track/imaging"
            />
            <TrackCard
              icon="Results"
              name="View Results"
              accessibilityLabel="My Health"
              description="View CAS assessment results for tracking."
              link="/track/review"
            />
            <DisclaimerCard
              name="Disclaimer:"
              accessibilityLabel="Disclaimer"
              description="This section is not meant to be a replacement for clinicians. Results and photographs should be used for discussion with clinicians and physicians."
            />
          </View>
        </ScrollView>
      </ScreenContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    paddingBottom: theme.spacing.md,
    gap: theme.spacing.sm,
  },
  content: {
    gap: theme.spacing.sm,
  },
  description: {
    ...theme.typography.body,
    color: theme.colors.secondaryText,
  },
});