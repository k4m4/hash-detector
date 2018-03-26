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

const fixturesSHA224 = [
	'b46b22bd0222bfe13a97ed5f30aa108d6ffaa75a313abb557e8c3e02',
	'de76c3e567fca9d246f5f8d3b2e704a38c3c5e258988ab525f941db8'
];
test('sha224', async t => {
	for (const x of fixturesSHA224) {
		t.is((await m(x)), 'sha224');
	}
});
test('sha224 with timeout', async t => {
	for (const x of fixturesSHA224) {
		t.is((await m(x, {timeout: 3000})), 'sha224');
	}
});

const fixturesSHA256 = [
	'4696a780a2051b5a0f422970904da794adc1b499b2f4583e778e100a0bdd79cc',
	'c3ab8ff13720e8ad9047dd39466b3c8974e592c2fa383d4a3960714caef0c4f2'
];
test('sha256', async t => {
	for (const x of fixturesSHA256) {
		t.is((await m(x)), 'sha256');
	}
});
test('sha256 with timeout', async t => {
	for (const x of fixturesSHA256) {
		t.is((await m(x, {timeout: 3000})), 'sha256');
	}
});

const fixturesSHA384 = [
	'bbcdb2b89b70a3c2479d7896da821d273387ba6dede167518b8997a25769ebb5098126142bc72a9eb0d6545afbd8db19',
	'3c9c30d9f665e74d515c842960d4a451c83a0125fd3de7392d7b37231af10c72ea58aedfcdf89a5765bf902af93ecf06'
];
test('sha384', async t => {
	for (const x of fixturesSHA384) {
		t.is((await m(x)), 'sha384');
	}
});
test('sha384 with timeout', async t => {
	for (const x of fixturesSHA384) {
		t.is((await m(x, {timeout: 3000})), 'sha384');
	}
});

const fixturesSHA512 = [
	'3d767f0e314c971584a120154d456789f0453a0cf46b4a1bf1f5a048caede89e69ed90745ce7129b3cb1286bb65397b7e69c999d0c324b262a9302dac08bc821',
	'0a50261ebd1a390fed2bf326f2673c145582a6342d523204973d0219337f81616a8069b012587cf5635f6925f1b56c360230c19b273500ee013e030601bf2425'
];
test('sha512', async t => {
	for (const x of fixturesSHA512) {
		t.is((await m(x)), 'sha512');
	}
});
test('sha512 with timeout', async t => {
	for (const x of fixturesSHA512) {
		t.is((await m(x, {timeout: 3000})), 'sha512');
	}
});

test('with whitespaces', async t => {
	t.is((await m(' \n 1abcb33beeb811dca15f0ac3e47b88d9 ')), 'md5');
})