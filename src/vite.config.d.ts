/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly CLIENT_ID: string;
  readonly CHANNEL_URL: string;
  readonly KEY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
