import { View, Text, StyleSheet, Pressable } from "react-native";
import { router, type Href } from "expo-router";
import AppCard from "@/components/ui/app-card";
import { theme } from "@/constants/theme";
import AppIcon, { type AppIconName } from "../ui/app-icon";

type TrackCardProps = {
  title: string;
  description: string;
  icon: AppIconName;
  route: Href;
};
export default function TrackCard({
  title,
  description,
  icon,
  route,
}: TrackCardProps) {
  return (
    <Pressable
      onPress={() => router.push(route)}
      accessibilityRole="button"
      accessibilityLabel={`${title}: ${description}`}
    >
      <AppCard style={styles.card}>
        <View style={styles.header}>
          <View style={styles.row}>
            <AppIcon
              icon={icon}
              size={28}
              color={theme.colors.darkBlue}
              strokeWidth={2}
            />
            <View style={styles.content}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.description}>{description}</Text>
            </View>
          </View>
        </View>
      </AppCard>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 0,
    backgroundColor: theme.colors.lightBlue,
    overflow: "hidden",
  },
  header: {
    padding: theme.spacing.md,
    backgroundColor: theme.colors.border,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.md,
  },
  content: {
    flex: 1,
    gap: theme.spacing.xs,
  },
  title: {
    ...theme.typography.heading,
    color: theme.colors.primaryText,
  },
  description: {
    ...theme.typography.subheading,
  },
});
