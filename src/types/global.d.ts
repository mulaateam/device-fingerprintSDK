// global.d.ts
export {};

declare global {
  interface Window {
    generateDeviceFingerprint: () => Promise<Fingerprint>;
  }
}
