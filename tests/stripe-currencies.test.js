import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  format, formatPlain, formatWithCode, formatInterval, formatRecurring,
  getSymbol, getName, getDecimals,
  toSmallestUnit, fromSmallestUnit,
  isSupported, isZeroDecimal,
} from '../src/index.js';

// ── format ──────────────────────────────────

describe('format', () => {
  it('two-decimal currencies', () => {
    assert.equal(format(1999, 'usd'), 'US$19.99');
    assert.equal(format(1500, 'gbp'), '£15.00');
    assert.equal(format(1999, 'eur'), '€19.99');
  });

  it('zero-decimal currencies', () => {
    assert.equal(format(1000, 'jpy'), '¥1,000');
    assert.equal(format(50000, 'krw'), '₩50,000');
  });

  it('three-decimal currencies', () => {
    assert.equal(format(5000, 'bhd'), 'BD5.000');
    assert.equal(format(1234, 'kwd'), 'KD1.234');
  });

  it('negative amounts', () => {
    assert.equal(format(-1999, 'usd'), '-US$19.99');
    assert.equal(format(-1000, 'jpy'), '-¥1,000');
  });

  it('zero', () => {
    assert.equal(format(0, 'usd'), 'US$0.00');
    assert.equal(format(0, 'jpy'), '¥0');
  });

  it('large amounts with thousands separators', () => {
    assert.equal(format(123456789, 'usd'), 'US$1,234,567.89');
    assert.equal(format(1000000, 'jpy'), '¥1,000,000');
  });

  it('unknown currency returns raw amount', () => {
    assert.equal(format(1999, 'xyz'), '1999');
  });

  it('case insensitive', () => {
    assert.equal(format(1999, 'USD'), format(1999, 'usd'));
  });

  it('null/empty currency', () => {
    assert.equal(format(1999, null), '1999');
    assert.equal(format(1999, ''), '1999');
  });
});

// ── format display option ──────────────────

describe('format with display option', () => {
  describe('display: short', () => {
    it('USD → $19.99', () => assert.equal(format(1999, 'usd', { display: 'short' }), '$19.99'));
    it('CAD → $15.00', () => assert.equal(format(1500, 'cad', { display: 'short' }), '$15.00'));
    it('AUD → $25.00', () => assert.equal(format(2500, 'aud', { display: 'short' }), '$25.00'));
    it('GBP unchanged → £15.00', () => assert.equal(format(1500, 'gbp', { display: 'short' }), '£15.00'));
    it('EUR unchanged → €9.99', () => assert.equal(format(999, 'eur', { display: 'short' }), '€9.99'));
    it('JPY unchanged → ¥1,000', () => assert.equal(format(1000, 'jpy', { display: 'short' }), '¥1,000'));
    it('negative → -$19.99', () => assert.equal(format(-1999, 'usd', { display: 'short' }), '-$19.99'));
  });

  describe('display: narrowSymbol', () => {
    it('USD → $19.99', () => assert.equal(format(1999, 'usd', { display: 'narrowSymbol' }), '$19.99'));
    it('CAD → $15.00', () => assert.equal(format(1500, 'cad', { display: 'narrowSymbol' }), '$15.00'));
    it('GBP → £15.00', () => assert.equal(format(1500, 'gbp', { display: 'narrowSymbol' }), '£15.00'));
    it('EUR → €9.99', () => assert.equal(format(999, 'eur', { display: 'narrowSymbol' }), '€9.99'));
    it('JPY → ¥1,000', () => assert.equal(format(1000, 'jpy', { display: 'narrowSymbol' }), '¥1,000'));
    it('negative → -$19.99', () => assert.equal(format(-1999, 'usd', { display: 'narrowSymbol' }), '-$19.99'));
  });

  describe('display: code', () => {
    it('USD → USD 19.99', () => assert.equal(format(1999, 'usd', { display: 'code' }), 'USD 19.99'));
    it('GBP → GBP 15.00', () => assert.equal(format(1500, 'gbp', { display: 'code' }), 'GBP 15.00'));
    it('JPY → JPY 1,000', () => assert.equal(format(1000, 'jpy', { display: 'code' }), 'JPY 1,000'));
    it('BHD → BHD 5.000', () => assert.equal(format(5000, 'bhd', { display: 'code' }), 'BHD 5.000'));
    it('negative → -USD 19.99', () => assert.equal(format(-1999, 'usd', { display: 'code' }), '-USD 19.99'));
  });

  describe('display: full (explicit default)', () => {
    it('USD → US$19.99', () => assert.equal(format(1999, 'usd', { display: 'full' }), 'US$19.99'));
    it('CAD → C$15.00', () => assert.equal(format(1500, 'cad', { display: 'full' }), 'C$15.00'));
    it('GBP → £15.00', () => assert.equal(format(1500, 'gbp', { display: 'full' }), '£15.00'));
  });
});

