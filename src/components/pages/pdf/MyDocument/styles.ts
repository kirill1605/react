import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "white",
    color: "black",
  },
  section: {
    margin: 15,
  },
  picture: {
    margin: 15,
    width: "50%",
    height: "50%",
    objectFit: "cover",
  },
});
