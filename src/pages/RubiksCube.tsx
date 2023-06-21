import React from "react";
import Column from "../component/layout/Column";
import WorkText from "../component/atom/WorkText";
import WorkCredit from "../component/atom/WorkCredit";
import WorkTitle from "../component/atom/WorkTitle";
import WorkVimeo from "../component/atom/WorkVimeo";

const RubiksCube = () => {
  return (
    <Column gap={24}>
      <WorkVimeo src="https://player.vimeo.com/video/566486236?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" />
      <WorkTitle>Rubik's Cube</WorkTitle>
      <WorkText>
        C++、OpenGLを用いて描かれた架空のルービックキューブ。3D空間で複数のキューブを同時に動かし様々な光源を重ね合わせることで、ルービックキューブがその色を変化させながら物理的に起こり得ない回転をする様子を表現している。
      </WorkText>
      <WorkText>
        A fictional Rubik's Cube drawn using C++ and OpenGL, which expresses the
        physically impossible rotation of a Rubik's Cube while changing its
        color by moving multiple cubes simultaneously in 3D space and
        superimposing various light sources on them.
      </WorkText>
      <WorkCredit>Artist: Yuta Morofuji</WorkCredit>
    </Column>
  );
};

export default RubiksCube;