// ── Legacy short option (backwards compat) ──

describe('format with legacy short: true', () => {
  it('USD short: $19.99', () => assert.equal(format(1999, 'usd', { short: true }), '$19.99'));
  it('USD default: US$19.99', () => assert.equal(format(1999, 'usd'), 'US$19.99'));
  it('CAD short: $15.00', () => assert.equal(format(1500, 'cad', { short: true }), '$15.00'));
  it('AUD short: $25.00', () => assert.equal(format(2500, 'aud', { short: true }), '$25.00'));
  it('GBP short unchanged: £15.00', () => assert.equal(format(1500, 'gbp', { short: true }), '£15.00'));
  it('EUR short unchanged: €9.99', () => assert.equal(format(999, 'eur', { short: true }), '€9.99'));
  it('JPY short unchanged: ¥1,000', () => assert.equal(format(1000, 'jpy', { short: true }), '¥1,000'));
  it('negative short: -$19.99', () => assert.equal(format(-1999, 'usd', { short: true }), '-$19.99'));
});

// ── formatPlain ─────────────────────────────

describe('formatPlain', () => {
  it('formats without symbol', () => {
    assert.equal(formatPlain(1999, 'usd'), '19.99');
    assert.equal(formatPlain(1000, 'jpy'), '1,000');
    assert.equal(formatPlain(5000, 'bhd'), '5.000');
  });

  it('unknown currency', () => {
    assert.equal(formatPlain(1999, 'xyz'), '1999');
  });
});

// ── formatWithCode ──────────────────────────

describe('formatWithCode', () => {
  it('formats with code suffix', () => {
    assert.equal(formatWithCode(1999, 'usd'), '19.99 USD');
    assert.equal(formatWithCode(1000, 'jpy'), '1,000 JPY');
    assert.equal(formatWithCode(5000, 'bhd'), '5.000 BHD');
  });
});

// ── formatRecurring ─────────────────────────

describe('formatInterval', () => {
  it('is what formatRecurring appends, on its own', () => {
    assert.equal(formatInterval('month'), '/mo');
    assert.equal(formatInterval('year'), '/yr');
    assert.equal(formatInterval('week', 2), ' every 2 weeks');
    assert.equal(formatInterval(undefined), '');
    assert.equal(formatRecurring(999, 'gbp', 'month', 3), format(999, 'gbp') + formatInterval('month', 3));
  });
});

describe('formatRecurring', () => {
  it('monthly', () => {
    assert.equal(formatRecurring(999, 'usd', 'month'), 'US$9.99/mo');
  });

  it('yearly', () => {
    assert.equal(formatRecurring(2999, 'usd', 'year'), 'US$29.99/yr');
  });

  it('weekly', () => {
    assert.equal(formatRecurring(500, 'gbp', 'week'), '£5.00/wk');
  });

  it('daily', () => {
    assert.equal(formatRecurring(100, 'usd', 'day'), 'US$1.00/day');
  });

  it('every 3 months', () => {
    assert.equal(formatRecurring(999, 'usd', 'month', 3), 'US$9.99 every 3 months');
  });

  it('every 2 years', () => {
    assert.equal(formatRecurring(999, 'usd', 'year', 2), 'US$9.99 every 2 years');
  });

  it('every 2 weeks', () => {
    assert.equal(formatRecurring(500, 'usd', 'week', 2), 'US$5.00 every 2 weeks');
  });

  it('every 7 days', () => {
    assert.equal(formatRecurring(100, 'usd', 'day', 7), 'US$1.00 every 7 days');
  });

  it('interval count of 1 uses short suffix', () => {
    assert.equal(formatRecurring(999, 'usd', 'month', 1), 'US$9.99/mo');
  });

  it('zero-decimal currency', () => {
    assert.equal(formatRecurring(1000, 'jpy', 'month'), '¥1,000/mo');
    assert.equal(formatRecurring(12000, 'jpy', 'year'), '¥12,000/yr');
  });

  it('three-decimal currency', () => {
    assert.equal(formatRecurring(5000, 'bhd', 'month'), 'BD5.000/mo');
  });

  it('different currencies', () => {
    assert.equal(formatRecurring(999, 'eur', 'month'), '€9.99/mo');
    assert.equal(formatRecurring(999, 'cad', 'month'), 'C$9.99/mo');
    assert.equal(formatRecurring(4999, 'aud', 'year'), 'A$49.99/yr');
  });

  it('no interval returns plain format', () => {
    assert.equal(formatRecurring(999, 'usd', null), 'US$9.99');
    assert.equal(formatRecurring(999, 'usd', ''), 'US$9.99');
  });

  it('negative amounts', () => {
    assert.equal(formatRecurring(-999, 'usd', 'month'), '-US$9.99/mo');
  });

  it('zero amount', () => {
    assert.equal(formatRecurring(0, 'usd', 'month'), 'US$0.00/mo');
  });
});

