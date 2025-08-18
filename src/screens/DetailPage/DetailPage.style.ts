import { StyleSheet } from "react-native";
import { colors, fonts, radius, spacing } from "../../theme";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    width: "100%",
  },

  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    width: "100%",
    marginTop: 0,
  },
  movieActionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
  actionButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  movieInfoContainer: {
    flex: 3,
    width: "100%",
    paddingHorizontal: 15,
    alignItems: "flex-start",
  },

  footerContainer: {
    flex: 1,
    width: "100%",
    alignItems: "flex-start",
  },
});
