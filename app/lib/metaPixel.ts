const META_PIXEL_ID_PATTERN = /^\d+$/;

function normalizePlatform(linkType: string): string {
  const normalized = linkType
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");

  return normalized || "unknown";
}

function toPascalCase(input: string): string {
  return input
    .split(/[^a-z0-9]+/i)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join("");
}

function getPlatformEventName(platform: string): string {
  switch (platform) {
    case "spotify":
      return "SpotifyClick";
    case "youtube":
      return "YouTubeClick";
    case "apple_music":
      return "AppleMusicClick";
    case "pandora":
      return "PandoraClick";
    default:
      return `${toPascalCase(platform)}Click`;
  }
}

function normalizeCustomEventName(eventName: string | undefined): string | null {
  if (!eventName) {
    return null;
  }

  const trimmed = eventName.trim();
  if (!trimmed) {
    return null;
  }

  const sanitized = trimmed.replace(/[^a-zA-Z0-9_.]/g, "");
  return sanitized || null;
}

export function getMetaPixelId(rawPixelId: string | undefined): string | null {
  if (!rawPixelId) {
    return null;
  }

  const trimmed = rawPixelId.trim();
  return META_PIXEL_ID_PATTERN.test(trimmed) ? trimmed : null;
}

export function getMetaPixelBaseScript(pixelId: string): string {
  return `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${pixelId}');
fbq('track', 'PageView');`;
}

export function trackMusicLinkClick(linkType: string, url: string, eventName?: string): void {
  if (typeof window === "undefined" || typeof window.fbq !== "function") {
    return;
  }

  const platform = normalizePlatform(linkType);
  const params = {
    platform,
    link_type: linkType,
    destination_url: url,
  };
  const customEventName = normalizeCustomEventName(eventName);

  window.fbq("trackCustom", "MusicLinkClick", params);
  window.fbq("trackCustom", customEventName || getPlatformEventName(platform), params);
}
