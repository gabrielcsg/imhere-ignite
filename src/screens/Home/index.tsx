import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { styles } from "./styles";

import { Participant } from "../../components/Participant";

export function Home() {
  const participants = [
    "Gabriel",
    "Samara",
    "Lucky",
    "Layla",
    "Lupita",
    "Leona",
    "jose",
    "mayke",
    "teste",
  ];

  function handleParticipantAdd() {
    console.log("adicionar");
  }

  function handleParticipantRemove(name: string) {
    console.log("remove", name);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 24 de março de 2023.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((participant) => (
          <Participant
            key={participant}
            name={participant}
            onRemove={handleParticipantRemove}
          />
        ))}
      </ScrollView>
    </View>
  );
}
