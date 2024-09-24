# Device Fingerprint SDK

A lightweight JavaScript SDK for generating device fingerprints using various browser features like Canvas, WebGL, and Audio APIs.

## Usage Example

```
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SDK Test</title>
   

</head>
<body>
    <h1>Device Fingerprint Test</h1>
    <script type="module">
        import generateDeviceFingerprint from 'https://device-fingerprint-sdk.netlify.app/dist/fingerprintSDK.js';
        generateDeviceFingerprint().then(fingerprint => {
            console.log('Device Fingerprint:', fingerprint);
        }).catch(error => {
            console.error('Error generating fingerprint:', error);
        });
    </script>
    
</body>
</html>
```


## CDN    
https://device-fingerprint-sdk.netlify.app/dist/fingerprintSDK.js


