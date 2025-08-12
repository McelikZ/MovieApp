import { StyleSheet } from "react-native";
import { colors, spacing, fonts } from "../../theme/index";

export default StyleSheet.create({
  indicatorContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 9999,
  },

  indicatorTextStyle: {
    marginBottom: 10,
    fontSize: 25,
    color: "white",
  },
});
