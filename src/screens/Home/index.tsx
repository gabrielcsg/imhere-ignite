import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
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
    if (participants.includes("Gabriel")) {
      Alert.alert(
        "Participante Existe",
        "Já existe um participante na lista com esse nome."
      );

      return;
    }

    console.log("adicionar");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remove", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Removido!"),
        style: "destructive",
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
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

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={handleParticipantRemove}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  );
}
