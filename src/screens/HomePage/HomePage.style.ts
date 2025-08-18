import { StyleSheet } from "react-native";
import { colors, fonts, radius, spacing } from "../../theme";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'black',
    
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'space-between',
    paddingHorizontal:10,
    width:'100%',
  },

  contentContainer: {
    flex: 5,
    justifyContent: "center",
    alignContent: "center",
  },
  
});
