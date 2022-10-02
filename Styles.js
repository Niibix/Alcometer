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
    backgroundColor: "grey",
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
    borderRadius:6,
    
  }
});
