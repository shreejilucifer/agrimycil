import * as React from 'react';
import Svg, {Defs, LinearGradient, Stop, Ellipse} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={499.347}
      height={308.995}
      viewBox="0 0 499.347 308.995"
      {...props}>
      <Defs>
        <LinearGradient
          id="prefix__a"
          x1={0.5}
          x2={0.5}
          y2={1}
          gradientUnits="objectBoundingBox">
          <Stop offset={0} stopColor="#3b76f6" />
          <Stop offset={1} stopColor="#7ad13f" />
        </LinearGradient>
      </Defs>
      <Ellipse
        data-name="Ellipse 36"
        cx={232}
        cy={105}
        rx={232}
        ry={105}
        transform="rotate(13 23.628 207.262)"
        fill="url(#prefix__a)"
      />
    </Svg>
  );
}

export default SvgComponent;
