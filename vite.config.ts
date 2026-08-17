import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Utilise src/server.ts comme point d’entrée serveur.
    
    server: { entry: "server" },
  },
});
