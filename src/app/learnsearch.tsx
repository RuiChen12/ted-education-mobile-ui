import { AccessibleInput } from '@/components/ui/AccessibleInput';
import { useLanguage as useLocale10 } from '@/i18n/LanguageContext';
import '../../global.css';
import { useState } from 'react';
import { View, ScrollView, Pressable, Text, StyleSheet } from 'react-native';
import LearnCard from '@/features/learn/learncard';
import { router } from 'expo-router';
import AppIcon from '@/components/ui/app-icon';
import { Articles } from '@/features/learn/data/Articles';
import { ArticleText } from '@/features/learn/data/ArticleText';
import { theme } from '@/constants/theme';
import ScreenContainer from '@/components/ui/screen-container';

export default function LearnSearchScreen() {
  const { tr: tr10 } = useLocale10();

  const [searchQuery, setSearchQuery] = useState('');
  const [submittedQuery, setSubmittedQuery] = useState('');
  const ignorewords = ['this', 'of', 'it', 'the', 'and', 'an', 'your', 'can', 'is', 'in', 'or', 'a', 'as', 'at', 'for', 'to', 'by', 'be', 'are', 'you'];
  const words = submittedQuery.toLowerCase().split(/\s+/).filter((word) => Boolean(word) && !ignorewords.includes(word));
  const matching = Articles.filter((article) => {
    const articleText = ArticleText.find((text) => text.key === article.key);
    const searchtext = [article.name, article.description, ...article.tags, ...(articleText?.paragraphs ?? [])].join(' ').toLowerCase();
    return words.some((word) => searchtext.includes(word));
  });
  return (
    <ScreenContainer>
      <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                  <Pressable
                    accessibilityRole="button"
                    accessibilityLabel={tr10("Back")}
                    onPress={() => router.back()}
                    hitSlop={8}
                    style={styles.backButton}
                  >
                    <AppIcon
                      icon='back'
                      color={theme.colors.darkBlue}
                      size={24}
                      strokeWidth={2}
                    />
                  </Pressable>
                  <AccessibleInput labelKey="Search"
                    placeholder={tr10("Press Enter To Search")}
                    placeholderTextColor='#1F2933'
                    clearButtonMode="always"
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={searchQuery}
                    style={styles.searchInput}
                    onChangeText={(text) => {
                      setSearchQuery(text);
                      if (text === '') {
                        setSubmittedQuery("");
                      }
                    }}
                    onSubmitEditing={() => setSubmittedQuery(searchQuery.toLowerCase())}
                  />
                </View>
                <View className="w-full flex-row">
                  <View className="w-11" />
                  <View className="flex-1">
                    {submittedQuery.length > 0 && (
                      words.length > 0 && matching.length > 0
                        ? matching.map((article) => (
                          <LearnCard
                            key={article.key}
                            thumbnail={article.thumbnail}
                            name={article.name}
                            accessibilityLabel={article.accessibilityLabel}
                            description={article.description}
                            link={article.link}
                          />
                        )) : (
                          <View className="mt-2 items-center justify-center">
                            <Text
                              className="text-center text-[25px] font-medium"
                              style={{
                                color: 'red'
                              }}
                            >{tr10("No Results Found")} </Text>
                          </View>
                        ))}
                  </View>
                </View>
      </ScrollView>
    </ScreenContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingBottom: theme.spacing.md,
  },
  header: {
    minHeight: 44,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 0,
    top: 0,
    minWidth: 44,
    minHeight: 44,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  searchInput: {
    alignSelf: 'stretch',
    minHeight: 44,
    marginLeft: 56,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
  },
});
