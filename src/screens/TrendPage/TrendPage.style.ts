import { StyleSheet, Dimensions } from "react-native";
import { colors, fonts, radius, spacing } from "../../theme";

const { height } = Dimensions.get("window"); 

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "black",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    width: "100%",
    marginTop:30,
  },
  contentContainer: {
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "black",
  },
});
