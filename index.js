'use strict'
const arrify   = require('arrify');
const pAny     = require('p-any');
const pify     = require('pify');
const pTimeout = require('p-timeout');

const hashPerBits = {
	32: ['FNV-1-32', 'FNV-1a-32'],
	52: ['FNV-1a-52'],
	64: ['FNV-1-64', 'FNV-1a-64'],
	128: ['MD2', 'MD4', 'MD5', 'MD6', 'RIPEMD-180', 'Tiger-128', 'Snerfu-128', 'FNV-1a-128', 'MDC-2', 'HAVAL-128'],
	160: ['SHA-0', 'SHA-1', 'RIPEMD', 'Tiger', 'HAVAL-160', 'HAS-160'],
	192: ['Tiger-192', 'HAVAL-192'],
	224: ['SHA-224', 'SHA3-224', 'HAVAL-224'],
	256: ['SHA-256', 'SHA3-256', 'RIPEMD-256', 'GOST', 'Snerfu-256', 'Streebog-256', 'HAVAL-256'],
	320: ['RIPEMD-320'],
	384: ['SHA-384', 'SHA3-384'],
	512: ['SHA-512', 'SHA3-512', 'FNV-1a-512', 'BLAKE-512', 'Whirpool', 'Spectral Hash', 'Streebog-512'],
	1024: ['FNV-1a-1024']
};

function detectHash (hash) {
	var bits = hash.length * 4;
	if (bits in hashPerBits) {
		return hashPerBits[bits];
	} else {
		return 'Hash type could not be detected';
	}
}

module.exports = (dests, opts) => {
	opts = opts || {};
	opts.timeout = typeof opts.timeout === 'number' ? opts.timeout : 5000;

	const p = pAny(arrify(dests.trim()).map(detectHash));
	return pTimeout(p, opts.timeout).catch(() => 'Hash type could not be detected');
};
