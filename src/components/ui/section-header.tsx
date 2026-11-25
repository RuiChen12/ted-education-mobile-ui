import {
  View,
  Pressable,
  StyleSheet,
} from "react-native";
import type { ReactNode } from "react";
import { router, type Href } from "expo-router";
import AppIcon from "@/components/ui/app-icon";
import { theme } from "@/constants/theme";
import { AppText } from '@/components/ui/AppText';
import { useAccessibility } from '@/contexts/AccessibilityContext';
import { useLanguage } from '@/i18n/LanguageContext';

type SectionHeaderProps = {
  title: string;
  BackButton?: boolean;
  onBackPress?: () => void;
  backRoute?: Href;
  rightAction?: ReactNode;
};

export default function SectionHeader({
  title,
  BackButton = false,
  onBackPress,
  backRoute,
  rightAction,
}: SectionHeaderProps) {
  const { highContrast } = useAccessibility();
  const { t } = useLanguage();

  return (
    <View style={styles.container}>
      {BackButton && (
        <Pressable
          onPress={
            onBackPress ??
            (() =>
              backRoute
                ? router.push(backRoute)
                : router.back())
          }
          accessibilityRole="button"
          accessibilityLabel={t('Go back')}
          style={styles.backButton}
        >
          <AppIcon
            icon="back"
            size={25}
            color={
              highContrast
                ? '#141414'
                : theme.colors.darkBlue
            }
            strokeWidth={2}
          />
        </Pressable>
      )}

      <AppText
        accessibilityRole="header"
        style={styles.title}
      >
        {t(title)}
      </AppText>

      {rightAction ? (
        <View style={styles.rightAction}>{rightAction}</View>
      ) : BackButton ? (
        <View
          style={styles.spacer}
          accessibilityElementsHidden
          importantForAccessibility="no"
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },

  backButton: {
    width: 48,
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightAction: {
    position: "absolute",
    right: 0,
    top: 0,
    minWidth: 44,
    minHeight: 44,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },

  spacer: {
    width: 48,
  },

  title: {
    ...theme.typography.title,
    color: theme.colors.primaryText,
    textAlign: 'center',
    flex: 1,
    minWidth: 0,
  },
});
