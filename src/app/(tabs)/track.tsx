import { View, ScrollView } from 'react-native';
import { AppText as Text } from '../../components/ui/AppText';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeFeatureCard from '../../components/HomeFeatureCard';
import TrackCard from '@/components/track/TrackCard';
import DisclaimerCard from '@/components/track/DisclaimerCard';

export default function TrackScreen() {
return (
  <View className="flex-1 bg-white">
    <StatusBar style="dark" />
    <View className="flex-1 items-center">
      <View className="w-full max-w-[430px] flex-1 overflow-hidden bg-white">
        <SafeAreaView className="flex-1">
          <ScrollView>
            <View className="items-start px-7 pt-3">
              <Text className="mt-10 text-center text-[20px] leading-[50px] text-[#17395D]"
                style={{
                  fontFamily: 'Georgia',
                  fontWeight: '500',
                }}
              >
                Welcome to the Tracking Section
              </Text>
              <Text className="text-left text-[18px] leading-[25px] text-[#618FA7] mt-2 mb-2"
                style={{
                  fontFamily: 'Georgia',
                  fontWeight: '200',
                }}
              >
                Here, you can take and record CAS assessments for tracking of symptoms. You can also take photographs of your eyes for tracking and documentation purposes.
              </Text>
              <TrackCard
                icon="Test"
                name="CAS Assessment"
                accessibilityLabel="cas"
                description="Take CAS assessments on TED-related symptoms."
                link="/track/castest"
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
        </SafeAreaView>
      </View>
    </View>
  </View>
);
}