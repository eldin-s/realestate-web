'use client'

import PropertyForm from '@/components/PropertyForm'
import { redirect } from 'next/navigation'

export default function AddPropertyPage() {
  const handleSuccess = () => {
    redirect('/properties')
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        <PropertyForm onSuccess={handleSuccess} />
      </div>
    </div>
  )
}