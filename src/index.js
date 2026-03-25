/**
 * @arraypress/stripe-currencies
 *
 * Stripe currency formatting, conversion, and validation.
 * All 136 Stripe-supported currencies with symbols, decimals, and names.
 *
 * Functional API — no classes. Zero dependencies.
 * Works in Node.js, Cloudflare Workers, Deno, Bun, and browsers.
 *
 * @module @arraypress/stripe-currencies
 */

import { CURRENCIES } from './currencies.js';

// ── Internal Helper ─────────────────────────

function numberFormat(num, decimals) {
  const fixed = num.toFixed(decimals);
  const [intPart, decPart] = fixed.split('.');
  const withCommas = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return decPart !== undefined ? withCommas + '.' + decPart : withCommas;
}

function getConfig(currency) {
  if (!currency || typeof currency !== 'string') return null;
  return CURRENCIES[currency.toUpperCase()] || null;
}

// ── Formatting ──────────────────────────────

/**
 * Format an amount with currency symbol.
 *
 * Amount is in the smallest unit (cents, pence, etc.) as Stripe returns.
 *
 * @param {number} amount - Amount in smallest unit.
 * @param {string} currency - Currency code (e.g. 'usd', 'gbp', 'jpy').
 * @returns {string} Formatted string.
 *
 * @example
 * format(1999, 'usd')    // 'US$19.99'
 * format(1500, 'gbp')    // '£15.00'
 * format(1000, 'jpy')    // '¥1,000'
 * format(5000, 'bhd')    // 'BD5.000'
 * format(-1999, 'usd')   // '-US$19.99'
 * format(0, 'usd')       // 'US$0.00'
 */
export function format(amount, currency) {
  const config = getConfig(currency);
  if (!config) return String(amount);

  const isNegative = amount < 0;
  const abs = Math.abs(amount);

  let formatted;
  if (config.decimals === 0) {
    formatted = numberFormat(abs, 0);
  } else {
    formatted = numberFormat(abs / Math.pow(10, config.decimals), config.decimals);
  }

  return (isNegative ? '-' : '') + config.symbol + formatted;
}

/**
 * Format amount without currency symbol.
 *
 * @param {number} amount - Amount in smallest unit.
 * @param {string} currency - Currency code.
 * @returns {string} Formatted number (e.g. '19.99', '1,000').
 *
 * @example
 * formatPlain(1999, 'usd')   // '19.99'
 * formatPlain(1000, 'jpy')   // '1,000'
 */
export function formatPlain(amount, currency) {
  const config = getConfig(currency);
  if (!config) return String(amount);

  if (config.decimals === 0) {
    return numberFormat(amount, 0);
  }
  return numberFormat(amount / Math.pow(10, config.decimals), config.decimals);
}

/**
 * Format with currency code instead of symbol.
 *
 * @param {number} amount - Amount in smallest unit.
 * @param {string} currency - Currency code.
 * @returns {string} E.g. '19.99 USD', '1,000 JPY'.
 *
 * @example
 * formatWithCode(1999, 'usd')   // '19.99 USD'
 * formatWithCode(1000, 'jpy')   // '1,000 JPY'
 */
export function formatWithCode(amount, currency) {
  return formatPlain(amount, currency) + ' ' + (currency || '').toUpperCase();
}

// ── Currency Data ───────────────────────────

/**
 * Get the currency symbol.
 *
 * @param {string} currency - Currency code.
 * @returns {string} Symbol or uppercase code if not found.
 *
 * @example
 * getSymbol('usd')   // 'US$'
 * getSymbol('gbp')   // '£'
 */
export function getSymbol(currency) {
  return getConfig(currency)?.symbol || (currency || '').toUpperCase();
}

/**
 * Get the currency display name.
 *
 * @param {string} currency - Currency code.
 * @returns {string} Name or uppercase code if not found.
 *
 * @example
 * getName('usd')   // 'US Dollar'
 * getName('gbp')   // 'British Pound'
 */
export function getName(currency) {
  return getConfig(currency)?.name || (currency || '').toUpperCase();
}

/**
 * Get the number of decimal places Stripe expects.
 *
 * @param {string} currency - Currency code.
 * @returns {number} Decimal places (0, 2, or 3).
 *
 * @example
 * getDecimals('usd')   // 2
 * getDecimals('jpy')   // 0
 * getDecimals('bhd')   // 3
 */
export function getDecimals(currency) {
  return getConfig(currency)?.decimals ?? 2;
}

// ── Conversion ──────────────────────────────

/**
 * Convert a decimal amount to the smallest unit for Stripe.
 *
 * @param {number} amount - Decimal amount (e.g. 19.99).
 * @param {string} currency - Currency code.
 * @returns {number} Integer in smallest unit (e.g. 1999).
 *
 * @example
 * toSmallestUnit(19.99, 'usd')   // 1999
 * toSmallestUnit(1000, 'jpy')    // 1000
 */
export function toSmallestUnit(amount, currency) {
  const decimals = getDecimals(currency);
  return Math.round(amount * Math.pow(10, decimals));
}

/**
 * Convert from smallest unit to decimal amount.
 *
 * @param {number} amount - Amount in smallest unit (e.g. 1999).
 * @param {string} currency - Currency code.
 * @returns {number} Decimal amount (e.g. 19.99).
 *
 * @example
 * fromSmallestUnit(1999, 'usd')   // 19.99
 * fromSmallestUnit(1000, 'jpy')   // 1000
 */
export function fromSmallestUnit(amount, currency) {
  const decimals = getDecimals(currency);
  if (decimals === 0) return amount;
  return amount / Math.pow(10, decimals);
}

// ── Validation ──────────────────────────────

/**
 * Check if a currency is supported by Stripe.
 *
 * @param {string} currency - Currency code.
 * @returns {boolean}
 *
 * @example
 * isSupported('usd')   // true
 * isSupported('xyz')   // false
 */
export function isSupported(currency) {
  return getConfig(currency) !== null;
}

/**
 * Check if a currency is zero-decimal.
 *
 * @param {string} currency - Currency code.
 * @returns {boolean}
 *
 * @example
 * isZeroDecimal('jpy')   // true
 * isZeroDecimal('usd')   // false
 */
export function isZeroDecimal(currency) {
  return getConfig(currency)?.decimals === 0;
}
