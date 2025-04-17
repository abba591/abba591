import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet, Alert } from "react-native";
import axios from "axios";

export default function WithdrawForm({ usd, naira }) {
  const [account, setAccount] = useState("");
    const [bank, setBank] = useState("");
      const [currency, setCurrency] = useState("naira");

        const handleSubmit = async () => {
            const amount = currency === "naira" ? naira : usd;

                try {
                      await axios.post("https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTY4MDYzNjA0M2Q1MjY1NTUzMTUxMzQi_pc", {
                              account,
                                      bank,
                                              currency,
                                                      amount,
                                                              status: "Pending",
                                                                    });
                                                                          Alert.alert("Request Submitted!", "We'll process your withdrawal soon.");
                                                                              } catch (error) {
                                                                                    console.error(error);
                                                                                          Alert.alert("Error", "Failed to submit request.");
                                                                                              }
                                                                                                };

                                                                                                  return (
                                                                                                      <View style={styles.form}>
                                                                                                            <Text>Account Number:</Text>
                                                                                                                  <TextInput value={account} onChangeText={setAccount} style={styles.input} />
                                                                                                                        <Text>Bank Name:</Text>
                                                                                                                              <TextInput value={bank} onChangeText={setBank} style={styles.input} />
                                                                                                                                    <Text>Currency: (naira or usd)</Text>
                                                                                                                                          <TextInput value={currency} onChangeText={setCurrency} style={styles.input} />
                                                                                                                                                <Button title="Withdraw" onPress={handleSubmit} />
                                                                                                                                                    </View>
                                                                                                                                                      );
                                                                                                                                                      }

                                                                                                                                                      const styles = StyleSheet.create({
                                                                                                                                                        form: { padding: 20 },
                                                                                                                                                          input: { borderWidth: 1, marginVertical: 10, padding: 8 },
                                                                                                                                                          });