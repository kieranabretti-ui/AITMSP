export const TIERS = [
  {
    id: 'bronze',
    name: 'Bronze',
    price: 8,
    tagline: 'Solid day-to-day support and monitoring.',
    recommended: false,
    features: [
      'Remote helpdesk, business hours (Mon–Fri)',
      'Unlimited support tickets, no per-call charges',
      '24/7 automated device monitoring',
      'Security patching for Windows, macOS and common apps',
      'Antivirus and endpoint protection, centrally managed',
      'IT asset and licence inventory',
    ],
  },
  {
    id: 'silver',
    name: 'Silver',
    price: 15,
    tagline: 'For teams that can’t afford to wait on a fix.',
    recommended: true,
    features: [
      'Everything in Bronze',
      'Priority response SLA [PLACEHOLDER: confirm exact response-time commitment]',
      'Extended monitoring — servers, network switches and Wi-Fi',
      'Out-of-hours alerting for critical failures',
      'Monthly backup verification checks',
      'Monthly reporting pack (tickets, patching, device health)',
    ],
  },
  {
    id: 'gold',
    name: 'Gold',
    price: 18,
    tagline: 'Full cybersecurity cover with a plan behind it.',
    recommended: false,
    features: [
      'Everything in Silver',
      '24/7 monitored cybersecurity (SOC-backed threat detection)',
      'Advanced endpoint detection and response (EDR)',
      'Priority support queue, ahead of Bronze and Silver',
      'Quarterly strategic IT review with a named contact',
      'Annual cybersecurity posture assessment',
    ],
  },
]

export const FEATURE_GROUPS = [
  {
    group: 'Helpdesk & support',
    rows: [
      { label: 'Remote helpdesk, business hours', bronze: true, silver: true, gold: true },
      { label: 'Unlimited tickets, no per-call charges', bronze: true, silver: true, gold: true },
      { label: 'Priority response SLA', bronze: false, silver: true, gold: true, note: '[PLACEHOLDER: exact SLA times]' },
      { label: 'Priority support queue', bronze: false, silver: false, gold: true },
    ],
  },
  {
    group: 'Monitoring & maintenance',
    rows: [
      { label: '24/7 automated device monitoring', bronze: true, silver: true, gold: true },
      { label: 'Extended monitoring — servers, switches, Wi-Fi', bronze: false, silver: true, gold: true },
      { label: 'Out-of-hours alerting for critical failures', bronze: false, silver: true, gold: true },
      { label: 'Security patch management', bronze: true, silver: true, gold: true },
      { label: 'IT asset and licence inventory', bronze: true, silver: true, gold: true },
    ],
  },
  {
    group: 'Cybersecurity',
    rows: [
      { label: 'Antivirus and endpoint protection', bronze: true, silver: true, gold: true },
      { label: '24/7 monitored cybersecurity (SOC-backed)', bronze: false, silver: false, gold: true },
      { label: 'Advanced endpoint detection and response (EDR)', bronze: false, silver: false, gold: true },
      { label: 'Annual cybersecurity posture assessment', bronze: false, silver: false, gold: true },
    ],
  },
  {
    group: 'Backup, reporting & strategy',
    rows: [
      { label: 'Monthly backup verification checks', bronze: false, silver: true, gold: true },
      { label: 'Monthly reporting pack', bronze: false, silver: true, gold: true },
      { label: 'Quarterly strategic IT review', bronze: false, silver: false, gold: true },
    ],
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
