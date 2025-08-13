import { StyleSheet } from "react-native";
import { colors, fonts, radius, spacing } from "../../theme/index";

export default StyleSheet.create({
  defaultButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: spacing.small,
    paddingHorizontal: spacing.medium,
    width: 300,
    backgroundColor: colors.primary.dark,
    borderRadius: radius.medium,
    margin: spacing.small,
  },
  defaultButtonText: {
    color: colors.primary.dark,
    fontSize: fonts.sizes.medium,
    fontWeight: fonts.weights.bold 
  },
  defaultButtonImageStyle: {
    width: spacing.xxlarge,
    height: spacing.xxlarge,
  },
});
