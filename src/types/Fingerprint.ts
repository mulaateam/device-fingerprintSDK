export interface GeoLocation {
    country: string;
    region: string;
    city: string;
    latitude: string;
    longitude: string;
}

export interface ProxyDataEntry {
    asn: string;
    range: string;
    provider: string;
    organisation: string;
    continent: string;
    continentcode: string;
    country: string;
    isocode: string;
    region: string;
    regioncode: string;
    timezone: string;
    city: string;
    latitude: number;
    longitude: number;
    currency: {
        code: string;
        name: string;
        symbol: string;
    };
    proxy: string;
    type: string;
    risk: number;
    tor?: string;
}

// Update the ProxyData interface to use the new ProxyDataEntry type
export interface ProxyData {
    status: string; 
    [ip: string]: ProxyDataEntry | string;
}



export interface Fingerprint {
    fingerprintHash: string;
    ipAddress: string;
    geoLocation: GeoLocation | 'unknown'; // Fallback if location data is not available
    isVPN: boolean;
    isTor: boolean;
    isEmulator: boolean;
    isIncognito: boolean;
    latency: number; // Measured in milliseconds
    ipChanged: boolean; // Indicates if the IP has changed since the last check
    dnsLeak: boolean; // Indicates if there's a DNS leak
    canvasFingerprint: string;
    webGLFingerprint: string;
    audioFingerprint: string;
}

