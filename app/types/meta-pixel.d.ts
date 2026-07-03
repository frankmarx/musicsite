declare global {
  interface Window {
    fbq?: (
      command: "init" | "track" | "trackCustom" | "consent",
      eventOrPixelId: string,
      parameters?: Record<string, unknown>,
      options?: Record<string, unknown>,
    ) => void;
  }
}

export {};