describe('formatRecurring with display option', () => {
  it('display: short', () => {
    assert.equal(formatRecurring(999, 'usd', 'month', 1, { display: 'short' }), '$9.99/mo');
    assert.equal(formatRecurring(2999, 'usd', 'year', 1, { display: 'short' }), '$29.99/yr');
    assert.equal(formatRecurring(999, 'usd', 'month', 3, { display: 'short' }), '$9.99 every 3 months');
  });

  it('display: code', () => {
    assert.equal(formatRecurring(999, 'usd', 'month', 1, { display: 'code' }), 'USD 9.99/mo');
    assert.equal(formatRecurring(2999, 'usd', 'year', 1, { display: 'code' }), 'USD 29.99/yr');
    assert.equal(formatRecurring(999, 'usd', 'month', 3, { display: 'code' }), 'USD 9.99 every 3 months');
  });

  it('display: narrowSymbol', () => {
    assert.equal(formatRecurring(999, 'usd', 'month', 1, { display: 'narrowSymbol' }), '$9.99/mo');
  });

  it('legacy short: true', () => {
    assert.equal(formatRecurring(999, 'usd', 'month', 1, { short: true }), '$9.99/mo');
    assert.equal(formatRecurring(2999, 'usd', 'year', 1, { short: true }), '$29.99/yr');
    assert.equal(formatRecurring(999, 'usd', 'month', 3, { short: true }), '$9.99 every 3 months');
  });
});

// ── getSymbol ───────────────────────────────

describe('getSymbol', () => {
  it('returns correct symbols', () => {
    assert.equal(getSymbol('usd'), 'US$');
    assert.equal(getSymbol('gbp'), '£');
    assert.equal(getSymbol('eur'), '€');
    assert.equal(getSymbol('jpy'), '¥');
    assert.equal(getSymbol('thb'), '฿');
  });

  it('returns uppercase code for unknown', () => {
    assert.equal(getSymbol('xyz'), 'XYZ');
  });

  it('case insensitive', () => {
    assert.equal(getSymbol('USD'), getSymbol('usd'));
  });
});

describe('getSymbol with display option', () => {
  it('display: short', () => {
    assert.equal(getSymbol('usd', { display: 'short' }), '$');
    assert.equal(getSymbol('cad', { display: 'short' }), '$');
    assert.equal(getSymbol('gbp', { display: 'short' }), '£');
  });

  it('display: narrowSymbol', () => {
    assert.equal(getSymbol('usd', { display: 'narrowSymbol' }), '$');
    assert.equal(getSymbol('cad', { display: 'narrowSymbol' }), '$');
    assert.equal(getSymbol('gbp', { display: 'narrowSymbol' }), '£');
  });

  it('display: code', () => {
    assert.equal(getSymbol('usd', { display: 'code' }), 'USD');
    assert.equal(getSymbol('gbp', { display: 'code' }), 'GBP');
  });

  it('display: full', () => {
    assert.equal(getSymbol('usd', { display: 'full' }), 'US$');
    assert.equal(getSymbol('cad', { display: 'full' }), 'C$');
  });

  it('legacy short: true', () => {
    assert.equal(getSymbol('usd', { short: true }), '$');
  });
});

// ── getName ─────────────────────────────────

