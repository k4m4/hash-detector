# hash-detector [![Build Status](https://travis-ci.org/k4m4/hash-detector.svg?branch=master)](https://travis-ci.org/k4m4/hash-detector)

> Detect the type of hash in a string.


## Install

```
~ ❯❯❯ npm install hash-detector
```


## Usage

```js
const hashDetect = require('hash-detector');

hashDetect('dW5pY29ybg==').then(hash => {
	console.log(hash);
	//=> 'base64'
});

hashDetect('1abcb33beeb811dca15f0ac3e47b88d9').then(hash => {
	console.log(hash);
	//=> 'md5'
});

hashDetect('17413f944145f37dcaa9bc55d9a201a248a08aae').then(hash => {
	console.log(hash);
	//=> 'sha1'
});

hashDetect('c3ab8ff13720e8ad9047dd39466b3c8974e592c2fa383d4a3960714caef0c4f2').then(hash => {
	console.log(hash);
	//=> 'sha256'
});
```


## API

### hashDetect(hash, [options])

Returns the hash type that a string corresponds to.

#### hash

Type: `string`

Hash to identify hash type.

#### options

##### timeout

Type: `number`

Timeout in milliseconds after which a request is considered failed. Default: `5000`.


## Supported Hashes

- [`Base64`](https://github.com/kevva/base64-regex)
- [`MD5`](https://github.com/k4m4/md5-regex)
- [`SHA1`](https://github.com/k4m4/sha-regex)
- [`SHA224`](https://github.com/k4m4/sha-regex)
- [`SHA256`](https://github.com/k4m4/sha-regex)
- [`SHA384`](https://github.com/k4m4/sha-regex)
- [`SHA512`](https://github.com/k4m4/sha-regex)


## Related

- [hash-detector-cli](https://github.com/k4m4/hash-detector-cli) - CLI for this module


## License

MIT © [Nikolaos Kamarinakis](https://nikolaskama.me)