import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import RunnerGame from "./GameEngine";
import WithdrawForm from "./WithdrawForm";

const COIN_VALUE_USD = 1000;
const USD_TO_NAIRA = 1300; // Replace with real exchange rate

export default function HomeScreen() {
  const [coins, setCoins] = useState(0);
    const [gameOver, setGameOver] = useState(false);

      const totalUSD = coins * COIN_VALUE_USD;
        const totalNaira = totalUSD * USD_TO_NAIRA;

          return (
              <View style={{ flex: 1 }}>
                    {!gameOver ? (
                            <RunnerGame
                                      onEarn={setCoins}
                                                onGameOver={() => setGameOver(true)}
                                                        />
                                                              ) : (
                                                                      <View style={styles.container}>
                                                                                <Text style={styles.text}>Game Over</Text>
                                                                                          <Text style={styles.text}>Coins: {coins}</Text>
                                                                                                    <Text style={styles.text}>You earned: ${totalUSD}</Text>
                                                                                                              <Text style={styles.text}>In Naira: ₦{totalNaira}</Text>
                                                                                                                        <WithdrawForm usd={totalUSD} naira={totalNaira} />
                                                                                                                                </View>
                                                                                                                                      )}
                                                                                                                                          </View>
                                                                                                                                            );
                                                                                                                                            }

                                                                                                                                            const styles = StyleSheet.create({
                                                                                                                                              container: { flex: 1, justifyContent: "center", alignItems: "center" },
                                                                                                                                                text: { fontSize: 22, margin: 10 },
                                                                                                                                                });