import generateDeviceFingerprint from './fingerprintSDK';

generateDeviceFingerprint().then(fingerprint => {
  console.log('Device Fingerprint:', fingerprint);
}).catch(error => {
  console.error('Error generating fingerprint:', error);
});

