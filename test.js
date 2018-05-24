import test from 'ava';
import m from './';

const hashPerBits = {
	32: ['FNV-1-32', 'FNV-1a-32'],
	52: ['FNV-1a-52'],
	64: ['FNV-1-64', 'FNV-1a-64'],
	128: ['MD2', 'MD4', 'MD5', 'MD6', 'RIPEMD-180', 'Tiger-128', 'Snerfu-128', 'FNV-1a-128', 'MDC-2', 'HAVAL-128'],
	160: ['SHA-1', 'RIPEMD', 'Tiger', 'HAVAL-160', 'HAS-160'],
	192: ['Tiger-192', 'HAVAL-192'],
	224: ['SHA-224', 'HAVAL-224'],
	256: ['SHA-256', 'RIPEMD-256', 'GOST', 'Snerfu-256', 'Streebog-256', 'HAVAL-256'],
	320: ['RIPEMD-320'],
	384: ['SHA-384'],
	512: ['SHA-512', 'FNV-1a-512', 'BLAKE-512', 'Whirpool', 'Spectral Hash', 'Streebog-512'],
	1024: ['FNV-1a-1024']
}

const hashes = [
	'1abcb33beeb811dca15f0ac3e47b88d9',
	'7f550a9f4c44173a37664d938f1355f0f92a47a7',
	'b46b22bd0222bfe13a97ed5f30aa108d6ffaa75a313abb557e8c3e02',
	'4696a780a2051b5a0f422970904da794adc1b499b2f4583e778e100a0bdd79cc',
	'f4971074a8da200c122c04bc4e0fa96066913d6f38d3397eb61a7341078cd4841386e159993826af',
	'bbcdb2b89b70a3c2479d7896da821d273387ba6dede167518b8997a25769ebb5098126142bc72a9eb0d6545afbd8db19',
	'3d767f0e314c971584a120154d456789f0453a0cf46b4a1bf1f5a048caede89e69ed90745ce7129b3cb1286bb65397b7e69c999d0c324b262a9302dac08bc821'
];

test('regular hashes', async t => {
	for (const x of hashes) {
		t.deepEqual((await m(x)), hashPerBits[x.length*4]);
	}
});

test('with timeout', async t => {
	for (const x of hashes) {
		t.deepEqual((await m(x, {timeout: 3000})), hashPerBits[x.length*4]);
	}
});