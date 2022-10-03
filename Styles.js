import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    top: 50,
    padding: 10,
  },

  header: {
    textAlign: "center",
    width: "100%",
    height: 100,
    fontSize: 50,
    fontweight: "bold",
    color: "#71b39d",
  },

  titles: {
    textAlign: "left",
    fontSize: 20,
    color: "#ffa500",
  },
  inputs: {
    height: 50,
    backgroundColor: "lightgrey",
    borderRadius: 6,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    marginBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 30,
  },
  radioButton: {
    height: 30,
    width: 30,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center"
  },

  selectedButton: {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: "black",
  },

  unselectedButton: {
    backgroundColor: "white",
  },
  Dropdown: {
    backgroundColor: "lightgrey",
    padding: 8,
    borderRadius: 6,
    minHeight: 42,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",


  },
  DropdownList: {
    backgroundColor: "lightgrey",
    borderRadius: 6,
    padding: 8,
  },
  Button: {
    borderRadius: 6,

  },
  Divider: {
    height: 30,
    width:200,
    margin:10,
  },
  green : {
    fontSize: 40,
    color: "green",
  },
  yellow : {
    fontSize: 40,
    color: "yellow",
  },
  red : {
    fontSize: 40,
    color: "red",
  }
});