describe('getName', () => {
  it('returns display names', () => {
    assert.equal(getName('usd'), 'US Dollar');
    assert.equal(getName('gbp'), 'British Pound');
    assert.equal(getName('jpy'), 'Japanese Yen');
  });

  it('returns uppercase code for unknown', () => {
    assert.equal(getName('xyz'), 'XYZ');
  });
});

// ── getDecimals ─────────────────────────────

describe('getDecimals', () => {
  it('two-decimal', () => assert.equal(getDecimals('usd'), 2));
  it('zero-decimal', () => assert.equal(getDecimals('jpy'), 0));
  it('three-decimal', () => assert.equal(getDecimals('bhd'), 3));
  it('defaults to 2 for unknown', () => assert.equal(getDecimals('xyz'), 2));
});

// ── toSmallestUnit ──────────────────────────

describe('toSmallestUnit', () => {
  it('two-decimal currencies', () => {
    assert.equal(toSmallestUnit(19.99, 'usd'), 1999);
    assert.equal(toSmallestUnit(15.00, 'gbp'), 1500);
    assert.equal(toSmallestUnit(0.01, 'usd'), 1);
  });

  it('zero-decimal currencies', () => {
    assert.equal(toSmallestUnit(1000, 'jpy'), 1000);
  });

  it('three-decimal currencies', () => {
    assert.equal(toSmallestUnit(5.123, 'bhd'), 5123);
  });

  it('rounds correctly', () => {
    assert.equal(toSmallestUnit(19.999, 'usd'), 2000);
    assert.equal(toSmallestUnit(19.994, 'usd'), 1999);
  });
});

// ── fromSmallestUnit ────────────────────────

describe('fromSmallestUnit', () => {
  it('two-decimal currencies', () => {
    assert.equal(fromSmallestUnit(1999, 'usd'), 19.99);
    assert.equal(fromSmallestUnit(1500, 'gbp'), 15.00);
    assert.equal(fromSmallestUnit(1, 'usd'), 0.01);
  });

  it('zero-decimal currencies', () => {
    assert.equal(fromSmallestUnit(1000, 'jpy'), 1000);
  });

  it('three-decimal currencies', () => {
    assert.equal(fromSmallestUnit(5123, 'bhd'), 5.123);
  });
});

// ── isSupported ─────────────────────────────

describe('isSupported', () => {
  it('valid currencies', () => {
    assert.equal(isSupported('usd'), true);
    assert.equal(isSupported('gbp'), true);
    assert.equal(isSupported('jpy'), true);
  });

  it('invalid currencies', () => {
    assert.equal(isSupported('xyz'), false);
  });

  it('case insensitive', () => {
    assert.equal(isSupported('USD'), true);
    assert.equal(isSupported('usd'), true);
  });

  it('null/empty', () => {
    assert.equal(isSupported(null), false);
    assert.equal(isSupported(''), false);
  });
});

// ── isZeroDecimal ───────────────────────────

describe('isZeroDecimal', () => {
  it('zero-decimal currencies', () => {
    assert.equal(isZeroDecimal('jpy'), true);
    assert.equal(isZeroDecimal('krw'), true);
    assert.equal(isZeroDecimal('vnd'), true);
  });

  it('non-zero-decimal', () => {
    assert.equal(isZeroDecimal('usd'), false);
    assert.equal(isZeroDecimal('bhd'), false);
  });

  it('unknown', () => {
    assert.equal(isZeroDecimal('xyz'), false);
  });
});

// ── Currency Data Integrity ─────────────────

describe('currency data', () => {
  it('has 136 currencies', async () => {
    const { CURRENCIES } = await import('../src/currencies.js');
    assert.equal(Object.keys(CURRENCIES).length, 136);
  });

  it('all codes are uppercase 3 letters', async () => {
    const { CURRENCIES } = await import('../src/currencies.js');
    for (const code of Object.keys(CURRENCIES)) {
      assert.match(code, /^[A-Z]{3}$/);
    }
  });

  it('all currencies have required fields', async () => {
    const { CURRENCIES } = await import('../src/currencies.js');
    for (const [code, config] of Object.entries(CURRENCIES)) {
      assert.ok(config.name, `${code} missing name`);
      assert.ok(config.symbol, `${code} missing symbol`);
      assert.ok(typeof config.decimals === 'number', `${code} missing decimals`);
      assert.ok([0, 2, 3].includes(config.decimals), `${code} invalid decimals: ${config.decimals}`);
    }
  });
});
