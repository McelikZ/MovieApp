import { StyleSheet } from "react-native";
import { colors, fonts, radius, spacing } from "../../theme";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'black',
    paddingBottom:75,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'space-between',
    width:'100%',
    paddingHorizontal:10,
  },

  contentContainer: {
    flex: 5,
    justifyContent: "center",
    alignContent: "center",
  },
});
