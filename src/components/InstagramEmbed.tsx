"use client";

import { useEffect, useRef } from "react";

interface InstagramEmbedProps {
  reelUrls: string[];
}

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

const InstagramEmbed = ({ reelUrls }: InstagramEmbedProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Instagram embed script
    const existing = document.querySelector('script[src*="instagram.com/embed.js"]');
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
      script.onload = () => window.instgrm?.Embeds.process();
    } else {
      // Script already loaded — re-process embeds
      window.instgrm?.Embeds.process();
    }
  }, []);

  return (
    <div ref={containerRef} className="grid md:grid-cols-3 gap-6">
      {reelUrls.map((url) => (
        <div key={url} className="flex justify-center [&>blockquote]:!min-w-0 [&>blockquote]:!max-w-full [&>iframe]:!min-w-0 [&>iframe]:!max-w-full">
          <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink={`${url}?utm_source=ig_embed&utm_campaign=loading`}
            data-instgrm-version="14"
            style={{
              background: "#FFF",
              border: 0,
              borderRadius: 12,
              boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
              margin: 0,
              maxWidth: "100%",
              minWidth: 0,
              padding: 0,
              width: "100%",
            }}
          >
            <div style={{ padding: 16 }}>
              <a
                href={`${url}?utm_source=ig_embed&utm_campaign=loading`}
                style={{
                  background: "#FFFFFF",
                  lineHeight: 0,
                  padding: 0,
                  textAlign: "center",
                  textDecoration: "none",
                  width: "100%",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  <div style={{ backgroundColor: "#F4F4F4", borderRadius: "50%", flexGrow: 0, height: 40, marginRight: 14, width: 40 }} />
                  <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "center" }}>
                    <div style={{ backgroundColor: "#F4F4F4", borderRadius: 4, flexGrow: 0, height: 14, marginBottom: 6, width: 100 }} />
                    <div style={{ backgroundColor: "#F4F4F4", borderRadius: 4, flexGrow: 0, height: 14, width: 60 }} />
                  </div>
                </div>
                <div style={{ padding: "19% 0" }} />
                <div style={{ paddingTop: 8 }}>
                  <div style={{ color: "#3897f0", fontFamily: "Arial,sans-serif", fontSize: 14, fontStyle: "normal", fontWeight: 550, lineHeight: "18px" }}>
                    Ver esta publicación en Instagram
                  </div>
                </div>
              </a>
            </div>
          </blockquote>
        </div>
      ))}
    </div>
  );
};

export default InstagramEmbed;
