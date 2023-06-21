import React from "react";
import Column from "../component/layout/Column";
import WorkTitle from "../component/atom/WorkTitle";
import WorkText from "../component/atom/WorkText";
import WorkCredit from "../component/atom/WorkCredit";
import WorkImg from "../component/atom/WorkImg";

const Thermo = () => {
  return (
    <Column gap={24}>
      <WorkImg name="thermo" />
      <WorkTitle>Thermo Visualization</WorkTitle>
      <WorkText>
        ある工場で計測された温度データによるデータ彫刻。1分ごとの温度データ10日分(14400種)*20種類のデータを用いている。1枚の層が1日分のデータを表しており、温度に応じて、色や直線の角度が変化する。
      </WorkText>
      <WorkText>
        Data sculpture based on temperature data measured at a certain factory.
        10 days of temperature data (14,400 kinds)*20 kinds of data per minute.
        1 layer represents 1 day of data, and the color and the angle of the
        straight line change according to the temperature.
      </WorkText>
      <div>
        <WorkCredit>Artist: Yuta Morofuji</WorkCredit>
        <WorkCredit>Data: Mitsubishi Electric</WorkCredit>
        <WorkCredit>
          Production: Mitsubishi Electric, Akira Wakita Laboratory
        </WorkCredit>
      </div>
      <WorkImg name="thermo1" />
      <WorkImg name="thermo2" />
      <WorkImg name="thermo3" />
    </Column>
  );
};

export default Thermo;
