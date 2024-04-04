import React from "react";
import Column from "../component/layout/Column";
import WorkText from "../component/atom/WorkText";
import WorkCredit from "../component/atom/WorkCredit";
import WorkTitle from "../component/atom/WorkTitle";
import WorkVimeo from "../component/atom/WorkVimeo";

const MA5 = () => {
  return (
    <Column gap={24}>
      <WorkVimeo src="https://player.vimeo.com/video/591649157?h=6164471353" />
      <WorkTitle>NIKELAB RADIO*_installation_at MA5</WorkTitle>
      <WorkText>
        NIKELABが、NIKE TOKYO LIVEの一環として配信した「NIKELAB
        RADIO*」にて、プロジェクトを象徴するインスタレーションの企画制作をCEKAIが担当。「Tokyo
        to the
        World」をテーマに、NIKELABのフラッグシップショップMA5内にて巨大なアンテナを設置。100名を超えるキャンペーン参加者のビジュアルや声をサンプリングした演出で象徴的な空間を構築した。
      </WorkText>
      <WorkText>
        CEKAI planned and produced an installation that symbolizes the project
        “NIKELAB RADIO*”, broadcast as a part of NIKE TOKYO LIVE for NIKELAB.
        With the theme “Tokyo to the World”, a giant antenna was set in
        NIKELAB’s flagship shop MA5. It established a symbolic space with
        performance with a sampling of visuals and voices from over 100 campaign
        participants.
      </WorkText>
      <div>
        <WorkCredit>Produce: Tetsuro Shinoda</WorkCredit>
        <WorkCredit>
          Installation direction and design: Kazuhiko Hayakawa
        </WorkCredit>
        <WorkCredit>Sound design: Tatsuya Yamada (ttymd.com)</WorkCredit>
        <WorkCredit>Sound produce: Yohei Fujii</WorkCredit>
        <WorkCredit>
          System development: Yusaku Kimura, Yuta Morofuji
        </WorkCredit>
        <WorkCredit>Movie design: MESS, Kairi Sato, Shun Yamaguchi</WorkCredit>
        <WorkCredit>Planning support: Masahide Matsuda</WorkCredit>
        <WorkCredit>Project assistant: Ippei Fukuda</WorkCredit>
        <WorkCredit>
          Production: CEKAI, CANOPUS, MS Bisou, STAMP TOKYO
        </WorkCredit>
      </div>
    </Column>
  );
};

export default MA5;
