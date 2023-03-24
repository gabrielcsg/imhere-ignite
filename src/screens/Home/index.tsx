import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 24 de março de 2023.</Text>
    </View>
  );
};

export { Home };
