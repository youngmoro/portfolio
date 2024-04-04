import React from "react";
import Column from "../component/layout/Column";
import WorkText from "../component/atom/WorkText";
import WorkCredit from "../component/atom/WorkCredit";
import WorkTitle from "../component/atom/WorkTitle";
import WorkImg from "../component/atom/WorkImg";

const Climatic = () => {
  return (
    <Column gap={24}>
      <WorkImg name="climatic" />
      <WorkTitle>Climatic Reflector "OCEAN-PATTERNS"</WorkTitle>
      <WorkText>
        気候変動の問題が毎日のようにニュースになります。一方で、それを自分事として捉えることができない人はとても多いのではないでしょうか。自ら気候変動と向き合っているのか、向き合わされているのか、そのどちらでもないのか？
        SNSでそのような課題を扱っている投稿を見ても、本当に問題視しているのか、気候変動と向き合っている自分を愛しているのか、よくわからない印象すら受けることもあります。思えば、「エコ」といった環境の概念は、本来は消費対象にすべきでない尊い態度ですが、そのような態度すらもSNSで消費されていく様を私たちは見届けてきました。
        気候変動に向き合っている自分を客観視することで初めて、事の重大さに気がつく人もいるかもしれません。本作はそのような問題意識に基づいて作成された「人々の気候変動への能動」を可視化する装置です。
      </WorkText>
      <WorkText>
        Climate change frequently headlines the news, yet it’s often challenging
        for many to internalize it as a matter of personal concern. Are we
        actively addressing climate change, being involuntarily drawn into it,
        or are we detached? When we come across social media posts addressing
        these issues, it’s sometimes hard to discern whether the concern for
        climate change is genuine or if it’s more about a self-congratulatory of
        one’s engagement with the issue. Even the concept of ‘eco’, which should
        embody a sacred and non-consumable attitude towards the environment, has
        been somewhat commercialized on social media platforms. It’s a
        realization that some people may only fully grasp the seriousness of
        climate change when they step back and objectively observe their
        involvement with it. This piece has been created as a tool to visualize
        this ‘active engagement with climate change’ of individuals, reflecting
        on such nuanced understanding.
      </WorkText>
      <WorkImg name="climatic1" />
      <div>
        <WorkCredit>Visualization：Yuta Morofuji</WorkCredit>
        <WorkCredit>Sound：Momoha Anayama</WorkCredit>
        <WorkCredit>
          Dataset：Applied Physics Laboratory, University of Washington
        </WorkCredit>
      </div>
      <WorkCredit>
        Exhibition: SAPPORO INTERNATIONAL ART FESTIVAL, Sapporo Underground
        Shopping Mall – Aurora Town, Hokkaido, 2024
      </WorkCredit>
    </Column>
  );
};

export default Climatic;
