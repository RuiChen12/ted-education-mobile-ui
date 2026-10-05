import { Pressable, Text, View } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function TreatmentScreen() {
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
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Learn"
                className=" mt-2 h-[100px] w-[100%] flex-row items-center justify-center rounded-2xl bg-[#CFB990] active:opacity-80"
                style={{
                  backgroundColor: '#D8E0E4' 
                }}
                onPress={() => router.push('/navbarPages/learn')}
              >
                <View className="w-full flex-row items-center justify-between px-4">
                  <MaterialCommunityIcons 
                    name="book"
                    size={24}
                    color={'#3F6F86'}
                  />
                  <View className="flex-col justify-center ml-5 flex-1">
                    <Text
                      className="text-[25px] font-light"
                      style={{ 
                        fontFamily: 'Georgia',
                        fontWeight: '300',
                        color: '#1F2933',
                      }}
                    >
                      Learn
                    </Text>
                    <Text
                      className="text-[16px] justify-center"
                      style={{
                        fontFamily: 'Georgia',
                        fontWeight: '200',
                        color: '#618FA7',
                      }}
                    >
                      Helpful education & resources to help you understand TED.
                    </Text>
                  </View>
                  <Text className="text-[25px] text-[#17395D]">→</Text>
                </View>
              </Pressable>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Track"
                className=" mt-2 h-[100px] w-[100%] flex-row items-center justify-center rounded-2xl bg-[#CFB990] active:opacity-80"
                style={{
                  backgroundColor: '#D8E0E4' 
                }}
                onPress={() => router.push('/navbarPages/track')}
              >
                <View className="w-full flex-row items-center justify-between px-4">
                  <MaterialCommunityIcons 
                    name="chart-bar"
                    size={24}
                    color={'#3F6F86'}
                  />
                  <View className="flex-col justify-center ml-5 flex-1">
                    <Text
                      className="text-[25px] font-light"
                      style={{ 
                        fontFamily: 'Georgia',
                        fontWeight: '300',
                        color: '#1F2933',
                      }}
                    >
                      Track
                    </Text>
                    <Text
                      className="text-[16px] justify-center"
                      style={{
                        fontFamily: 'Georgia',
                        fontWeight: '200',
                        color: '#618FA7',
                      }}
                    >
                      Track symptoms, CAS assessments and photos.
                    </Text>
                  </View>
                  <Text className="text-[25px] text-[#17395D]">→</Text>
                </View>
              </Pressable>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Treatment"
                className=" mt-2 h-[100px] w-[100%] flex-row items-center justify-center rounded-2xl bg-[#CFB990] active:opacity-80"
                style={{
                  backgroundColor: '#D8E0E4' 
                }}
                onPress={() => router.push('/navbarPages/health')}
              >
                <View className="w-full flex-row items-center justify-between px-4">
                  <MaterialCommunityIcons 
                    name="clipboard-plus"
                    size={24}
                    color={'#3F6F86'}
                  />
                  <View className="flex-col justify-center ml-5 flex-1">
                    <Text
                      className="text-[25px] font-light"
                      style={{ 
                        fontFamily: 'Georgia',
                        fontWeight: '300',
                        color: '#1F2933',
                      }}
                    >
                      My Health
                    </Text>
                    <Text
                      className="text-[16px] justify-center"
                      style={{
                        fontFamily: 'Georgia',
                        fontWeight: '200',
                        color: '#618FA7',
                      }}
                    >
                      Organize labs, medications, imaging, treatment history, and health records.
                    </Text>
                  </View>
                  <Text className="text-[25px] text-[#17395D]">→</Text>
                </View>
              </Pressable>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Treatment"
                className=" mt-2 h-[100px] w-[100%] flex-row items-center justify-center rounded-2xl bg-[#CFB990] active:opacity-80"
                style={{
                  backgroundColor: '#D8E0E4' 
                }}
                onPress={() => router.push('/(onboarding)/treatment')}
              >
                <View className="w-full flex-row items-center justify-between px-4">
                  <MaterialCommunityIcons 
                    name="pill"
                    size={24}
                    color={'#3F6F86'}
                  />
                  <View className="flex-col justify-center ml-5 flex-1">
                    <Text
                      className="text-[25px] font-light"
                      style={{ 
                        fontFamily: 'Georgia',
                        fontWeight: '300',
                        color: '#1F2933',
                      }}
                    >
                      Treatment
                    </Text>
                    <Text
                      className="text-[16px] justify-center"
                      style={{
                        fontFamily: 'Georgia',
                        fontWeight: '200',
                        color: '#618FA7',
                      }}
                    >
                      Find available TED treatment options.
                    </Text>
                  </View>
                  <Text className="text-[25px] text-[#17395D]">→</Text>
                </View>
              </Pressable>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Share"
                className=" mt-2 h-[100px] w-[100%] flex-row items-center justify-center rounded-2xl bg-[#CFB990] active:opacity-80"
                style={{
                  backgroundColor: '#D8E0E4' 
                }}
                onPress={() => router.push('/(onboarding)/share')}
              >
                <View className="w-full flex-row items-center justify-between px-4">
                  <MaterialCommunityIcons 
                    name="share-variant"
                    size={24}
                    color={'#3F6F86'}
                  />
                  <View className="flex-col justify-center ml-5 flex-1">
                    <Text
                      className="text-[25px] font-light"
                      style={{ 
                        fontFamily: 'Georgia',
                        fontWeight: '300',
                        color: '#1F2933',
                      }}
                    >
                      Share With My Doctor
                    </Text>
                    <Text
                      className="text-[16px] justify-center"
                      style={{
                        fontFamily: 'Georgia',
                        fontWeight: '200',
                        color: '#618FA7',
                      }}
                    >
                      Prepare health information to share with your doctor.
                    </Text>
                  </View>
                  <Text className="text-[25px] text-[#17395D]">→</Text>
                </View>
              </Pressable>
            </View>
          </SafeAreaView>
        </View>
      </View>
    </View>
  );
}