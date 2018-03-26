'use strict'
const arrify           = require('arrify');
const pAny             = require('p-any');
const pify             = require('pify');
const pTimeout         = require('p-timeout');
const base64Regex      = require('base64-regex');
const md5Regex         = require('md5-regex');
const shaRegex         = require('sha-regex')

function detectHash(address) {
	if (base64Regex({exact: true}).test(address)) return 'base64';
    else if (md5Regex({exact: true}).test(address)) return 'md5';
    else if (shaRegex.version(1).test(address)) return 'sha1';
    else if (shaRegex.version(224).test(address)) return 'sha224';
    else if (shaRegex.version(256).test(address)) return 'sha256';
    else if (shaRegex.version(384).test(address)) return 'sha384';
    else if (shaRegex.version(512).test(address)) return 'sha512';
	else return 'Hash type could not be detected'
}

module.exports = (dests, opts) => {
  opts = opts || {};
  opts.timeout = typeof opts.timeout === 'number' ? opts.timeout : 5000;

  const p = pAny(arrify(dests.trim()).map(detectHash));
  return pTimeout(p, opts.timeout).catch(() => 'Hash type could not be detected');
};