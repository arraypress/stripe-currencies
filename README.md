# @arraypress/stripe-currencies

Stripe currency formatting, conversion, and validation. All 136 Stripe-supported currencies with correct symbols, decimal handling, and display names.

Zero dependencies. Works in Node.js, Cloudflare Workers, Deno, Bun, and browsers.

## Installation

```bash
npm install @arraypress/stripe-currencies
```

## Usage

```js
import { format, formatPlain, formatWithCode } from '@arraypress/stripe-currencies';

// All amounts are in smallest unit (cents) — as Stripe returns them

// Format with symbol
format(1999, 'usd')     // 'US$19.99'
format(1500, 'gbp')     // '£15.00'
format(1000, 'jpy')     // '¥1,000'      (zero-decimal)
format(5000, 'bhd')     // 'BD5.000'     (three-decimal)
format(-1999, 'usd')    // '-US$19.99'

// Without symbol
formatPlain(1999, 'usd')      // '19.99'

// With code
formatWithCode(1999, 'usd')   // '19.99 USD'
```

## API

### Formatting

All formatting functions take `amount` in the **smallest unit** (cents, pence, etc.) as Stripe returns.

| Function | Example | Result |
|---|---|---|
| `format(1999, 'usd')` | With symbol | `'US$19.99'` |
| `format(1000, 'jpy')` | Zero-decimal | `'¥1,000'` |
| `format(5000, 'bhd')` | Three-decimal | `'BD5.000'` |
| `formatPlain(1999, 'usd')` | No symbol | `'19.99'` |
| `formatWithCode(1999, 'usd')` | Code suffix | `'19.99 USD'` |

### Currency Data

```js
import { getSymbol, getName, getDecimals } from '@arraypress/stripe-currencies';

getSymbol('gbp')     // '£'
getName('eur')       // 'Euro'
getDecimals('jpy')   // 0
getDecimals('usd')   // 2
getDecimals('bhd')   // 3
```

### Conversion

Convert between decimal amounts and Stripe's smallest unit representation.

```js
import { toSmallestUnit, fromSmallestUnit } from '@arraypress/stripe-currencies';

toSmallestUnit(19.99, 'usd')    // 1999
toSmallestUnit(1000, 'jpy')     // 1000
toSmallestUnit(5.123, 'bhd')    // 5123

fromSmallestUnit(1999, 'usd')   // 19.99
fromSmallestUnit(1000, 'jpy')   // 1000
fromSmallestUnit(5123, 'bhd')   // 5.123
```

### Validation

```js
import { isSupported, isZeroDecimal } from '@arraypress/stripe-currencies';

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
import { format, isSupported } from '@arraypress/stripe-currencies';

const price: string = format(1999, 'usd');
const valid: boolean = isSupported('gbp');
```

## License

MIT
