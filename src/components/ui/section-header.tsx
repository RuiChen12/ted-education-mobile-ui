import { View, Text, Pressable, StyleSheet } from "react-native";
import type { ReactNode } from "react";
import { router, type Href } from "expo-router";
import AppIcon from "@/components/ui/app-icon";
import { theme } from "@/constants/theme";

type SectionHeaderProps = {
  title: string;
  BackButton?: boolean;
  onBackPress?: () => void;
  backRoute?: Href;
  rightAction?: ReactNode;
};
// Optional backbutton for navigation, with
// customizable behavior. If no onBackPress is provided, it will navigate
// to the backRoute if specified, or go back in the navigation stack.
export default function SectionHeader({
  title,
  BackButton = false,
  onBackPress,
  backRoute,
  rightAction,
}: SectionHeaderProps) {
  return (
    <View style={styles.container}>
      {BackButton && (
        <Pressable
          onPress={
            onBackPress ??
            (() => (backRoute ? router.push(backRoute) : router.back()))
          }
          accessibilityRole="button"
          accessibilityLabel="Go back"
          hitSlop={8}
          style={styles.backButton}
        >
          <AppIcon
            icon="back"
            size={24}
            color={theme.colors.darkBlue}
            strokeWidth={2}
          />
        </Pressable>
      )}

      <Text style={styles.title}>{title}</Text>

      {rightAction && (
        <View style={styles.rightAction}>{rightAction}</View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 44,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  backButton: {
    position: "absolute",
    left: 0,
    top: 0,
    minWidth: 44,
    minHeight: 44,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
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
  title: {
    ...theme.typography.title,
    color: theme.colors.primaryText,
    textAlign: "center",
    flexShrink: 1,
  },
});
