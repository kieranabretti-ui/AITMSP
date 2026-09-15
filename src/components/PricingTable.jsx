import { Fragment } from 'react'
import { FEATURE_GROUPS, TIERS, formatGBP } from '../lib/pricing.js'

function Check({ on }) {
  if (!on) {
    return (
      <span className="block text-center text-stone-dark" aria-hidden="true">
        —
      </span>
    )
  }
  return (
    <svg
      className="mx-auto h-5 w-5 text-petrol"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 10.5l3.5 3.5L16 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function PricingTable() {
  return (
    <div>
      <p className="mb-3 font-mono text-xs uppercase tracking-wideish text-slate sm:hidden">
        Swipe to compare all tiers →
      </p>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left">
        <caption className="sr-only">Feature comparison across Bronze, Silver and Gold plans</caption>
        <thead>
          <tr>
            <th scope="col" className="w-[38%] pb-6 pr-4 align-bottom font-body text-sm font-normal text-slate">
              Included in every plan
            </th>
            {TIERS.map((tier) => (
              <th
                key={tier.id}
                scope="col"
                className={`relative w-[20%] px-4 pb-6 align-bottom text-center ${
                  tier.recommended ? 'rounded-t-sm bg-petrol/[0.06] pt-7' : ''
                }`}
              >
                {tier.recommended && (
                  <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brass px-3 py-1 font-mono text-[10px] uppercase tracking-wideish text-ink whitespace-nowrap">
                    Most chosen
                  </span>
                )}
                <p className="font-display text-xl font-semibold text-ink">{tier.name}</p>
                <p className="mt-1 font-mono text-sm text-slate">{formatGBP(tier.price)} / device / mo</p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {FEATURE_GROUPS.map((group) => (
            <Fragment key={group.group}>
              <tr className="border-t border-stone">
                <th
                  scope="colgroup"
                  colSpan={4}
                  className="pb-2 pt-6 text-left font-mono text-xs uppercase tracking-wideish text-brass-dark"
                >
                  {group.group}
                </th>
              </tr>
              {group.rows.map((row) => (
                <tr key={row.label} className="border-t border-stone/60">
                  <td className="py-3 pr-4 text-[15px] text-ink/85">
                    {row.label}
                    {row.note && (
                      <span className="ml-2 text-xs text-brass-dark">{row.note}</span>
                    )}
                  </td>
                  <td className="py-3 text-center">
                    <Check on={row.bronze} />
                  </td>
                  <td className="bg-petrol/[0.06] py-3 text-center">
                    <Check on={row.silver} />
                  </td>
                  <td className="py-3 text-center">
                    <Check on={row.gold} />
                  </td>
                </tr>
              ))}
            </Fragment>
          ))}
        </tbody>
        </table>
      </div>
    </div>
  )
}
