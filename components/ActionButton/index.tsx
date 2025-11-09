import { Pressable, StyleSheet, Text } from "react-native";

const BUTTON_BG_COLORS = Object.freeze({
  ["primary"]: "#007AFF",
  ["secondary"]: "#f3ba57ff",
  ["alternative"]: "#ef4f33ff",
  ["disabled"]: "#cec7c7ff",
});

type VariantType = "primary" | "secondary" | "alternative" | "disabled";

const getBackgroundColor = (value: VariantType) => {
  return {
    backgroundColor: BUTTON_BG_COLORS[value],
  };
};

const getTextColor = (isDisabled: boolean) => {
  return {
    color: isDisabled ? "grey" : "#fff",
  };
};

export default function ActionButton({
  children,
  isDisabled = false,
  onPress,
  variant = "primary",
}: {
  children: string;
  isDisabled?: boolean;
  onPress: () => void;
  variant?: VariantType;
}) {
  return (
    <Pressable
      style={[
        styles.button,
        getBackgroundColor(isDisabled ? "disabled" : variant),
      ]}
      onPress={onPress}
      disabled={isDisabled}
    >
      <Text style={[styles.text, getTextColor(isDisabled)]}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
