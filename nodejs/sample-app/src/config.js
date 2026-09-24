export const config = {
  hubApiUrl: process.env.NLND_HUB_API_URL || "http://localhost:8000",
  jwtIssuer: process.env.NLND_JWT_ISSUER || "your-hub.example.com",
  jwtAudience: process.env.NLND_JWT_AUDIENCE || "http://localhost:9999",
  jwtPublicKey: process.env.NLND_JWT_PUBLIC_KEY,
  jwtLeewaySeconds: Number(process.env.NLND_JWT_LEEWAY_SECONDS || 60),
};
