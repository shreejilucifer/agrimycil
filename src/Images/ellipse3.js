import * as React from 'react';
import Svg, {Defs, LinearGradient, Stop, Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={379.592}
      height={301.992}
      viewBox="0 0 379.592 301.992"
      {...props}>
      <Defs>
        <LinearGradient
          id="prefix__a"
          x1={0.5}
          x2={0.5}
          y2={1}
          gradientUnits="objectBoundingBox">
          <Stop offset={0} stopColor="#7ad13f" />
          <Stop offset={1} stopColor="#3b76f6" />
        </LinearGradient>
      </Defs>
      <Path
        data-name="Path 568"
        d="M189 0c85.627 85.97 189 58.2 189 130S246.547 308.544 189 260 16.829 227.974 0 130 103.373-85.97 189 0z"
        transform="translate(1.592 29.754)"
        fill="url(#prefix__a)"
      />
    </Svg>
  );
}

export default SvgComponent;
