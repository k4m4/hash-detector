# hash-detector [![Build Status](https://travis-ci.org/k4m4/hash-detector.svg?branch=master)](https://travis-ci.org/k4m4/hash-detector)

> Retrieve an array of possible hash types corresponding to a given string.


## Install

```
~ ❯❯❯ npm install hash-detector
```


## Usage

```js
const hashDetect = require('hash-detector');

hashDetect('1abcb33beeb811dca15f0ac3e47b88d9').then(hash => {
  console.log(hash);
  /* => [
          'MD2',
          'MD2',
          'MD4',
          'MD5',
          'MD6',
          'RIPEMD-180',
          'Tiger-128',
          'Snerfu-128',
          'FNV-1a-128',
          'MDC-2',
          'HAVAL-128',
        ] */
});

hashDetect('17413f944145f37dcaa9bc55d9a201a248a08aae').then(hash => {
  console.log(hash);
  /* => [
          'SHA-0',
          'SHA-1',
          'RIPEMD',
          'Tiger',
          'HAVAL-160',
          'HAS-160'
        ] */
});

hashDetect('c3ab8ff13720e8ad9047dd39466b3c8974e592c2fa383d4a3960714caef0c4f2').then(hash => {
  console.log(hash);
  /* => [ 
          'SHA-256',
          'SHA3-256',
          'RIPEMD-256',
          'GOST',
          'Snerfu-256',
          'Streebog-256',
          'HAVAL-256'
        ] */
});
```


## API

### hashDetect(hash, [options])

Returns an array of possible hash types that the given string might correspond to.

#### hash

Type: `string`

String containing desired hash.

#### options

##### timeout

Type: `number`

Timeout in milliseconds after which a request is considered failed. Default: `5000`.


## Supported Hashes

- `MD2`, `MD4`, `MD5`, `MD6`
- `SHA-0`, `SHA-1`, `SHA-224`, `SHA-256`, `SHA-384`, `SHA-512`, `SHA3-224`, `SHA3-256`, `SHA3-384`, `SHA3-512`
- `HAVAL-128`, `HAVAL-160`, `HAVAL-192`, `HAVAL-224`, `HAVAL-256`
- `Tiger`, `Tiger-128`, `Tiger-192`
- `RIPEMD`, `RIPEMD-180`, `RIPEMD-256`, `RIPEMD-320`
- `Snerfu-128`, `Snerfu-256`
- `Streebog-256`, `Streebog-512`
- `FNV-1-32`, `FNV-1-64`
- `FNV-1a-32`, `FNV-1a-52`, `FNV-1a-64`, `FNV-1a-1024`, `FNV-1a-128`, `FNV-1a-512`
- `HAS-160`
- `GOST`
- `MDC-2`
- `BLAKE-512`
- `Whirpool`
- `Spectral Hash`


## Related

- [hash-detector-cli](https://github.com/k4m4/hash-detector-cli) - CLI for this module


## License

MIT © [Nikolaos Kamarinakis](https://nikolaskama.me)