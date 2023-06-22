import React from "react";
import Column from "../component/layout/Column";
import WorkTitle from "../component/atom/WorkTitle";
import WorkText from "../component/atom/WorkText";
import WorkCredit from "../component/atom/WorkCredit";
import WorkImg from "../component/atom/WorkImg";
import { LinkText } from "../component/atom/LinkText";

const Boid = () => {
  return (
    <Column gap={24}>
      <WorkImg name="boid" />
      <WorkTitle>群れを生むルール</WorkTitle>
      <WorkText>
        鳥や魚などの一部の生物は、群れをなして行動することがあります。さまざまな環境や障害物に遭遇しても群れを保持しながら動き回る能力は「群知能」と呼ばれ、ゲームなどの分野でも応用されています。その力は、わずか３つのルールを適用することでシミュレーションすることができます。それらの個体が相互作用することで、群れが形成されるのです。本作品では、群れをシミュレーションするアルゴリズムの一つであるBoidを取り上げ、そのルールがどのようにはたらくかを紹介します。
      </WorkText>
      <WorkTitle>Rules for Making Groups</WorkTitle>
      <WorkText>
        Some living creatures like birds and fish exhibit swarm behavior,
        whereby those of the same species gather together and perform an action
        collectively. The ability to move while maintaining swarm through
        various kinds of environments and even around obstacles is known as
        swarm intelligence, and is employed also in designing games. That
        ability can be simulated by applying just 3 rules to each entity. A
        swarm then forms through the interaction of entities according to those
        rules. This work uses Boids, an artificial intelligence program that
        simulates swarms, to introduce how the rules work.
      </WorkText>
      <div>
        <WorkCredit>
          Planning: Syunichi Suge, Kentaro Hirase, Yusaku Kimura
        </WorkCredit>
        <WorkCredit>Planning Associate: Sonoka Aoki</WorkCredit>
        <WorkCredit>Programming: Yusaku Kimura, Yuta Morofuji</WorkCredit>
        <WorkCredit>Design: Kentaro Hirase, Sonoka Aoki</WorkCredit>
        <WorkCredit>Production: CANOPUS</WorkCredit>
        <WorkCredit>Support: Getty Images Japan</WorkCredit>
      </div>
      <WorkCredit>
        Exhibition: "Rules?", 2121 DESIGN SIGHT, Tokyo, 2021
      </WorkCredit>
      <a href="http://www.2121designsight.jp/program/rule/">
        <LinkText>http://www.2121designsight.jp/program/rule/</LinkText>
      </a>
      <WorkImg name="boid1" />
      <WorkImg name="boid2" />
      <WorkImg name="boid3" />
      <WorkCredit>Photo: Yugo Asami</WorkCredit>
    </Column>
  );
};

export default Boid;
