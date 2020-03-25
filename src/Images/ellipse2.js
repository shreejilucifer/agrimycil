import * as React from 'react';
import Svg, {Defs, LinearGradient, Stop, Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={265.858}
      height={257.178}
      viewBox="0 0 265.858 257.178"
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
        data-name="Path 495"
        d="M176.224-5.505C238.681 2.556 280.35 65 253 123s-53.462 143.848-138.777 124.75S-24.856 162.7 3.168 90.758 113.766-13.566 176.224-5.505z"
        transform="translate(4.309 6.711)"
        fill="url(#prefix__a)"
      />
    </Svg>
  );
}

export default SvgComponent;
