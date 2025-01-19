'use client'

import { useState } from 'react'
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

const PricingTier = ({ name, price, features, isPopular = false }:any) => (
  <div className={`flex flex-col p-6 bg-white rounded-lg shadow-lg ${isPopular ? 'border-2 border-primary' : ''}`}>
    <h3 className="text-2xl font-bold mb-4">{name}</h3>
    <div className="text-4xl font-bold mb-6">${price}<span className="text-lg font-normal">/mo</span></div>
    <ul className="mb-6 space-y-2">
      {features.map((feature:any, index:any) => (
        <li key={index} className="flex items-center">
          <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <button className={`mt-auto py-2 px-4 rounded-md ${isPopular ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'} hover:opacity-90 transition-opacity`}>
      Choose Plan
    </button>
  </div>
)

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)

  const pricingTiers = [
    {
      name: 'Basic',
      monthlyPrice: 9,
      yearlyPrice: 90,
      features: ['1 user', '10 projects', 'Basic support', '1GB storage']
    },
    {
      name: 'Pro',
      monthlyPrice: 19,
      yearlyPrice: 190,
      features: ['5 users', 'Unlimited projects', 'Priority support', '10GB storage'],
      isPopular: true
    },
    {
      name: 'Enterprise',
      monthlyPrice: 49,
      yearlyPrice: 490,
      features: ['Unlimited users', 'Unlimited projects', '24/7 support', '100GB storage']
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the plan that{"'"}s right for you
          </p>
        </div>

        <div className="mt-12 flex justify-center items-center space-x-4">
          <Label htmlFor="billing-toggle">Monthly</Label>
          <Switch
            id="billing-toggle"
            checked={isYearly}
            onCheckedChange={setIsYearly}
          />
          <Label htmlFor="billing-toggle">Yearly (Save 20%)</Label>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <PricingTier
              key={index}
              name={tier.name}
              price={isYearly ? Math.floor(tier.yearlyPrice / 12) : tier.monthlyPrice}
              features={tier.features}
              isPopular={tier.isPopular}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
