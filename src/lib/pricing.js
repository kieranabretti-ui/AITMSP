export const TIERS = [
  {
    id: 'silver',
    name: 'Silver',
    price: 15,
    tagline: '24/7 monitoring and management, around the clock.',
    recommended: false,
    features: [
      'Security patching for Windows, macOS and common apps',
      'Antivirus and endpoint protection, centrally managed',
      'IT asset and licence inventory',
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
    recommended: true,
    features: [
      'Everything in Silver',
      'Microsoft 365 / Google Workspace protection and backup',
      'Priority incident response [PLACEHOLDER: confirm exact response-time commitment]',
      'Quarterly strategic security review with a named contact',
      'Annual cybersecurity posture assessment',
    ],
  },
  {
    id: 'platinum',
    name: 'Platinum',
    price: 25,
    tagline: 'Everything in Gold, plus proactive awareness and escalation.',
    recommended: false,
    features: [
      'Everything in Gold',
      'Detailed security reporting every month',
      'Phishing simulation and cyber awareness training',
      'Priority security escalation',
    ],
  },
]

export const FEATURE_GROUPS = [
  {
    group: 'Security fundamentals',
    rows: [
      { label: 'Antivirus and endpoint protection', silver: true, gold: true, platinum: true },
      { label: 'Security patch management', silver: true, gold: true, platinum: true },
      { label: 'IT asset and licence inventory', silver: true, gold: true, platinum: true },
    ],
  },
  {
    group: 'Monitoring & management',
    rows: [
      { label: '24/7 monitored device management', silver: true, gold: true, platinum: true },
      { label: 'Extended monitoring — servers, switches, Wi-Fi', silver: true, gold: true, platinum: true },
      { label: 'Out-of-hours alerting for critical failures', silver: true, gold: true, platinum: true },
      { label: 'Monthly patch and security report', silver: true, gold: true, platinum: true },
      { label: 'Expanded reporting pack (device health, alerts)', silver: true, gold: true, platinum: true },
    ],
  },
  {
    group: 'Cybersecurity',
    rows: [
      { label: '24/7 monitored cybersecurity (SOC-backed)', silver: true, gold: true, platinum: true },
      { label: 'Advanced endpoint detection and response (EDR)', silver: true, gold: true, platinum: true },
      { label: 'Microsoft 365 / Google Workspace protection and backup', silver: false, gold: true, platinum: true },
      { label: 'Annual cybersecurity posture assessment', silver: false, gold: true, platinum: true },
    ],
  },
  {
    group: 'Backup & strategy',
    rows: [
      { label: 'Monthly backup verification checks', silver: true, gold: true, platinum: true },
      { label: 'Priority incident response', silver: false, gold: true, platinum: true, note: '[PLACEHOLDER: exact response-time commitment]' },
      { label: 'Quarterly strategic security review', silver: false, gold: true, platinum: true },
    ],
  },
  {
    group: 'Security awareness & reporting',
    rows: [
      { label: 'Detailed security reporting every month', silver: false, gold: false, platinum: true },
      { label: 'Phishing simulation and cyber awareness training', silver: false, gold: false, platinum: true },
      { label: 'Priority security escalation', silver: false, gold: false, platinum: true },
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
