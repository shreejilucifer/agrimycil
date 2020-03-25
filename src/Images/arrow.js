import * as React from 'react';
import Svg, {Defs, ClipPath, Path, G} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props) {
  return (
    <Svg width={139} height={33} viewBox="0 0 139 33" {...props}>
      <Defs>
        <ClipPath id="prefix__a">
          <Path fill="none" d="M0 0h139v33H0z" />
        </ClipPath>
      </Defs>
      <G data-name="Component 2 \u2013 1" clipPath="url(#prefix__a)">
        <G filter="url(#prefix__b)">
          <Path
            data-name="Line 1"
            fill="none"
            stroke="#fff"
            strokeWidth={3}
            d="M9 13.5h114"
          />
        </G>
        <G filter="url(#prefix__c)">
          <Path data-name="Polygon 1" d="M130 13.5L116 21V6z" fill="#fff" />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
