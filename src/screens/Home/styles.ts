import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#131016",
    flex: 1,
    padding: 24,
  },
  eventName: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "700",
    marginTop: 48,
  },
  eventDate: {
    color: "#6B6B6B",
    fontSize: 16,
  },
  form: {
    flexDirection: "row",
    marginBottom: 42,
    marginTop: 36,
    width: "100%",
  },
  input: {
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    color: "#FFF",
    flex: 1,
    fontSize: 16,
    height: 56,
    padding: 16,
    marginRight: 12,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#31CF67",
    borderRadius: 5,
    justifyContent: "center",
    height: 56,
    width: 56,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },
});
