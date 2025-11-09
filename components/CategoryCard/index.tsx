import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function CategoryCard({
  title,
  isSelectable = false,
  onPress,
}: {
  title: string;
  isSelectable: boolean;
  onPress?: (arg: string) => void;
}) {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    console.log(`CategoryCard: ${title} isSelected:`, isSelected);
  }, [isSelected]);

  const onPressCard = () => {
    console.log("OnPressCard: (isSelectable)", isSelectable);

    if (isSelectable) {
      setIsSelected((prev) => !prev);
    }

    onPress && onPress(title);
  };

  return (
    <Pressable onPress={onPressCard}>
      <View
        style={{
          ...styles.card,
          ...(isSelected ? styles.selected : styles.initial),
        }}
      >
        <Text style={styles.cardText}>{title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f0f0f0",
    padding: 20,
    borderRadius: 10,

    alignItems: "center",
    justifyContent: "center",
  },
  cardText: {
    fontSize: 18,
    fontWeight: "500",
  },
  initial: {
    borderColor: "#f0f0f0",
    borderWidth: 2,
  },
  selected: {
    borderColor: "red",
    borderWidth: 2,
  },
});
