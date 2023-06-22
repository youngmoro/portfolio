import React from "react";
import Column from "../component/layout/Column";
import WorkText from "../component/atom/WorkText";
import WorkCredit from "../component/atom/WorkCredit";
import WorkTitle from "../component/atom/WorkTitle";
import { LinkText } from "../component/atom/LinkText";
import WorkImg from "../component/atom/WorkImg";

const Keith = () => {
  return (
    <Column gap={24}>
      <WorkImg name="keith" />
      <WorkTitle>Diversity (For Alan and Keith)</WorkTitle>
      <WorkText>
        Gray-ScottモデルをUV平面にマッピングすると、このモデルで生成しうるすべての形を連続的に表示することができます。この画像は複雑系科学の研究者にとって馴染みであり、科学的な意味での新規性はここにはありません。しかし、自分が利用しうる最も高速なPCを用いて、インタラクティブに表示しうる最大解像度でこのパターンを表示してみると、想像を超える豊かな形が生まれてくることに気が付きます。この先、PCが高速化すればするほど、私たちはより微細な世界を可視化することができるようになり、未知の形と出会うことになるでしょう。
        これはチューリングパターンのみならず、多くのことに当てはまるように感じられます。科学と技術の進歩により、この先、私たちはより深く細かく世界を見つめることができるようになるのです。ある対象に対して、2つしかないと思っていた分類が、実は9つあるかもしれないし、もっと科学が進めば数万のパターンの存在が明らかになるかもしれません。
        アラン・チューリングが亡くなった1950年代には同性愛は犯罪でした。キース・ヘリングが亡くなった1990年までWTOは同性愛を精神疾患として扱っていました。21世紀になって多様性という言葉が普及し、ようやくLTBTQというグラデーションをもった性のあり方が知られるようになりました。しかし、このような性自認に対して理解のない人はまだまだ多いように感じられます。まるで古臭いPCを頑なに使い続けて、解像度の低い世界にとらわれているように見えます。高速化と高解像度化が進む時代を生きる私たちには、世界を複雑系として見つめる眼差しが必要ではないでしょうか。
      </WorkText>
      <WorkText>
        Mapping the Gray-Scott model to the UV plane provides a continuous view
        of all the possible shapes this model can produce. This image is
        familiar to researchers in complex systems science, and there is nothing
        novel here in a scientific sense. However, if you display this pattern
        using the fastest PC available to you, at the maximum resolution that
        can be interactively displayed, you will find that it produces richer
        shapes than you can imagine. In the future, as PCs become faster, we
        will be able to visualize a finer and finer world, and we will encounter
        unknown forms. This seems to apply not only to the Turing pattern, but
        to many other things as well. Advances in science and technology will
        allow us to look at the world in greater depth and detail in the years
        to come. What we thought were only two classifications for a given
        subject may actually be nine, and as more science advances, the
        existence of tens of thousands of patterns may become apparent. In the
        1950s, when Alan Turing died, homosexuality was a crime. In the 21st
        century, the term diversity has become popularized, and the gradations
        of sexuality known as LTBTQ are finally becoming known. However, it
        seems that there are still many people who do not understand this kind
        of gender identity. It seems as if they are stubbornly continuing to use
        old-fashioned PCs and are stuck in a world with low resolution. In this
        age of high speed and high resolution, we need to look at the world as a
        complex system.
      </WorkText>
      <div>
        <WorkCredit>Concept : Akira Wakita</WorkCredit>
        <WorkCredit>
          Software : Akira Wakita, Koki Nagashima, Yuta Morofuji, Maya Udagawa
        </WorkCredit>
        <WorkCredit>
          Setup Assistants : Maya Udagawa, Rakuki Ogawa, Yoshinori Shibahara,
          Issei Suzuki, Yuta Morofuji, Ai Yamamoto
        </WorkCredit>
      </div>
      <WorkCredit>
        Exhibition: - For Alan and Keith, Hokuto Art Program ed.1, Nakamura
        Keith Haring Collection, Yamanashi, 2021-2022
      </WorkCredit>
    </Column>
  );
};

export default Keith;
