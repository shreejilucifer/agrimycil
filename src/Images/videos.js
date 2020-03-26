import * as React from 'react';
import Svg, {Defs, G, Circle, Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={86} height={86} viewBox="0 0 86 86" {...props}>
      <Defs></Defs>
      <G data-name="Group 335">
        <G filter="url(#prefix__a)">
          <G
            data-name="Ellipse 54"
            transform="translate(9 6)"
            fill="#fff"
            stroke="#e6355f"
            strokeWidth={3}>
            <Circle cx={34} cy={34} r={34} stroke="none" />
            <Circle cx={34} cy={34} r={32.5} fill="none" />
          </G>
        </G>
        <G transform="translate(23.59 20.457)">
          <Path
            data-name="Line 6"
            fill="none"
            stroke="#7383bf"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={2}
            d="M14.696 25.13L9.279 36.81"
          />
          <Path
            data-name="Line 7"
            fill="none"
            stroke="#7383bf"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={2}
            d="M14.697 25.13l5.417 11.68"
          />
          <Path
            data-name="Path 625"
            d="M36.51 23.618l-9.132-8.727a1.294 1.294 0 01.032-1.844l9.132-8.43a1.273 1.273 0 012.148.937v17.155a1.273 1.273 0 01-2.18.909z"
            fill="#efce4a"
          />
          <Path
            data-name="Path 626"
            d="M25.424 25.13H2.767A2.767 2.767 0 010 22.363V5.379A2.888 2.888 0 012.879 2.5h22.712a2.879 2.879 0 012.879 2.879v16.7a3.055 3.055 0 01-3.046 3.051z"
            fill="#363e4b"
          />
          <Circle
            data-name="Ellipse 60"
            cx={4.015}
            cy={4.015}
            r={4.015}
            transform="translate(4.38 6.88)"
            fill="#efce4a"
          />
          <Path
            data-name="Line 8"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={2}
            d="M9.49 11.26l3.65 3.65"
          />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
