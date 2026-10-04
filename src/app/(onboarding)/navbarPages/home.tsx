import { Pressable, Text, View } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LanguageScreen() {
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <View className="flex-1 items-center">
        <View className="w-full max-w-[430px] flex-1 overflow-hidden bg-white">
          <SafeAreaView className="flex-1">
            <View className="items-start px-7 pt-3">
              <Text className="mt-10 text-center text-[39px] leading-[50px] text-[#17395D]"
                style={{
                  fontFamily: 'Georgia',
                  fontWeight: '500',
                }}
              >
                Welcome
              </Text>
              <Text className="text-left text-[18px] leading-[25px] text-[#618FA7]"
                style={{
                  fontFamily: 'Georgia',
                  fontWeight: '200',
                }}
              >
                Learn. Track. Organize. Understand. {'\n'}Take control of your eye health.
              </Text>
            </View>
          </SafeAreaView>
        </View>
      </View>
    </View>
  );
}