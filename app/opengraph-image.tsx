import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const alt = "Guincho Adventours — Ride the wild Atlantic coast";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(1200px 600px at 80% 20%, rgba(198,255,58,0.18), transparent 60%), linear-gradient(180deg, #0b0b0c 0%, #050506 100%)",
          color: "#f5f4ef",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 22,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#c6ff3a",
            fontWeight: 700,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#c6ff3a",
            }}
          />
          Areia · Guincho · Cascais
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div
            style={{
              fontSize: 128,
              lineHeight: 0.95,
              fontWeight: 900,
              letterSpacing: -2,
              textTransform: "uppercase",
              color: "#f5f4ef",
            }}
          >
            Ride the wild
          </div>
          <div
            style={{
              fontSize: 128,
              lineHeight: 0.95,
              fontWeight: 900,
              letterSpacing: -2,
              textTransform: "uppercase",
              color: "#c6ff3a",
            }}
          >
            Atlantic coast
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 24,
            color: "#a3a1a0",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            <div style={{ color: "#f5f4ef", fontWeight: 700, fontSize: 30 }}>
              Guincho Adventours
            </div>
            <div>Quads · Buggies · Kayak · Jeep Sintra · Hiking</div>
          </div>
          <div
            style={{
              display: "flex",
              gap: 12,
              alignItems: "center",
              fontSize: 20,
              fontWeight: 700,
              color: "#0b0b0c",
              background: "#c6ff3a",
              padding: "12px 20px",
              borderRadius: 999,
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            18 years · 50k riders
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
