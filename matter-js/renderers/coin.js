import React from "react";
import { View, Animated } from "react-native";

export default function Coin({ body, size }) {
  const x = body.position.x - size[0] / 2;
    const y = body.position.y - size[1] / 2;

      return (
          <View style={{
                position: "absolute",
                      left: x,
                            top: y,
                                  width: size[0],
                                        height: size[1],
                                              backgroundColor: "gold",
                                                    borderRadius: size[0] / 2,
                                                          borderWidth: 2,
                                                                borderColor: "#FFD700"
                                                                    }} />
                                                                      );
                                                                      }