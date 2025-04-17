import React from "react";
import { View } from "react-native";

export default function Player({ body, size }) {
  const x = body.position.x - size[0] / 2;
    const y = body.position.y - size[1] / 2;

      return (
          <View style={{
                position: "absolute",
                      left: x,
                            top: y,
                                  width: size[0],
                                        height: size[1],
                                              backgroundColor: "blue",
                                                    borderRadius: 10
                                                        }} />
                                                          );
                                                          }