// GameEngine.js
import Matter from "matter-js";
import { GameEngine } from "react-native-game-engine";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function RunnerGame({ onGameOver, onEarn }) {
  const [coins, setCoins] = useState(0);

    const earnCoin = () => {
        const newCount = coins + 1;
            setCoins(newCount);
                onEarn(newCount);
                  };

                    const gameOver = () => {
                        onGameOver();
                          };

                            return (
                                <View style={{ flex: 1 }}>
                                      <GameEngine
                                              systems={[]}
                                                      entities={{}} // add your game entities (player, coins, obstacles)
                                                              running={true}
                                                                      style={styles.container}
                                                                            />
                                                                                  <View style={styles.overlay}>
                                                                                          <Text style={styles.text}>Coins: {coins}</Text>
                                                                                                  <TouchableOpacity style={styles.button} onPress={earnCoin}>
                                                                                                            <Text style={styles.buttonText}>Simulate Coin</Text>
                                                                                                                    </TouchableOpacity>
                                                                                                                            <TouchableOpacity style={styles.button} onPress={gameOver}>
                                                                                                                                      <Text style={styles.buttonText}>Game Over</Text>
                                                                                                                                              </TouchableOpacity>
                                                                                                                                                    </View>
                                                                                                                                                        </View>
                                                                                                                                                          );
                                                                                                                                                          }

                                                                                                                                                          const styles = StyleSheet.create({
                                                                                                                                                            container: { flex: 1, backgroundColor: "#000" },
                                                                                                                                                              overlay: {
                                                                                                                                                                  position: "absolute", top: 50, left: 0, right: 0, alignItems: "center"
                                                                                                                                                                    },
                                                                                                                                                                      text: { color: "#fff", fontSize: 24 },
                                                                                                                                                                        button: {
                                                                                                                                                                            marginTop: 10,
                                                                                                                                                                                backgroundColor: "#4CAF50",
                                                                                                                                                                                    padding: 10,
                                                                                                                                                                                        borderRadius: 5,
                                                                                                                                                                                          },
                                                                                                                                                                                            buttonText: { color: "#fff", fontSize: 18 },
                                                                                                                                                                                            });