# @arraypress/stripe-currencies

Stripe currency formatting, conversion, and validation. All 136 Stripe-supported currencies with correct symbols,
decimal handling, and display names.

Zero dependencies. Works in Node.js, Cloudflare Workers, Deno, Bun, and browsers.

## Installation

```bash
npm install @arraypress/stripe-currencies
```

## Usage

```js
import {format, formatRecurring, formatPlain, formatWithCode} from '@arraypress/stripe-currencies';

// All amounts are in smallest unit (cents) — as Stripe returns them

// Format with symbol
format(1999, 'usd')     // 'US$19.99'
format(1500, 'gbp')     // '£15.00'
format(1000, 'jpy')     // '¥1,000'      (zero-decimal)
format(5000, 'bhd')     // 'BD5.000'     (three-decimal)
format(-1999, 'usd')    // '-US$19.99'

// Recurring/subscription prices
formatRecurring(999, 'usd', 'month')       // 'US$9.99/mo'
formatRecurring(2999, 'usd', 'year')       // 'US$29.99/yr'
formatRecurring(999, 'usd', 'month', 3)    // 'US$9.99 every 3 months'

// Without symbol
formatPlain(1999, 'usd')      // '19.99'

// With code
formatWithCode(1999, 'usd')   // '19.99 USD'
```

## API

### Formatting

All formatting functions take `amount` in the **smallest unit** (cents, pence, etc.) as Stripe returns.

| Function                      | Example       | Result        |
|-------------------------------|---------------|---------------|
| `format(1999, 'usd')`         | With symbol   | `'US$19.99'`  |
| `format(1000, 'jpy')`         | Zero-decimal  | `'¥1,000'`    |
| `format(5000, 'bhd')`         | Three-decimal | `'BD5.000'`   |
| `formatPlain(1999, 'usd')`    | No symbol     | `'19.99'`     |
| `formatWithCode(1999, 'usd')` | Code suffix   | `'19.99 USD'` |

### In another language

Pass `locale` (a BCP 47 tag) to format with `Intl.NumberFormat` in that language, still at Stripe's
decimals for the currency. `display` still applies: `'code'` shows the ISO code, `'short'` and
`'narrowSymbol'` the narrow symbol. An unknown locale falls back to the default formatting.

```js
format(1999, 'eur', { locale: 'de' })                     // '19,99 €'
format(1999, 'gbp', { locale: 'en' })                     // '£19.99'
format(1500, 'jpy', { locale: 'ja' })                     // '￥1,500'
format(123456, 'brl', { locale: 'pt-BR' })                // 'R$ 1.234,56'
format(1999, 'usd', { locale: 'de', display: 'code' })    // '19,99 USD'
formatRecurring(999, 'eur', 'month', 1, { locale: 'de' }) // '9,99 €/mo' (the suffix stays English)
```

### Recurring Prices

Format subscription/recurring prices with billing interval suffixes.

```js
import {formatRecurring} from '@arraypress/stripe-currencies';

// Standard intervals
formatRecurring(999, 'usd', 'month')       // 'US$9.99/mo'
formatRecurring(2999, 'usd', 'year')       // 'US$29.99/yr'
formatRecurring(500, 'gbp', 'week')        // '£5.00/wk'
formatRecurring(100, 'usd', 'day')         // 'US$1.00/day'

// Custom interval counts
formatRecurring(999, 'usd', 'month', 3)    // 'US$9.99 every 3 months'
formatRecurring(999, 'usd', 'year', 2)     // 'US$9.99 every 2 years'
formatRecurring(500, 'usd', 'week', 2)     // 'US$5.00 every 2 weeks'

// Zero-decimal currencies
formatRecurring(1000, 'jpy', 'month')      // '¥1,000/mo'

// The interval alone, for markup that keeps the amount in its own element
// (one a currency switcher rewrites): <span>£9.00</span><span>/mo</span>
formatInterval('month')                     // '/mo'
formatInterval('month', 3)                  // ' every 3 months'

// No interval returns plain format
formatRecurring(999, 'usd', null)          // 'US$9.99'
```

### Currency Data

```js
import {getSymbol, getName, getDecimals} from '@arraypress/stripe-currencies';

getSymbol('gbp')     // '£'
getName('eur')       // 'Euro'
getDecimals('jpy')   // 0
getDecimals('usd')   // 2
getDecimals('bhd')   // 3
```

### Conversion

Convert between decimal amounts and Stripe's smallest unit representation.

```js
import {toSmallestUnit, fromSmallestUnit} from '@arraypress/stripe-currencies';

toSmallestUnit(19.99, 'usd')    // 1999
toSmallestUnit(1000, 'jpy')     // 1000
toSmallestUnit(5.123, 'bhd')    // 5123

fromSmallestUnit(1999, 'usd')   // 19.99
fromSmallestUnit(1000, 'jpy')   // 1000
fromSmallestUnit(5123, 'bhd')   // 5.123
```

### Validation

```js
import {isSupported, isZeroDecimal} from '@arraypress/stripe-currencies';

isSupported('usd')     // true
isSupported('xyz')     // false

isZeroDecimal('jpy')   // true  (JPY, KRW, VND, etc.)
isZeroDecimal('usd')   // false
```

## Stripe Decimal Handling

Most currencies use 2 decimal places. Exceptions:

- **Zero-decimal (0):** JPY, KRW, CLP, PYG, VND, VUV, RWF, BIF, DJF, GNF, KMF, MGA, XAF, XOF, XPF
- **Three-decimal (3):** BHD, KWD, OMR, JOD, TND
- **Logically zero but Stripe uses 2:** ISK, UGX

## TypeScript

Full type definitions included.

```ts
import {format, formatRecurring, isSupported} from '@arraypress/stripe-currencies';

const price: string = format(1999, 'usd');
const monthly: string = formatRecurring(999, 'usd', 'month');
const valid: boolean = isSupported('gbp');
```

## License

MIT