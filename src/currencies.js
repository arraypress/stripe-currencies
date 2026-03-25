/**
 * Stripe Supported Currencies
 *
 * Complete list of all 136 Stripe-supported currencies with configuration.
 *
 * The `decimals` value reflects what Stripe's API expects, not necessarily
 * the currency's logical decimal places. Some currencies (ISK, UGX) are
 * logically zero-decimal but Stripe requires two-decimal representation
 * for backward compatibility.
 *
 * @link https://stripe.com/docs/currencies
 */
export const CURRENCIES = {

  // ── Major Currencies ────────────────────────

  USD: { name: 'US Dollar', symbol: 'US$', decimals: 2, locale: 'en_US', country: 'US', countryName: 'United States' },
  EUR: { name: 'Euro', symbol: '€', decimals: 2, locale: 'de_DE', country: 'EU', countryName: 'Eurozone' },
  GBP: { name: 'British Pound', symbol: '£', decimals: 2, locale: 'en_GB', country: 'GB', countryName: 'United Kingdom' },
  JPY: { name: 'Japanese Yen', symbol: '¥', decimals: 0, locale: 'ja_JP', country: 'JP', countryName: 'Japan' },
  CNY: { name: 'Chinese Yuan', symbol: '¥', decimals: 2, locale: 'zh_CN', country: 'CN', countryName: 'China' },

  // ── Americas ────────────────────────────────

  CAD: { name: 'Canadian Dollar', symbol: 'C$', decimals: 2, locale: 'en_CA', country: 'CA', countryName: 'Canada' },
  MXN: { name: 'Mexican Peso', symbol: '$', decimals: 2, locale: 'es_MX', country: 'MX', countryName: 'Mexico' },
  BRL: { name: 'Brazilian Real', symbol: 'R$', decimals: 2, locale: 'pt_BR', country: 'BR', countryName: 'Brazil' },
  ARS: { name: 'Argentine Peso', symbol: '$', decimals: 2, locale: 'es_AR', country: 'AR', countryName: 'Argentina' },
  COP: { name: 'Colombian Peso', symbol: '$', decimals: 2, locale: 'es_CO', country: 'CO', countryName: 'Colombia' },
  PEN: { name: 'Peruvian Sol', symbol: 'S/', decimals: 2, locale: 'es_PE', country: 'PE', countryName: 'Peru' },
  CLP: { name: 'Chilean Peso', symbol: '$', decimals: 0, locale: 'es_CL', country: 'CL', countryName: 'Chile' },
  UYU: { name: 'Uruguayan Peso', symbol: '$U', decimals: 2, locale: 'es_UY', country: 'UY', countryName: 'Uruguay' },
  PYG: { name: 'Paraguayan Guarani', symbol: '₲', decimals: 0, locale: 'es_PY', country: 'PY', countryName: 'Paraguay' },
  BOB: { name: 'Bolivian Boliviano', symbol: 'Bs', decimals: 2, locale: 'es_BO', country: 'BO', countryName: 'Bolivia' },
  CRC: { name: 'Costa Rican Colón', symbol: '₡', decimals: 2, locale: 'es_CR', country: 'CR', countryName: 'Costa Rica' },
  DOP: { name: 'Dominican Peso', symbol: 'RD$', decimals: 2, locale: 'es_DO', country: 'DO', countryName: 'Dominican Republic' },
  GTQ: { name: 'Guatemalan Quetzal', symbol: 'Q', decimals: 2, locale: 'es_GT', country: 'GT', countryName: 'Guatemala' },
  HNL: { name: 'Honduran Lempira', symbol: 'L', decimals: 2, locale: 'es_HN', country: 'HN', countryName: 'Honduras' },
  NIO: { name: 'Nicaraguan Córdoba', symbol: 'C$', decimals: 2, locale: 'es_NI', country: 'NI', countryName: 'Nicaragua' },
  PAB: { name: 'Panamanian Balboa', symbol: 'B/', decimals: 2, locale: 'es_PA', country: 'PA', countryName: 'Panama' },

  // ── Europe (Non-Euro) ──────────────────────

  CHF: { name: 'Swiss Franc', symbol: 'CHF', decimals: 2, locale: 'de_CH', country: 'CH', countryName: 'Switzerland' },
  SEK: { name: 'Swedish Krona', symbol: 'kr', decimals: 2, locale: 'sv_SE', country: 'SE', countryName: 'Sweden' },
  DKK: { name: 'Danish Krone', symbol: 'kr', decimals: 2, locale: 'da_DK', country: 'DK', countryName: 'Denmark' },
  NOK: { name: 'Norwegian Krone', symbol: 'kr', decimals: 2, locale: 'nb_NO', country: 'NO', countryName: 'Norway' },
  ISK: { name: 'Icelandic Króna', symbol: 'kr', decimals: 2, locale: 'is_IS', country: 'IS', countryName: 'Iceland' },
  PLN: { name: 'Polish Złoty', symbol: 'zł', decimals: 2, locale: 'pl_PL', country: 'PL', countryName: 'Poland' },
  CZK: { name: 'Czech Koruna', symbol: 'Kč', decimals: 2, locale: 'cs_CZ', country: 'CZ', countryName: 'Czechia' },
  HUF: { name: 'Hungarian Forint', symbol: 'Ft', decimals: 2, locale: 'hu_HU', country: 'HU', countryName: 'Hungary' },
  RON: { name: 'Romanian Leu', symbol: 'lei', decimals: 2, locale: 'ro_RO', country: 'RO', countryName: 'Romania' },
  BGN: { name: 'Bulgarian Lev', symbol: 'лв', decimals: 2, locale: 'bg_BG', country: 'BG', countryName: 'Bulgaria' },
  RSD: { name: 'Serbian Dinar', symbol: 'din', decimals: 2, locale: 'sr_RS', country: 'RS', countryName: 'Serbia' },
  MKD: { name: 'Macedonian Denar', symbol: 'ден', decimals: 2, locale: 'mk_MK', country: 'MK', countryName: 'North Macedonia' },
  MDL: { name: 'Moldovan Leu', symbol: 'L', decimals: 2, locale: 'ro_MD', country: 'MD', countryName: 'Moldova' },
  UAH: { name: 'Ukrainian Hryvnia', symbol: '₴', decimals: 2, locale: 'uk_UA', country: 'UA', countryName: 'Ukraine' },
  GEL: { name: 'Georgian Lari', symbol: '₾', decimals: 2, locale: 'ka_GE', country: 'GE', countryName: 'Georgia' },
  ALL: { name: 'Albanian Lek', symbol: 'L', decimals: 2, locale: 'sq_AL', country: 'AL', countryName: 'Albania' },
  BAM: { name: 'Bosnia-Herzegovina Convertible Mark', symbol: 'KM', decimals: 2, locale: 'bs_BA', country: 'BA', countryName: 'Bosnia and Herzegovina' },

  // ── Asia-Pacific ────────────────────────────

  HKD: { name: 'Hong Kong Dollar', symbol: 'HK$', decimals: 2, locale: 'zh_HK', country: 'HK', countryName: 'Hong Kong' },
  TWD: { name: 'New Taiwan Dollar', symbol: 'NT$', decimals: 2, locale: 'zh_TW', country: 'TW', countryName: 'Taiwan' },
  KRW: { name: 'South Korean Won', symbol: '₩', decimals: 0, locale: 'ko_KR', country: 'KR', countryName: 'South Korea' },
  SGD: { name: 'Singapore Dollar', symbol: 'S$', decimals: 2, locale: 'en_SG', country: 'SG', countryName: 'Singapore' },
  THB: { name: 'Thai Baht', symbol: '฿', decimals: 2, locale: 'th_TH', country: 'TH', countryName: 'Thailand' },
  MYR: { name: 'Malaysian Ringgit', symbol: 'RM', decimals: 2, locale: 'ms_MY', country: 'MY', countryName: 'Malaysia' },
  PHP: { name: 'Philippine Peso', symbol: '₱', decimals: 2, locale: 'en_PH', country: 'PH', countryName: 'Philippines' },
  IDR: { name: 'Indonesian Rupiah', symbol: 'Rp', decimals: 2, locale: 'id_ID', country: 'ID', countryName: 'Indonesia' },
  VND: { name: 'Vietnamese Đồng', symbol: '₫', decimals: 0, locale: 'vi_VN', country: 'VN', countryName: 'Vietnam' },
  INR: { name: 'Indian Rupee', symbol: '₹', decimals: 2, locale: 'en_IN', country: 'IN', countryName: 'India' },
  PKR: { name: 'Pakistani Rupee', symbol: '₨', decimals: 2, locale: 'ur_PK', country: 'PK', countryName: 'Pakistan' },
  BDT: { name: 'Bangladeshi Taka', symbol: '৳', decimals: 2, locale: 'bn_BD', country: 'BD', countryName: 'Bangladesh' },
  LKR: { name: 'Sri Lankan Rupee', symbol: 'Rs', decimals: 2, locale: 'si_LK', country: 'LK', countryName: 'Sri Lanka' },
  NPR: { name: 'Nepalese Rupee', symbol: '₨', decimals: 2, locale: 'ne_NP', country: 'NP', countryName: 'Nepal' },
  MMK: { name: 'Myanmar Kyat', symbol: 'K', decimals: 2, locale: 'my_MM', country: 'MM', countryName: 'Myanmar' },
  KHR: { name: 'Cambodian Riel', symbol: '៛', decimals: 2, locale: 'km_KH', country: 'KH', countryName: 'Cambodia' },
  LAK: { name: 'Lao Kip', symbol: '₭', decimals: 2, locale: 'lo_LA', country: 'LA', countryName: 'Laos' },
  MNT: { name: 'Mongolian Tögrög', symbol: '₮', decimals: 2, locale: 'mn_MN', country: 'MN', countryName: 'Mongolia' },
  BND: { name: 'Brunei Dollar', symbol: '$', decimals: 2, locale: 'ms_BN', country: 'BN', countryName: 'Brunei' },
  PGK: { name: 'Papua New Guinean Kina', symbol: 'K', decimals: 2, locale: 'en_PG', country: 'PG', countryName: 'Papua New Guinea' },
  FJD: { name: 'Fijian Dollar', symbol: '$', decimals: 2, locale: 'en_FJ', country: 'FJ', countryName: 'Fiji' },
  SBD: { name: 'Solomon Islands Dollar', symbol: '$', decimals: 2, locale: 'en_SB', country: 'SB', countryName: 'Solomon Islands' },
  TOP: { name: 'Tongan Paʻanga', symbol: 'T$', decimals: 2, locale: 'to_TO', country: 'TO', countryName: 'Tonga' },
  VUV: { name: 'Vanuatu Vatu', symbol: 'VT', decimals: 0, locale: 'en_VU', country: 'VU', countryName: 'Vanuatu' },
  WST: { name: 'Samoan Tālā', symbol: 'WS$', decimals: 2, locale: 'en_WS', country: 'WS', countryName: 'Samoa' },
  MVR: { name: 'Maldivian Rufiyaa', symbol: 'Rf', decimals: 2, locale: 'dv_MV', country: 'MV', countryName: 'Maldives' },

  // ── Oceania ─────────────────────────────────

  AUD: { name: 'Australian Dollar', symbol: 'A$', decimals: 2, locale: 'en_AU', country: 'AU', countryName: 'Australia' },
  NZD: { name: 'New Zealand Dollar', symbol: 'NZ$', decimals: 2, locale: 'en_NZ', country: 'NZ', countryName: 'New Zealand' },

  // ── Middle East ─────────────────────────────

  AED: { name: 'United Arab Emirates Dirham', symbol: 'د.إ', decimals: 2, locale: 'ar_AE', country: 'AE', countryName: 'United Arab Emirates' },
  SAR: { name: 'Saudi Riyal', symbol: 'SR', decimals: 2, locale: 'ar_SA', country: 'SA', countryName: 'Saudi Arabia' },
  QAR: { name: 'Qatari Riyal', symbol: 'QR', decimals: 2, locale: 'ar_QA', country: 'QA', countryName: 'Qatar' },
  OMR: { name: 'Omani Rial', symbol: 'ر.ع.', decimals: 3, locale: 'ar_OM', country: 'OM', countryName: 'Oman' },
  KWD: { name: 'Kuwaiti Dinar', symbol: 'KD', decimals: 3, locale: 'ar_KW', country: 'KW', countryName: 'Kuwait' },
  BHD: { name: 'Bahraini Dinar', symbol: 'BD', decimals: 3, locale: 'ar_BH', country: 'BH', countryName: 'Bahrain' },
  JOD: { name: 'Jordanian Dinar', symbol: 'JD', decimals: 3, locale: 'ar_JO', country: 'JO', countryName: 'Jordan' },
  ILS: { name: 'Israeli New Shekel', symbol: '₪', decimals: 2, locale: 'he_IL', country: 'IL', countryName: 'Israel' },
  TRY: { name: 'Turkish Lira', symbol: '₺', decimals: 2, locale: 'tr_TR', country: 'TR', countryName: 'Turkey' },
  LBP: { name: 'Lebanese Pound', symbol: 'ل.ل', decimals: 2, locale: 'ar_LB', country: 'LB', countryName: 'Lebanon' },

  // ── Africa ──────────────────────────────────

  ZAR: { name: 'South African Rand', symbol: 'R', decimals: 2, locale: 'en_ZA', country: 'ZA', countryName: 'South Africa' },
  EGP: { name: 'Egyptian Pound', symbol: 'E£', decimals: 2, locale: 'ar_EG', country: 'EG', countryName: 'Egypt' },
  NGN: { name: 'Nigerian Naira', symbol: '₦', decimals: 2, locale: 'en_NG', country: 'NG', countryName: 'Nigeria' },
  KES: { name: 'Kenyan Shilling', symbol: 'KSh', decimals: 2, locale: 'en_KE', country: 'KE', countryName: 'Kenya' },
  GHS: { name: 'Ghanaian Cedi', symbol: '₵', decimals: 2, locale: 'en_GH', country: 'GH', countryName: 'Ghana' },
  MAD: { name: 'Moroccan Dirham', symbol: 'MAD', decimals: 2, locale: 'ar_MA', country: 'MA', countryName: 'Morocco' },
  TND: { name: 'Tunisian Dinar', symbol: 'DT', decimals: 3, locale: 'ar_TN', country: 'TN', countryName: 'Tunisia' },
  DZD: { name: 'Algerian Dinar', symbol: 'DA', decimals: 2, locale: 'ar_DZ', country: 'DZ', countryName: 'Algeria' },
  ETB: { name: 'Ethiopian Birr', symbol: 'Br', decimals: 2, locale: 'am_ET', country: 'ET', countryName: 'Ethiopia' },
  UGX: { name: 'Ugandan Shilling', symbol: 'USh', decimals: 2, locale: 'en_UG', country: 'UG', countryName: 'Uganda' },
  TZS: { name: 'Tanzanian Shilling', symbol: 'TSh', decimals: 2, locale: 'en_TZ', country: 'TZ', countryName: 'Tanzania' },
  RWF: { name: 'Rwandan Franc', symbol: 'FRw', decimals: 0, locale: 'rw_RW', country: 'RW', countryName: 'Rwanda' },
  MUR: { name: 'Mauritian Rupee', symbol: '₨', decimals: 2, locale: 'en_MU', country: 'MU', countryName: 'Mauritius' },
  SCR: { name: 'Seychellois Rupee', symbol: '₨', decimals: 2, locale: 'en_SC', country: 'SC', countryName: 'Seychelles' },
  MZN: { name: 'Mozambican Metical', symbol: 'MT', decimals: 2, locale: 'pt_MZ', country: 'MZ', countryName: 'Mozambique' },
  ZMW: { name: 'Zambian Kwacha', symbol: 'ZK', decimals: 2, locale: 'en_ZM', country: 'ZM', countryName: 'Zambia' },
  BWP: { name: 'Botswanan Pula', symbol: 'P', decimals: 2, locale: 'en_BW', country: 'BW', countryName: 'Botswana' },
  NAD: { name: 'Namibian Dollar', symbol: '$', decimals: 2, locale: 'en_NA', country: 'NA', countryName: 'Namibia' },
  SZL: { name: 'Swazi Lilangeni', symbol: 'L', decimals: 2, locale: 'en_SZ', country: 'SZ', countryName: 'Eswatini' },
  LSL: { name: 'Lesotho Loti', symbol: 'L', decimals: 2, locale: 'en_LS', country: 'LS', countryName: 'Lesotho' },
  MWK: { name: 'Malawian Kwacha', symbol: 'MK', decimals: 2, locale: 'en_MW', country: 'MW', countryName: 'Malawi' },
  AOA: { name: 'Angolan Kwanza', symbol: 'Kz', decimals: 2, locale: 'pt_AO', country: 'AO', countryName: 'Angola' },
  BIF: { name: 'Burundian Franc', symbol: 'FBu', decimals: 0, locale: 'rn_BI', country: 'BI', countryName: 'Burundi' },
  DJF: { name: 'Djiboutian Franc', symbol: 'Fdj', decimals: 0, locale: 'fr_DJ', country: 'DJ', countryName: 'Djibouti' },
  GNF: { name: 'Guinean Franc', symbol: 'FG', decimals: 0, locale: 'fr_GN', country: 'GN', countryName: 'Guinea' },
  KMF: { name: 'Comorian Franc', symbol: 'CF', decimals: 0, locale: 'fr_KM', country: 'KM', countryName: 'Comoros' },
  CDF: { name: 'Congolese Franc', symbol: 'FC', decimals: 2, locale: 'fr_CD', country: 'CD', countryName: 'Democratic Republic of the Congo' },
  MGA: { name: 'Malagasy Ariary', symbol: 'Ar', decimals: 0, locale: 'mg_MG', country: 'MG', countryName: 'Madagascar' },
  XAF: { name: 'Central African CFA Franc', symbol: 'FCFA', decimals: 0, locale: 'fr_CM', country: 'CM', countryName: 'Central Africa' },
  XOF: { name: 'West African CFA Franc', symbol: 'CFA', decimals: 0, locale: 'fr_SN', country: 'SN', countryName: 'West Africa' },

  // ── Caribbean ───────────────────────────────

  JMD: { name: 'Jamaican Dollar', symbol: 'J$', decimals: 2, locale: 'en_JM', country: 'JM', countryName: 'Jamaica' },
  TTD: { name: 'Trinidad & Tobago Dollar', symbol: 'TT$', decimals: 2, locale: 'en_TT', country: 'TT', countryName: 'Trinidad and Tobago' },
  BBD: { name: 'Barbadian Dollar', symbol: '$', decimals: 2, locale: 'en_BB', country: 'BB', countryName: 'Barbados' },
  BSD: { name: 'Bahamian Dollar', symbol: '$', decimals: 2, locale: 'en_BS', country: 'BS', countryName: 'Bahamas' },
  BZD: { name: 'Belize Dollar', symbol: 'BZ$', decimals: 2, locale: 'en_BZ', country: 'BZ', countryName: 'Belize' },
  BMD: { name: 'Bermudan Dollar', symbol: '$', decimals: 2, locale: 'en_BM', country: 'BM', countryName: 'Bermuda' },
  KYD: { name: 'Cayman Islands Dollar', symbol: '$', decimals: 2, locale: 'en_KY', country: 'KY', countryName: 'Cayman Islands' },
  XCD: { name: 'East Caribbean Dollar', symbol: '$', decimals: 2, locale: 'en_AG', country: 'AG', countryName: 'East Caribbean' },
  AWG: { name: 'Aruban Florin', symbol: 'ƒ', decimals: 2, locale: 'nl_AW', country: 'AW', countryName: 'Aruba' },
  ANG: { name: 'Netherlands Antillean Guilder', symbol: 'ƒ', decimals: 2, locale: 'nl_CW', country: 'CW', countryName: 'Curaçao' },
  HTG: { name: 'Haitian Gourde', symbol: 'G', decimals: 2, locale: 'fr_HT', country: 'HT', countryName: 'Haiti' },

  // ── Former Soviet States ────────────────────

  RUB: { name: 'Russian Ruble', symbol: '₽', decimals: 2, locale: 'ru_RU', country: 'RU', countryName: 'Russia' },
  KZT: { name: 'Kazakhstani Tenge', symbol: '₸', decimals: 2, locale: 'kk_KZ', country: 'KZ', countryName: 'Kazakhstan' },
  UZS: { name: 'Uzbekistani Som', symbol: 'лв', decimals: 2, locale: 'uz_UZ', country: 'UZ', countryName: 'Uzbekistan' },
  AZN: { name: 'Azerbaijani Manat', symbol: '₼', decimals: 2, locale: 'az_AZ', country: 'AZ', countryName: 'Azerbaijan' },
  AMD: { name: 'Armenian Dram', symbol: '֏', decimals: 2, locale: 'hy_AM', country: 'AM', countryName: 'Armenia' },
  KGS: { name: 'Kyrgystani Som', symbol: 'лв', decimals: 2, locale: 'ky_KG', country: 'KG', countryName: 'Kyrgyzstan' },
  TJS: { name: 'Tajikistani Somoni', symbol: 'SM', decimals: 2, locale: 'tg_TJ', country: 'TJ', countryName: 'Tajikistan' },
  TMT: { name: 'Turkmenistani Manat', symbol: 'T', decimals: 2, locale: 'tk_TM', country: 'TM', countryName: 'Turkmenistan' },

  // ── Other ───────────────────────────────────

  AFN: { name: 'Afghan Afghani', symbol: '؋', decimals: 2, locale: 'fa_AF', country: 'AF', countryName: 'Afghanistan' },
  XPF: { name: 'CFP Franc', symbol: '₣', decimals: 0, locale: 'fr_PF', country: 'PF', countryName: 'French Polynesia' },
  CVE: { name: 'Cape Verdean Escudo', symbol: '$', decimals: 2, locale: 'pt_CV', country: 'CV', countryName: 'Cape Verde' },
  GIP: { name: 'Gibraltar Pound', symbol: '£', decimals: 2, locale: 'en_GI', country: 'GI', countryName: 'Gibraltar' },
  GMD: { name: 'Gambian Dalasi', symbol: 'D', decimals: 2, locale: 'en_GM', country: 'GM', countryName: 'Gambia' },
  GYD: { name: 'Guyanaese Dollar', symbol: '$', decimals: 2, locale: 'en_GY', country: 'GY', countryName: 'Guyana' },
  LRD: { name: 'Liberian Dollar', symbol: '$', decimals: 2, locale: 'en_LR', country: 'LR', countryName: 'Liberia' },
  SLL: { name: 'Sierra Leonean Leone', symbol: 'Le', decimals: 2, locale: 'en_SL', country: 'SL', countryName: 'Sierra Leone' },
  SOS: { name: 'Somali Shilling', symbol: 'S', decimals: 2, locale: 'so_SO', country: 'SO', countryName: 'Somalia' },
  SRD: { name: 'Surinamese Dollar', symbol: '$', decimals: 2, locale: 'nl_SR', country: 'SR', countryName: 'Suriname' },
  STN: { name: 'São Tomé & Príncipe Dobra', symbol: 'Db', decimals: 2, locale: 'pt_ST', country: 'ST', countryName: 'São Tomé and Príncipe' },
};
