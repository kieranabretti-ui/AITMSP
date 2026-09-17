import { useId, useState } from 'react'
import { TIERS, ADDONS, monthlyCost, formatGBP } from '../lib/pricing.js'
import { useCountUp } from '../lib/useCountUp.js'

const MIN = 1
const MAX = 250
const DEFAULT = 12
const PREMIUM_SLA = ADDONS.find((a) => a.id === 'premium-sla')

function TierCard({ tier, devices, addPremiumSla }) {
  const perDevice = tier.price + (addPremiumSla ? PREMIUM_SLA.price : 0)
  const target = monthlyCost(perDevice, devices)
  const animated = useCountUp(target)

  return (
    <div
      className={`corner-frame relative rounded-[10px] border p-5 transition-colors duration-300 ${
        tier.recommended
          ? 'border-petrol bg-petrol text-paper'
          : 'border-stone-dark bg-white text-ink'
      }`}
    >
      {tier.recommended && (
        <span className="absolute -top-3 left-5 rounded-full bg-brass px-3 py-1 font-mono text-[10px] uppercase tracking-wideish text-ink">
          Most chosen
        </span>
      )}
      <p
        className={`font-mono text-xs uppercase tracking-wideish ${
          tier.recommended ? 'text-paper/70' : 'text-slate'
        }`}
      >
        {tier.name}
      </p>
      <p className="mt-2 font-display text-3xl font-semibold tabular-nums">
        {formatGBP(animated)}
        <span
          className={`ml-1 font-body text-sm font-normal ${
            tier.recommended ? 'text-paper/70' : 'text-slate'
          }`}
        >
          /month
        </span>
      </p>
      <p
        className={`mt-1 text-xs ${
          tier.recommended ? 'text-paper/60' : 'text-slate'
        }`}
      >
        {formatGBP(tier.price)} per device
        {addPremiumSla && ` + ${formatGBP(PREMIUM_SLA.price)} Premium SLA`}
      </p>
    </div>
  )
}

export default function PricingCalculator({ compact = false }) {
  const [devices, setDevices] = useState(DEFAULT)
  const [addPremiumSla, setAddPremiumSla] = useState(false)
  const sliderId = useId()
  const numberId = useId()
  const slaToggleId = useId()

  function handleChange(value) {
    const n = Number(value)
    if (Number.isNaN(n)) return
    setDevices(Math.min(MAX, Math.max(0, n)))
  }

  return (
    <div className={compact ? '' : 'rounded-[10px] border border-stone bg-white/50 p-6 md:p-8'}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <label htmlFor={sliderId} className="eyebrow block">
            Devices to cover
          </label>
          <p className="mt-1 text-sm text-slate">
            Laptops, desktops and servers you need supported.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <input
            id={numberId}
            type="number"
            inputMode="numeric"
            min={MIN}
            max={MAX}
            value={devices}
            onChange={(e) => handleChange(e.target.value)}
            className="w-20 rounded-[6px] border border-stone-dark bg-white px-3 py-2 text-right font-mono text-lg tabular-nums text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-petrol"
            aria-label="Number of devices"
          />
          <span className="text-sm text-slate">devices</span>
        </div>
      </div>

      <input
        id={sliderId}
        type="range"
        min={MIN}
        max={MAX}
        step={1}
        value={devices}
        onChange={(e) => handleChange(e.target.value)}
        className="mt-5 w-full accent-petrol"
        aria-label="Devices slider"
      />

      <div className="mt-6 flex items-start gap-3 rounded-[10px] border border-stone-dark bg-white px-4 py-3.5">
        <button
          id={slaToggleId}
          type="button"
          role="switch"
          aria-checked={addPremiumSla}
          onClick={() => setAddPremiumSla((v) => !v)}
          className={`relative mt-0.5 h-6 w-11 shrink-0 rounded-full transition-colors duration-200 ${
            addPremiumSla ? 'bg-petrol' : 'bg-stone-dark'
          }`}
        >
          <span
            className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200 ease-back ${
              addPremiumSla ? 'translate-x-[22px]' : 'translate-x-0.5'
            }`}
          />
        </button>
        <label htmlFor={slaToggleId} className="cursor-pointer">
          <span className="block text-[15px] font-medium text-ink">
            Add {PREMIUM_SLA.name} ({formatGBP(PREMIUM_SLA.price)}/device/month)
          </span>
          <span className="mt-0.5 block text-sm text-slate">{PREMIUM_SLA.detail}</span>
        </label>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {TIERS.map((tier) => (
          <TierCard key={tier.id} tier={tier} devices={devices} addPremiumSla={addPremiumSla} />
        ))}
      </div>
      <p className="mt-4 text-xs text-slate">
        Estimates exclude VAT and are billed monthly. Minimum device counts
        and annual terms may apply — see full terms on request.
      </p>
    </div>
  )
}
