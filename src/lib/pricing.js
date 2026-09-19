export const TIERS = [
  {
    id: 'bronze',
    name: 'Bronze',
    price: 8,
    tagline: 'Core security hygiene, monitored during business hours.',
    recommended: false,
    features: [
      'Device monitoring and alerting, business hours (Mon–Fri)',
      'Security patching for Windows, macOS and common apps',
      'Antivirus and endpoint protection, centrally managed',
      'IT asset and licence inventory',
      'Monthly patch and security report',
    ],
  },
  {
    id: 'silver',
    name: 'Silver',
    price: 15,
    tagline: '24/7 monitoring and management, not just office hours.',
    recommended: true,
    features: [
      'Everything in Bronze',
      '24/7 monitored device management',
      '24/7 monitored cybersecurity (SOC-backed threat detection)',
      'Advanced endpoint detection and response (EDR)',
      'Extended monitoring — servers, network switches and Wi-Fi',
      'Out-of-hours alerting for critical failures',
      'Monthly backup verification checks',
      'Monthly reporting pack (patching, device health, alerts)',
    ],
  },
  {
    id: 'gold',
    name: 'Gold',
    price: 18,
    tagline: 'Full cybersecurity cover, watched around the clock.',
    recommended: false,
    features: [
      'Everything in Silver',
      'Microsoft 365 / Google Workspace protection and backup',
      'Priority incident response [PLACEHOLDER: confirm exact response-time commitment]',
      'Quarterly strategic security review with a named contact',
      'Annual cybersecurity posture assessment',
    ],
  },
]

export const FEATURE_GROUPS = [
  {
    group: 'Security fundamentals',
    rows: [
      { label: 'Antivirus and endpoint protection', bronze: true, silver: true, gold: true },
      { label: 'Security patch management', bronze: true, silver: true, gold: true },
      { label: 'IT asset and licence inventory', bronze: true, silver: true, gold: true },
    ],
  },
  {
    group: 'Monitoring & management',
    rows: [
      { label: 'Device monitoring and alerting, business hours', bronze: true, silver: true, gold: true },
      { label: '24/7 monitored device management', bronze: false, silver: true, gold: true },
      { label: 'Extended monitoring — servers, switches, Wi-Fi', bronze: false, silver: true, gold: true },
      { label: 'Out-of-hours alerting for critical failures', bronze: false, silver: true, gold: true },
      { label: 'Monthly patch and security report', bronze: true, silver: true, gold: true },
      { label: 'Expanded reporting pack (device health, alerts)', bronze: false, silver: true, gold: true },
    ],
  },
  {
    group: 'Cybersecurity',
    rows: [
      { label: '24/7 monitored cybersecurity (SOC-backed)', bronze: false, silver: true, gold: true },
      { label: 'Advanced endpoint detection and response (EDR)', bronze: false, silver: true, gold: true },
      { label: 'Microsoft 365 / Google Workspace protection and backup', bronze: false, silver: false, gold: true },
      { label: 'Annual cybersecurity posture assessment', bronze: false, silver: false, gold: true },
    ],
  },
  {
    group: 'Backup & strategy',
    rows: [
      { label: 'Monthly backup verification checks', bronze: false, silver: true, gold: true },
      { label: 'Priority incident response', bronze: false, silver: false, gold: true, note: '[PLACEHOLDER: exact response-time commitment]' },
      { label: 'Quarterly strategic security review', bronze: false, silver: false, gold: true },
    ],
  },
]

export const ADDONS = [
  {
    id: 'breakfix',
    name: 'Break-fix callout',
    cadence: 'Ad hoc',
    price: 60,
    unit: '/hour',
    detail: 'Billed in 15-minute increments. £80/hour on weekends.',
  },
  {
    id: 'premium-sla',
    name: 'Premium SLA',
    cadence: 'Monthly, per device',
    price: 10,
    unit: '/device/month',
    detail:
      'Day-to-day helpdesk tickets with a guaranteed response in under 6 hours, Monday to Friday, 8am–5pm. Added on top of any tier.',
  },
]

export function monthlyCost(pricePerDevice, deviceCount) {
  const count = Number.isFinite(deviceCount) && deviceCount > 0 ? deviceCount : 0
  return Math.round(pricePerDevice * count * 100) / 100
}

export function formatGBP(amount) {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: amount % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(amount)
}
