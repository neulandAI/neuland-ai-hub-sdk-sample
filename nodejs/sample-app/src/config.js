if (!process.env.NLND_HUB_API_URL) {
  throw new Error(
    "NLND_HUB_API_URL is not set. Point it at your Hub API, e.g. https://api.your-domain.com (see python/.env.example)."
  );
}

export const config = {
  hubApiUrl: process.env.NLND_HUB_API_URL,
  jwtIssuer: process.env.NLND_JWT_ISSUER || "hub.neuland.ai.com", // must equal the Hub's NLND_JWT_ISSUER,
  jwtAudience: process.env.NLND_JWT_AUDIENCE || "http://localhost:9999",
  jwtPublicKey: process.env.NLND_JWT_PUBLIC_KEY,
  jwtLeewaySeconds: Number(process.env.NLND_JWT_LEEWAY_SECONDS || 60),
};
