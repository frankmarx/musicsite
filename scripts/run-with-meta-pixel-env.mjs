import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

function parseEnvFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return {};
  }

  const parsed = {};
  const content = fs.readFileSync(filePath, "utf8");

  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) {
      continue;
    }

    const separatorIndex = line.indexOf("=");
    if (separatorIndex === -1) {
      continue;
    }

    const key = line.slice(0, separatorIndex).trim();
    let value = line.slice(separatorIndex + 1).trim();

    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    parsed[key] = value;
  }

  return parsed;
}

function loadEnvFiles() {
  const env = {};
  const files = [".env", ".env.local"];

  for (const file of files) {
    Object.assign(env, parseEnvFile(path.join(projectRoot, file)));
  }

  return env;
}

function findPixelId(env) {
  return env.VITE_META_PIXEL_ID || env.META_PIXEL_ID || null;
}

function main() {
  const commandName = process.argv[2] || "dev";
  const env = loadEnvFiles();
  const pixelId = findPixelId({ ...env, ...process.env });

  const resolvedEnv = {
    ...env,
    ...process.env,
  };

  if (pixelId) {
    resolvedEnv.VITE_META_PIXEL_ID = pixelId;
  }

  const commandMap = {
    dev: ["npx", "react-router", "dev"],
    build: ["npx", "react-router", "build"],
    start: ["npx", "react-router-serve", "./build/server/index.js"],
  };

  const command = commandMap[commandName];
  if (!command) {
    console.error(`Unknown command: ${commandName}`);
    process.exit(1);
  }

  const child = spawn(command[0], command.slice(1), {
    cwd: projectRoot,
    stdio: "inherit",
    shell: false,
    env: resolvedEnv,
  });

  child.on("exit", (code) => {
    process.exit(code ?? 0);
  });

  child.on("error", (error) => {
    console.error(error);
    process.exit(1);
  });
}

main();
