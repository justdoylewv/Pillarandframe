import { ImageResponse } from "next/og";

export const alt = "Pillar & Frame. A story-led film studio in Ohio.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Simple branded card: paper background, wordmark, one line.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FAF8F3",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            fontSize: 96,
            color: "#0A0A0B",
          }}
        >
          <span>Pillar</span>
          <span
            style={{
              color: "#7849E0",
              fontStyle: "italic",
              margin: "0 28px",
            }}
          >
            &amp;
          </span>
          <span>Frame</span>
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 30,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#807A6E",
          }}
        >
          A story-led film studio in Ohio
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 10,
            backgroundColor: "#0A0A0B",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
