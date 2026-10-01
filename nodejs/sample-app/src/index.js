import express from "express";
import { Configuration, User, Assistant } from "@neulandai/neuland-hub-sdk";
import { config } from "./config.js";
import { getApiKey } from "./auth.js";

const app = express();
app.use(express.json());

function sdkConfig(apiKey) {
  return new Configuration({ basePath: config.hubApiUrl, apiKey });
}

app.get("/users/me", async (req, res) => {
  try {
    const apiKey = getApiKey(req);
    const { data: user } = await new User(sdkConfig(apiKey)).usersGetMyself();
    res.json({
      name: user.name,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      admin: user.admin,
      tenant_id: user.tenant_id,
    });
  } catch (e) {
    const status = e.status || e.response?.status || 500;
    res.status(status).json({ detail: e.response?.data || e.message });
  }
});

app.post("/assistants", async (req, res) => {
  try {
    const apiKey = getApiKey(req);
    const { data: assistant } = await new Assistant(sdkConfig(apiKey)).assistantsCreateAssistant(req.body);
    res.status(201).json({
      name: assistant.name,
      description: assistant.description,
      model: req.body.model,
    });
  } catch (e) {
    const status = e.status || e.response?.status || 500;
    res.status(status).json({ detail: e.response?.data || e.message });
  }
});

const port = Number(process.env.PORT || 9999);
app.listen(port, "0.0.0.0", () => {
  console.log(`sdk-sample-app-node listening on http://localhost:${port}`);
});
