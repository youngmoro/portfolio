import React from "react";
import Column from "../component/layout/Column";
import WorkText from "../component/atom/WorkText";
import WorkCredit from "../component/atom/WorkCredit";
import WorkTitle from "../component/atom/WorkTitle";
import WorkVimeo from "../component/atom/WorkVimeo";
import { LinkText } from "../component/atom/LinkText";
import WorkImg from "../component/atom/WorkImg";

const SFC = () => {
  return (
    <Column gap={24}>
      <WorkImg name="sfc" format="gif" />
      <WorkTitle>Keio University SFC 30th Anniversary Website</WorkTitle>
      <WorkText>
        慶應義塾大学SFC創設30年記念ウェブサイトの制作にあたり、開発メンバーの一人としてエンジニアリングを行った。
      </WorkText>
      <WorkText>
        Participated in the front-end development of the Keio University SFC
        30th Anniversary Website.
      </WorkText>
      <a href="https://sfc30-web.sfc.keio.ac.jp/">
        <LinkText>https://sfc30-web.sfc.keio.ac.jp/</LinkText>
      </a>
    </Column>
  );
};

export default SFC;
