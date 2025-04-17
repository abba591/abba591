// entities.js
import Matter from "matter-js";
import Player from "./renderers/Player";
import Coin from "./renderers/Coin";
import Ground from "./renderers/Ground";

export default function setupEntities() {
  let engine = Matter.Engine.create({ enableSleeping: false });
    let world = engine.world;

      const player = Matter.Bodies.rectangle(100, 300, 50, 50, { label: "Player" });
        const ground = Matter.Bodies.rectangle(200, 600, 400, 50, {
            isStatic: true,
                label: "Ground"
                  });
                    const coin = Matter.Bodies.circle(300, 300, 20, { label: "Coin", isSensor: true });

                      Matter.World.add(world, [player, ground, coin]);

                        return {
                            physics: { engine, world },
                                player: { body: player, size: [50, 50], renderer: Player },
                                    ground: { body: ground, size: [400, 50], renderer: Ground },
                                        coin: { body: coin, size: [40, 40], renderer: Coin },
                                          };
                                          }