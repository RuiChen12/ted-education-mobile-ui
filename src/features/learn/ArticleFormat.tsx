import { Text, View, ScrollView, TextInput, Pressable } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState, useMemo, useRef, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppIcon from '@/components/ui/app-icon';
import { TextData } from '@/features/learn/data/ArticleText';
import NextCard from '@/features/learn/nextcard';
import { Articles } from './data/Articles';
import KeywordTabs from './keywordtabs';

type ArticleProps = {
    article: TextData;
};

export default function ArticleFormat({ article }: ArticleProps) {
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [submittedQuery, setSubmittedQuery] = useState('');
    const words = submittedQuery.toLowerCase().split(" ").filter(Boolean);
    const matching = article.paragraphs.filter((paragraph) => {
        const pwords = paragraph.toLowerCase().split(" ");
        return words.every((word) => pwords.some((pword_ => pword_.startsWith(word))));
    });
    const nextkey = article.key + 1;
    const nextarticle = Articles.find((article) => article.key === nextkey);
    return (
        <View className="flex-1 bg-white">
            <StatusBar style="dark" />
            <View className="flex-1 items-center">
                <View className="w-full max-w-[430px] flex-1 overflow-hidden bg-white">
                    <SafeAreaView className="flex-1">
                        <ScrollView>
                            <View className="items-center px-7 pt-3">
                                <View className="w-full flex-row items-center justify-between">
                                    <Pressable
                                        accessibilityRole="button"
                                        accessibilityLabel="Back"
                                        onPress={() => router.back()}
                                        className="h-10 w-10 items-center justify-center"
                                    >
                                        <AppIcon
                                            icon='back'
                                            color='#17395D'
                                            size={30}
                                            strokeWidth={2}
                                        />
                                    </Pressable>
                                    {searchOpen ? (
                                        <View className="ml-5 flex-1 flex-row items-center rounded-lg border border-[#17395D]">
                                            <TextInput
                                                accessibilityLabel="Find in article"
                                                placeholder="Press Enter To Search"
                                                placeholderTextColor="#687887"
                                                autoCapitalize="none"
                                                autoCorrect={false}
                                                value={searchQuery}
                                                onChangeText={(text =>
                                                    setSearchQuery(text)
                                                )}
                                            onSubmitEditing={() => setSubmittedQuery(searchQuery.trim().toLowerCase())}

                                            style={{
                                                flex: 1,
                                                minWidth: 0,
                                                paddingHorizontal: 12,
                                                paddingVertical: 9,
                                                color: '#17395D',
                                            }}
                                            />
                                            <Pressable
                                                accessibilityRole="button"
                                                accessibilityLabel="Close search"
                                                onPress={() => {
                                                    setSearchOpen(false);
                                                    setSearchQuery('');
                                                }}
                                                className="h-10 w-10 items-center justify-center"
                                            >
                                                <AppIcon
                                                    icon='Close'
                                                    color='#17395D'
                                                    size={20}
                                                    strokeWidth={2}
                                                />
                                            </Pressable>
                                        </View>
                                    ) : (
                                        <Pressable
                                            accessibilityRole="button"
                                            accessibilityLabel="Find in article"
                                            onPress={() => setSearchOpen(true)}
                                            className="ml-auto h-10 w-10 items-center justify-center"
                                        >
                                            <AppIcon
                                                icon='search'
                                                size={25}
                                                color='#17395D'
                                                strokeWidth={2}
                                            />
                                        </Pressable>
                                    )}
                                </View>
                            </View>
                            <View className="w-full px-7 mt-3">
                                <Text
                                    className="mb-5 text-center text-[25px]"
                                    style={{
                                        fontFamily: 'Georgia',
                                        fontWeight: '500',
                                        color: '#17395D',
                                        textDecorationLine: 'underline',
                                    }}
                                >
                                    {article.header}
                                </Text>
                                <View className="flex-row items-center">
                                    <Text
                                        className="text-left text-[20px]"
                                        style={{
                                            fontFamily: 'Georgia',
                                            fontWeight: '300',
                                            color: '#17395D',
                                        }}
                                    >
                                        Tags:
                                    </Text>
                                    <KeywordTabs keywords={article.keywords} />
                                </View>
                                {article.paragraphs.map((paragraph, id) => (
                                    <Text
                                        key={id}
                                        className="flex-1 text-[15px] mt-5"
                                        style={{
                                            fontFamily: 'Georgia',
                                            fontWeight: '300',
                                            color: '#17395D',
                                        }}>
                                        {paragraph}
                                    </Text>
                                ))}
                                <View className="mb-10"></View>
                                {nextkey !== 6 && nextarticle && (
                                    <NextCard
                                        key={nextarticle.key}
                                        thumbnail={nextarticle.thumbnail}
                                        name={nextarticle.name}
                                        accessibilityLabel={nextarticle.accessibilityLabel}
                                        link={nextarticle.link}
                                    />
                                )
                                }
                            </View>
                        </ScrollView>
                    </SafeAreaView>
                </View>
            </View>
        </View >
    );
}