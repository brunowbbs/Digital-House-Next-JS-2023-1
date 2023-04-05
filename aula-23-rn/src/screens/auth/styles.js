import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2D2D2D",
  },
  cardForm: {
    backgroundColor: "#FFF",
    width: "75%",
    paddingHorizontal: 10,
    paddingVertical: 30,
    borderRadius: 10,
  },
  textForm: {
    marginBottom: 20,
    fontFamily: "Poppins_300Light",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#000",
    marginBottom: 20,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontFamily: "Poppins_300Light",
  },

  button: {
    backgroundColor: "#525252",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textButton: {
    color: "#FFF",
    fontFamily: "Poppins_300Light",
  },
});

export default styles;
