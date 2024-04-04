import React from "react";
import Column from "../component/layout/Column";
import WorkText from "../component/atom/WorkText";
import WorkCredit from "../component/atom/WorkCredit";
import WorkTitle from "../component/atom/WorkTitle";
import WorkImg from "../component/atom/WorkImg";

const Mother = () => {
  return (
    <Column gap={24}>
      <WorkImg name="mother0" format="jpg" />
      <WorkTitle>Mother Fluctuation</WorkTitle>
      <WorkText>
        本作は気候変動のビッグデータを用いた没入型のオーディオビジュアルインスタレーションです。
        複数のシーンを通して、温度、海面高度、市場、文明などのフラクチュエーション（上昇と下降）という現象に着目し、人間の営為には頓着することのない母なる地球が描かれています。
        日本伝統の地獄絵の表現を参照しながら、オープンな科学データにアート特有の操作を適用し、温暖化が人類にもたらす大災害を想起させる風景を可視化／可聴化しています。
      </WorkText>
      <WorkText>
        This film aims to express the impact of climate change from an artistic
        standpoint while using scientific data. Through multiple scenes, the
        work focuses on the phenomenon of fluctuation (rise and fall) of
        temperature, sea level altitude, markets, and civilization, and depicts
        Mother Earth, which is indifferent to human activity. Referencing the
        expression of traditional Japanese hell painting (Jigoku-e), the work
        renders landscapes that reminds us of the catastrophe that global
        warming will bring to mankind by manipulating open scientific data in an
        art-specific manner.
      </WorkText>
      <WorkImg name="mother2" />
      <WorkImg name="mother1" format="jpg" />
      <div>
        <WorkCredit>Artist: Akira Wakita</WorkCredit>
        <WorkCredit>Software: Yuki Kuwashima, Yuta Morofuji</WorkCredit>
        <WorkCredit>Sound: Kairi Haruna</WorkCredit>
        <WorkCredit>
          Research: Yoshinori Shibahara, Kazuki Nagata, Taisho Nishihara
        </WorkCredit>
        <WorkCredit>
          Technical Support: Astro Design, Masayuki Yamabe
        </WorkCredit>
      </div>
      <div>
        <WorkCredit>
          Data set1: IPCC - The Intergovernmental Panel on Climate Change,
          https://www.ipcc.ch
        </WorkCredit>
        <WorkCredit>
          Data set2: OFES (Ocean General Circulation Model for the Earth
          Simulator) dataset by JAMSTEC, https://www.jamstec.go.jp/ofes/
        </WorkCredit>
      </div>
      <WorkCredit>
        Exhibition: Ars Electronica Festival, Data Art and Science, DeepSpace8K,
        Linz, 2023
      </WorkCredit>
    </Column>
  );
};

export default Mother;
