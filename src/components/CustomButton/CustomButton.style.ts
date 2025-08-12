import { StyleSheet } from "react-native";

export default StyleSheet.create({
  defaultButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8, 
    paddingHorizontal: 20, 
    width: 300, 
    backgroundColor: "#007AFF",
    borderRadius: 8,
    margin: 5,
  },
  defaultButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  defaultButtonImageStyle: {
    width: 200,
    height: 200,
  },
});
