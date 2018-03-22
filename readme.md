# hash-detector [![Build Status](https://travis-ci.org/k4m4/hash-detector.svg?branch=master)](https://travis-ci.org/k4m4/hash-detector)

> Detect hashes in a string.


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
	//=> 'sha-1'
});
```


## API

### hashDetect(hash, [options])

Returns the hash type that a string corresponds to.

#### address

Type: `string`

Hash to identify hash type.

#### options

##### timeout

Type: `number`

Timeout in milliseconds after which a request is considered failed. Default: `5000`.


## Supported Hashes

- [`Base64`](https://github.com/kevva/base64-regex)
- [`MD5`](https://github.com/k4m4/md5-regex)
- [`SHA-1`](https://github.com/michaelrhodes/sha1-regex)


## License

MIT © [Nikolaos Kamarinakis](https://nikolaskama.me)