import { Link, router } from "expo-router";
import { Text, View, Image, TextInput, Pressable } from "react-native";

import { Colors } from "./Colors";
import { useState } from "react";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function register() {
    alert(`Creating account with ${email} and ${password}`);
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.blue,
      }}
    >
      <Image
        source={require("@/assets/images/atlas-logo.png")}
        style={{ width: 200, height: 200, resizeMode: "contain" }}
      />
      <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
        Register
      </Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        placeholderTextColor="#CCCCCC"
        style={{
          width: "80%",
          padding: 10,
          borderWidth: 1,
          borderColor: Colors.teal,
          borderRadius: 5,
          marginTop: 10,
          marginBottom: 5,
          color: "white",
        }}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        placeholderTextColor="#CCCCCC"
        style={{
          width: "80%",
          padding: 10,
          borderWidth: 1,
          borderColor: Colors.teal,
          borderRadius: 5,
          marginTop: 5,
          marginBottom: 10,
          color: "white",
        }}
        secureTextEntry
      />
      <Pressable
        onPress={register}
        style={{
          width: "80%",
          padding: 10,
          backgroundColor: Colors.teal,
          borderRadius: 5,
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Create Account</Text>
      </Pressable>
      <Link href="/login" replace style={{ marginTop: 10 }}>
        <Text style={{ color: "white" }}>Login to existing account</Text>
      </Link>
    </View>
  );
}
