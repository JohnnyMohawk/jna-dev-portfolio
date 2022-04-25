import Goo from "gooey-react";
import Color from "color";
import './gooey.css'

export default function GooeyBG() {
  let color1 = Color("#870929");
  let color2 = Color("#111111");
  let color3 = Color("#fd2d8d");
  let color4 = Color("#fb0e3c");
  let radius = 30;

  // animation: 9s linear 0s infinite normal none running rotate_back;
  return (
    <div className="banner">
      <Goo intensity="strong">
        <svg
          role="img"
          aria-label="Example of a gooey effect"
          className="w-64 h-64"
          style={{ "height": "100vh", "width": "100vw" }}
        >
          <g style={{ animation: "rotate_back 9s linear infinite" }}>
            <circle
              cx="0%"
              cy="0%"
              r={Math.floor(radius * 100)}
              fill={color2}
              style={{
                animation: "blob_four 25s ease-in-out -23s infinite alternate"
              }}
            />
            <circle
              cx="50%"
              cy="50%"
              r={Math.floor(radius * 4.56)}
              fill={color1}
              style={{
                animation: "blob_four 132s ease-in-out -113s infinite alternate"
              }}
            />
            <circle
              cx="20%"
              cy="20%"
              r={Math.floor(radius * 2.56)}
              fill={color1}
              style={{
                animation: "blob_four 122s ease-in-out -123s infinite alternate"
              }}
            />
            <circle
              cx="10%"
              cy="10%"
              r={Math.floor(radius * 3.56)}
              fill={color3}
              style={{
                animation: "blob_four 128s ease-in-out -116s infinite alternate"
              }}
            />
            <circle
              cx="30%"
              cy="30%"
              r={Math.floor(radius * 2.86)}
              fill={color4}
              style={{
                animation:
                  "blob_three 119s ease-in-out -123s infinite alternate"
              }}
            />
            <circle
              cx="40%"
              cy="40%"
              r={Math.floor(radius * 1)}
              fill={color1}
              style={{
                animation: "blob_two 126s ease-in-out -115s infinite alternate"
              }}
            />
            <circle
              cx="60%"
              cy="60%"
              r={Math.floor(radius * 1.57)}
              fill={color3}
              style={{
                animation: "blob_one 120s ease-in-out -132s infinite alternate"
              }}
            />
            <circle
              cx="70%"
              cy="70%"
              r={Math.floor(radius * 1.87)}
              fill={color4}
              style={{
                animation: "blob_one 127s ease-in-out -116s infinite alternate"
              }}
            />

            <circle
              cx="80%"
              cy="80%"
              r={Math.floor(radius * 4.56)}
              fill={color1}
              style={{
                animation: "blob_four 132s ease-in-out -113s infinite alternate"
              }}
            />
            <circle
              cx="90%"
              cy="90%"
              r={Math.floor(radius * 2.56)}
              fill={color1}
              style={{
                animation: "blob_four 122s ease-in-out -123s infinite alternate"
              }}
            />
            <circle
              cx="100%"
              cy="100%"
              r={Math.floor(radius * 3.56)}
              fill={color3}
              style={{
                animation: "blob_four 128s ease-in-out -116s infinite alternate"
              }}
            />
            <circle
              cx="50%"
              cy="50%"
              r={Math.floor(radius * 2.86)}
              fill={color4}
              style={{
                animation:
                  "blob_three 119s ease-in-out -123s infinite alternate"
              }}
            />
            <circle
              cx="40%"
              cy="40%"
              r={Math.floor(radius * 1)}
              fill={color1}
              style={{
                animation: "blob_two 126s ease-in-out -115s infinite alternate"
              }}
            />
            <circle
              cx="30%"
              cy="30%"
              r={Math.floor(radius * 1.57)}
              fill={color3}
              style={{
                animation: "blob_one 120s ease-in-out -132s infinite alternate"
              }}
            />
            <circle
              cx="20%"
              cy="20%"
              r={Math.floor(radius * 1.87)}
              fill={color4}
              style={{
                animation: "blob_one 127s ease-in-out -116s infinite alternate"
              }}
            />
          </g>
        </svg>
      </Goo>
    </div>
  );
}
