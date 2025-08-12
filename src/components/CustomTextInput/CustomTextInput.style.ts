import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "75%",
  },
  label: {
    fontSize: 14,
    color: "#333",
    marginBottom: 6,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    height: 56, 
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: "#4b3d2fff",
    paddingVertical: 4,
    paddingHorizontal: 4,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  eyeWrapper: {
    padding: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  eyeIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
});
