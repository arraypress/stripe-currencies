/**
 * @arraypress/stripe-currencies — TypeScript definitions.
 */

export interface FormatOptions {
  /**
   * Symbol display mode:
   * - 'short' — bare symbol ('$' instead of 'US$', maps dollar-family to '$')
   * - 'narrowSymbol' — Intl narrow symbol (broadest coverage: '$', 'kr', '₩', etc.)
   * - 'code' — ISO code prefix ('USD 19.99')
   * - 'full' — full symbol (default: 'US$19.99', 'C$19.99')
   */
  display?: 'short' | 'narrowSymbol' | 'code' | 'full';

  /** @deprecated Use display: 'short' instead. Legacy alias for display: 'short'. */
  short?: boolean;

  /**
   * BCP 47 language tag ('de', 'pt-BR'): format with Intl.NumberFormat in that
   * language, at Stripe's decimals for the currency ('19,99 €', '￥1,500').
   * display maps to currencyDisplay: 'code' → 'code', 'short' and
   * 'narrowSymbol' → 'narrowSymbol', 'full' → 'symbol'. An unknown locale or
   * currency falls back to the default formatting.
   */
  locale?: string;
}

export interface SymbolOptions {
  /**
   * Symbol display mode:
   * - 'short' — bare symbol ('$' instead of 'US$')
   * - 'narrowSymbol' — Intl narrow symbol
   * - 'code' — ISO currency code ('USD')
   * - 'full' — full symbol (default: 'US$')
   */
  display?: 'short' | 'narrowSymbol' | 'code' | 'full';

  /** @deprecated Use display: 'short' instead. */
  short?: boolean;
}

/** Format an amount (in smallest unit) with currency symbol. */
export function format(amount: number, currency: string, options?: FormatOptions): string;

/** Format an amount without currency symbol. */
export function formatPlain(amount: number, currency: string): string;

/** Format an amount with currency code suffix (e.g. '19.99 USD'). */
export function formatWithCode(amount: number, currency: string): string;

/** Format a recurring/subscription price with interval suffix. */
export function formatRecurring(
  amount: number,
  currency: string,
  interval: 'day' | 'week' | 'month' | 'year',
  intervalCount?: number,
  options?: FormatOptions
): string;

/** A billing interval on its own, as formatRecurring() appends it ('/mo', ' every 3 months'); '' for none. */
export function formatInterval(interval?: 'day' | 'week' | 'month' | 'year' | null, intervalCount?: number): string;

/** Get the currency symbol (e.g. 'US$', '£', '¥'). Accepts display option. */
export function getSymbol(currency: string, options?: SymbolOptions): string;

/** Get the currency display name (e.g. 'US Dollar'). */
export function getName(currency: string): string;

/** Get the number of decimal places Stripe expects (0, 2, or 3). */
export function getDecimals(currency: string): number;

/** Convert a decimal amount to the smallest unit for Stripe. */
export function toSmallestUnit(amount: number, currency: string): number;

/** Convert from smallest unit to decimal amount. */
export function fromSmallestUnit(amount: number, currency: string): number;

/** Check if a currency is supported by Stripe. */
export function isSupported(currency: string): boolean;

/** Check if a currency is zero-decimal (JPY, KRW, etc.). */
export function isZeroDecimal(currency: string): boolean;

/** Get all supported currency codes as lowercase strings. */
export function getCodes(): string[];

/** Get all currencies with full details. */
export function getAll(): {
  code: string;
  name: string;
  symbol: string;
  decimals: number;
  country: string;
  countryName: string;
}[];

/** Popular currency codes — most commonly used in e-commerce. */
export const POPULAR_CODES: string[];
