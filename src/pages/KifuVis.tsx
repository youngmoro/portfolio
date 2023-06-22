import React from "react";
import Column from "../component/layout/Column";
import WorkTitle from "../component/atom/WorkTitle";
import WorkText from "../component/atom/WorkText";
import WorkCredit from "../component/atom/WorkCredit";
import WorkImg from "../component/atom/WorkImg";
import { LinkText } from "../component/atom/LinkText";
import WorkVimeo from "../component/atom/WorkVimeo";

const KifuVis = () => {
  return (
    <Column gap={24}>
      <WorkImg name="kifuVis" />
      <WorkTitle>Shogi Game Visualization</WorkTitle>
      <WorkText>
        将棋の棋譜をさまざまな方法で可視化するWebアプリケーション。駒の動きを3D空間に並べて可視化したり、駒の効きをメタボールのアルゴリズムを応用して可視化することで形勢判断をしている。
      </WorkText>
      <WorkText>
        A web application that visualizes Shogi game records in various ways. It
        visualizes the movement of pieces by arranging them in a 3D space, and
        the effectiveness of the pieces is visualized by applying the metaball
        algorithm to express the situation assessment.
      </WorkText>
      <a href="https://3d-kifu-vis.vercel.app/">
        <LinkText>https://3d-kifu-vis.vercel.app/</LinkText>
      </a>
      <WorkImg name="kifuVis1" />
      <WorkVimeo
        src="https://player.vimeo.com/video/838526685?h=f634272e98"
        aspectRatio="100%"
      />
    </Column>
  );
};

export default KifuVis;
