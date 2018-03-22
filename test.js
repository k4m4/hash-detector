import test from 'ava';
import m from './';

const fixturesBase64 = [
	'dW5pY29ybg==',
	'Ym9hdA==',
	'aGV5Cg==',
	'dW5pY29ybgo=',
	'Zm9vYmFyCg=='
];
test('base64', async t => {
	for (const x of fixturesBase64) {
		t.is((await m(x)), 'base64');
	}
});
test('base64 with timeout', async t => {
	for (const x of fixturesBase64) {
		t.is((await m(x, {timeout: 3000})), 'base64');
	}
});

const fixturesMD5 = [
	'1abcb33beeb811dca15f0ac3e47b88d9',
	'897b47d80a717715378832539b4c1340',
	'5f4dcc3b5aa765d61d8327deb882cf99',
	'21232f297a57a5a743894a0e4a801fc3',
	'c44a471bd78cc6c2fea32b9fe028d30a'
];
test('md5', async t => {
	for (const x of fixturesMD5) {
		t.is((await m(x)), 'md5');
	}
});
test('md5 with timeout', async t => {
	for (const x of fixturesMD5) {
		t.is((await m(x, {timeout: 3000})), 'md5');
	}
});

const fixturesSHA1 = [
	'17413f944145f37dcaa9bc55d9a201a248a08aae',
	'7f550a9f4c44173a37664d938f1355f0f92a47a7',
	'8843d7f92416211de9ebb963ff4ce28125932878',
	'3773dea65156909838fa6c22825cafe090ff8030',
	'e0d592768d7cf99aa29d6ae2a2df1a97cfc0b52f'
];
test('sha1', async t => {
	for (const x of fixturesSHA1) {
		t.is((await m(x)), 'sha1');
	}
});
test('sha1 with timeout', async t => {
	for (const x of fixturesSHA1) {
		t.is((await m(x, {timeout: 3000})), 'sha1');
	}
});