'use client'

import PropertyForm from '@/components/PropertyForm'
import { useRouter } from 'next/navigation'

export default function AddPropertyPage() {
  const router = useRouter()
  
  const handleSuccess = () => {
    router.push('/properties')
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        <PropertyForm onSuccess={handleSuccess} />
      </div>
    </div>
  )
}