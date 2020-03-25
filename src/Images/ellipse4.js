import * as React from 'react';
import Svg, {Defs, LinearGradient, Stop, Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={539.196}
      height={335.716}
      viewBox="0 0 539.196 335.716"
      {...props}>
      <Defs>
        <LinearGradient
          id="prefix__a"
          x1={0.59}
          y1={0.72}
          x2={0.058}
          y2={0.098}
          gradientUnits="objectBoundingBox">
          <Stop offset={0} stopColor="#e6355f" />
          <Stop offset={1} stopColor="#faf954" />
        </LinearGradient>
      </Defs>
      <Path
        data-name="Path 496"
        d="M354.53-5.222c124.146 9.95 206.97 87.03 152.607 158.63S400.871 330.978 231.294 307.4-45.15 202.416 10.553 113.607 230.384-15.173 354.53-5.222z"
        transform="rotate(-2 716.309 -117.17)"
        fill="url(#prefix__a)"
      />
    </Svg>
  );
}

export default SvgComponent;
