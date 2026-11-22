import { Alert, Text, View, ScrollView, TextInput, Pressable } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState, type ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Linking from 'expo-linking';
import AppIcon from '@/components/ui/app-icon';
import { TextData } from '@/features/learn/data/ArticleText';
import NextCard from '@/features/learn/nextcard';
import { Articles } from './data/Articles';
import KeywordTabs from './keywordtabs';

const link_start = /(https?:\/\/[^\s]+)/gi;

type ArticleProps = {
    article: TextData;
};

export default function ArticleFormat({ article }: ArticleProps) {
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [submittedQuery, setSubmittedQuery] = useState('');
    const words = submittedQuery.toLowerCase().split(" ").filter(Boolean);
    const fulltext = article.paragraphs.join('\n \n');
    const hasMatches = words.some((word) => fulltext.toLowerCase().includes(word));
    const nextkey = article.key + 1;
    const nextarticle = Articles.find((article) => article.key === nextkey);
    const keywords = Articles.find((item) => item.key === article.key)?.tags ?? [];
    const findParagraph = (paragraph: string) => {
        if (words.length === 0) {
            return paragraph;
        }

        const lowerParagraph = paragraph.toLowerCase();
        const highlightedParts: ReactNode[] = [];
        let lastIndex = 0;
        let index = 0;

        while (index < paragraph.length) {
            const matchedWord = words
                .filter((word) => lowerParagraph.startsWith(word, index))
                .sort((left, right) => right.length - left.length)[0];

            if (!matchedWord) {
                index += 1;
                continue;
            }

            if (index > lastIndex) {
                highlightedParts.push(paragraph.slice(lastIndex, index));
            }

            highlightedParts.push(
                <Text
                    key={`highlight-${index}`}
                    style={{
                        backgroundColor: '#FDE68A',
                        color: '#17395D',
                        fontWeight: '700',
                    }}
                >
                    {paragraph.slice(index, index + matchedWord.length)}
                </Text>
            );

            index += matchedWord.length;
            lastIndex = index;
        }

        if (lastIndex < paragraph.length) {
            highlightedParts.push(paragraph.slice(lastIndex));
        }

        return highlightedParts.length > 0 ? highlightedParts : paragraph;
    };
    const renderParagraph = (text: string) =>
        text.split(link_start).map((part, index) => {
            const checkstart = part.toLowerCase();
            if (checkstart.startsWith('http://') || checkstart.startsWith('https://')) {
                return (
                    <Text
                        key={`link-${index}`}
                        accessibilityRole="link"
                        onPress={() => {
                            void Linking.openURL(part).catch((error: unknown) => {
                                Alert.alert(
                                    'Cannot open link.',
                                    error instanceof Error ? error.message : 'Please try again.'
                                );
                            });
                        }}
                        style={{
                            color: '#0066CC',
                            textDecorationLine: 'underline' 
                        }}
                    >
                        {findParagraph(part)}
                    </Text>
                );
            }

            return <Text key={`text-${index}`}>{findParagraph(part)}</Text>;
        });

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
                                                accessibilityLabel="Find"
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
                                                    setSubmittedQuery('');
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
                                {submittedQuery !== '' && !hasMatches && (
                                    <Text
                                        accessibilityRole="text"
                                        className="mt-2 text-center text-[25px]"
                                        style={{
                                            fontFamily: 'Georgia',
                                            fontWeight: '300',
                                            color: 'red',
                                        }}
                                    >
                                        No results found.
                                    </Text>
                                )}
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
                                    <KeywordTabs keywords={keywords} />
                                </View>
                                <Text
                                    className="text-[15px] mt-5"
                                    style={{
                                        fontFamily: 'Georgia',
                                        fontWeight: '300',
                                        color: '#17395D',
                                    }}>
                                    {renderParagraph(fulltext)}
                                </Text>
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