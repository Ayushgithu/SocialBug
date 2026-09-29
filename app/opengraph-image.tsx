import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "SocialBug Media — Strategy. Content. Growth.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a0f14 55%, #0a0a0a 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -100,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(239,47,122,0.45) 0%, rgba(239,47,122,0) 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -140,
            left: -100,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(252,132,46,0.4) 0%, rgba(252,132,46,0) 70%)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 40,
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: -1,
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "linear-gradient(135deg, #ef2f7a, #fc842e)",
              fontSize: 34,
              color: "#fff",
            }}
          >
            SB
          </span>
          SocialBug Media
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 56,
            fontWeight: 800,
            color: "#ffffff",
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.15,
          }}
        >
          Strategy. Content. Growth.
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 26,
            color: "rgba(255,255,255,0.65)",
            textAlign: "center",
            maxWidth: 820,
          }}
        >
          1000+ creators. 100+ campaigns delivered. One partner, all platforms.
        </div>
      </div>
    ),
    { ...size }
  );
}