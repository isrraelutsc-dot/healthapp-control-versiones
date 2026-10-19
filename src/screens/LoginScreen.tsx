import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";

export default function LoginScreen({ onLogin }: { onLogin: (u: string, p: string) => void }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  return (
    <View>
      <Text>Iniciar sesión</Text>
      <TextInput placeholder="Usuario" value={user} onChangeText={setUser} />
      <TextInput placeholder="Contraseña" value={pass} onChangeText={setPass} secureTextEntry />
      <Button title="Entrar" onPress={() => onLogin(user, pass)} />
    </View>
  );
}
