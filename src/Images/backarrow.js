import * as React from 'react';
import Svg, {Defs, ClipPath, Path, G} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={20.5} height={9} viewBox="0 0 20.5 9" {...props}>
      <Defs>
        <ClipPath id="prefix__a">
          <Path fill="none" d="M0 0h20.5v9H0z" />
        </ClipPath>
      </Defs>
      <G data-name="Component 3 \u2013 4" clipPath="url(#prefix__a)">
        <Path
          data-name="Line 4"
          fill="none"
          stroke="#3b76f6"
          strokeWidth={2}
          d="M20.5 4.5h-13"
        />
        <Path data-name="Polygon 2" d="M0 4.5L10 0v9z" fill="#3b76f6" />
      </G>
    </Svg>
  );
}

export default SvgComponent;
