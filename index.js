import generateDeviceFingerprint from './FingerprintSDK';
generateDeviceFingerprint().then(fingerprint => {
    console.log('Device Fingerprint:', fingerprint);
}).catch(error => {
    console.error('Error generating fingerprint:', error);
});
<<<<<<< HEAD
=======
export default generateDeviceFingerprint;
>>>>>>> f2693ceb011d52fbc191e24975da51161ff4f9cf
