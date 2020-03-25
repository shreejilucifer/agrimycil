import * as React from 'react';
import Svg, {Defs, ClipPath, Path, G, Circle} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={16} height={15.724} viewBox="0 0 16 15.724" {...props}>
      <Defs>
        <ClipPath id="prefix__a">
          <Path fill="none" d="M0 0h16v15.724H0z" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#prefix__a)">
        <G data-name="Group 328">
          <Path
            data-name="Rectangle 44"
            fill="#d1d4d1"
            d="M2.483 4.69h13.241v6.621H2.483z"
          />
          <Path
            data-name="Path 613"
            d="M16 11.586H2.207V4.414H16zm-13.241-.551h12.69V4.966H2.759z"
            fill="#556080"
          />
        </G>
        <Path
          data-name="Path 614"
          d="M2.483 2.483H1.104a.276.276 0 010-.552h1.379a.276.276 0 010 .552z"
          fill="#556080"
        />
        <Path
          data-name="Path 615"
          d="M2.483 4.965a.276.276 0 01-.276-.275V2.207a.276.276 0 11.552 0V4.69a.276.276 0 01-.276.275z"
          fill="#556080"
        />
        <Path
          data-name="Path 616"
          d="M2.483 13.517a.276.276 0 01-.276-.276V11.31a.276.276 0 11.552 0v1.931a.276.276 0 01-.276.276z"
          fill="#556080"
        />
        <Circle
          data-name="Ellipse 50"
          cx={1.103}
          cy={1.103}
          r={1.103}
          transform="translate(4.138 13.517)"
          fill="#556080"
        />
        <Circle
          data-name="Ellipse 51"
          cx={1.103}
          cy={1.103}
          r={1.103}
          transform="translate(10.759 13.517)"
          fill="#556080"
        />
        <Path
          data-name="Path 617"
          d="M14.345 13.518H2.483a.276.276 0 010-.552h11.862a.276.276 0 010 .552z"
          fill="#556080"
        />
        <Path
          data-name="Path 618"
          d="M15.724 7.173H2.483a.276.276 0 010-.552h13.241a.276.276 0 010 .552z"
          fill="#556080"
        />
        <Path
          data-name="Path 619"
          d="M15.724 9.38H2.483a.276.276 0 110-.552h13.241a.276.276 0 010 .552z"
          fill="#556080"
        />
        <Path
          data-name="Path 620"
          d="M4.69 11.586a.276.276 0 01-.276-.272V4.69a.276.276 0 11.552 0v6.624a.276.276 0 01-.276.272z"
          fill="#556080"
        />
        <Path
          data-name="Path 621"
          d="M6.897 11.586a.276.276 0 01-.276-.272V4.69a.276.276 0 11.552 0v6.624a.276.276 0 01-.276.272z"
          fill="#556080"
        />
        <Path
          data-name="Path 622"
          d="M9.104 11.586a.276.276 0 01-.276-.272V4.69a.276.276 0 11.552 0v6.624a.276.276 0 01-.276.272z"
          fill="#556080"
        />
        <Path
          data-name="Path 623"
          d="M11.31 11.586a.276.276 0 01-.276-.272V4.69a.276.276 0 11.552 0v6.624a.276.276 0 01-.276.272z"
          fill="#556080"
        />
        <Path
          data-name="Path 624"
          d="M13.517 11.586a.276.276 0 01-.276-.272V4.69a.276.276 0 11.552 0v6.624a.276.276 0 01-.276.272z"
          fill="#556080"
        />
        <Circle
          data-name="Ellipse 52"
          cx={0.828}
          cy={0.828}
          r={0.828}
          transform="translate(0 1.379)"
          fill="#d8625e"
        />
        <Path
          data-name="Rectangle 45"
          fill="#f0c419"
          d="M3.862 2.207h3.862v2.207H3.862z"
        />
        <Path
          data-name="Rectangle 46"
          fill="#8697cb"
          d="M7.724 0h4.414v4.414H7.724z"
        />
        <Path
          data-name="Rectangle 47"
          fill="#fb7b76"
          d="M12.138.828h2.759v3.586h-2.759z"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
