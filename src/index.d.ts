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
