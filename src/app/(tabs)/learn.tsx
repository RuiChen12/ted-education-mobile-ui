import { View, ScrollView, Pressable, StyleSheet } from 'react-native';
import { useLanguage as useLocale10 } from '@/i18n/LanguageContext';
import { router } from 'expo-router';
import LearnCard from '@/features/learn/learncard';
import MainCard from '@/features/learn/maincard';
import AppIcon from '@/components/ui/app-icon';
import { Articles } from '@/features/learn/data/Articles';
import SectionHeader from '@/components/ui/section-header';
import ScreenContainer from '@/components/ui/screen-container';
import { theme } from '@/constants/theme';

export default function LearnScreen() {
  const { tr: tr10 } = useLocale10();

    return (
        <ScreenContainer>
            <ScrollView contentContainerStyle={styles.container}>
                <SectionHeader
                    title="Learn"
                    BackButton
                    rightAction={
                        <Pressable
                            accessibilityRole="button"
                            accessibilityLabel={tr10("Search")}
                            onPress={() => router.push('/learnsearch')}
                            style={styles.searchButton}
                        >
                            <AppIcon
                                icon='search'
                                size={25}
                                color='#17395D'
                                strokeWidth={2}
                            />
                        </Pressable>
                    }
                />
                <View style={styles.content}>
                    <MainCard
                        background={require('../../../assets/images/maincard-image.jpg')}
                        name={"Understanding\nThyroid Eye Disease"}
                        accessibilityLabel={tr10("Understanding Thyroid Eye Disease")}
                        link="/whatisted"
                    />
                    {Articles.map((article) => (
                        <LearnCard
                            key={article.key}
                            thumbnail={article.thumbnail}
                            name={article.name}
                            accessibilityLabel={article.accessibilityLabel}
                            description={article.description}
                            link={article.link}
                        />
                    ))}
                </View>
            </ScrollView>
        </ScreenContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: theme.spacing.md,
        gap: theme.spacing.sm,
    },
    searchButton: {
        width: 44,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        gap: theme.spacing.sm,
    },
});
