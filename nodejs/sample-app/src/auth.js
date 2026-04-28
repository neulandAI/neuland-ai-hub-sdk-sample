import jwt from "jsonwebtoken";
import { config } from "./config.js";

function publicKeyPem() {
  if (!config.jwtPublicKey) throw new Error("Public key is not set");
  let pk = config.jwtPublicKey;
  if (pk.includes("\\n")) pk = pk.replace(/\\n/g, "\n");
  if (!pk.includes("\n")) {
    const begin = "-----BEGIN PUBLIC KEY-----";
    const end = "-----END PUBLIC KEY-----";
    const body = pk.replace(begin, "").replace(end, "").trim();
    const wrapped = body.match(/.{1,64}/g).join("\n");
    pk = `${begin}\n${wrapped}\n${end}`;
  }
  return pk;
}

function decodeServiceToken(token) {
  const verifyOptions = {
    algorithms: ["RS256"],
    clockTolerance: config.jwtLeewaySeconds,
  };
  if (config.jwtAudience) verifyOptions.audience = config.jwtAudience;
  if (config.jwtIssuer) verifyOptions.issuer = config.jwtIssuer;
  return jwt.verify(token, publicKeyPem(), verifyOptions);
}

export function getApiKey(req) {
  const auth = req.headers.authorization || "";
  if (!auth.startsWith("Bearer ")) {
    const err = new Error("Missing Bearer token");
    err.status = 401;
    throw err;
  }
  let payload;
  try {
    payload = decodeServiceToken(auth.slice(7));
  } catch (e) {
    const err = new Error(e.message);
    err.status = 401;
    throw err;
  }
  const apiKey = payload["x-api-key"];
  if (!apiKey) {
    const err = new Error("x-api-key claim missing from token");
    err.status = 401;
    throw err;
  }
  return apiKey;
}
