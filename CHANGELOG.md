# Changelog

All notable changes to `@arraypress/stripe-currencies` are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.4.0] — 2026-10-11

### Added

- `format(amount, currency, { locale })` — a BCP 47 tag (`'de'`, `'pt-BR'`) formats with
  `Intl.NumberFormat` in that language: `format(1999, 'eur', { locale: 'de' })` → `'19,99 €'`.
  The amount keeps Stripe's decimals for the currency, so zero-decimal currencies stay whole and
  those where Stripe and ISO disagree (ISK, HUF, UGX and others) still show two. `display` maps to
  Intl's `currencyDisplay`: `'code'` → `'code'`, `'short'` and `'narrowSymbol'` → `'narrowSymbol'`,
  `'full'` → `'symbol'`. A locale or currency the runtime doesn't know falls back to the default
  formatting. `formatRecurring()` passes it through; its interval suffix stays English.
  Without `locale`, output is unchanged.
