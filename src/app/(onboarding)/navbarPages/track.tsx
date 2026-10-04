import { Pressable, Text, View } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function IndexScreen() {
    return(
        <View className="flex-1 bg-white items-center justify-center">
            <Text className="mt-3 text-center text-[13px] font-medium tracking-[5px] text-[#58708C]">
                track
            </Text>
        </View>
    );
}