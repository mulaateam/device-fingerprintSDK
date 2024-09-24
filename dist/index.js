import generateDeviceFingerprint from './FingerprintSDK';
generateDeviceFingerprint().then(fingerprint => {
    console.log('Device Fingerprint:', fingerprint);
}).catch(error => {
    console.error('Error generating fingerprint:', error);
});
