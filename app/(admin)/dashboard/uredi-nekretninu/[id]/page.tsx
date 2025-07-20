import PropertyForm from '@/components/PropertyForm'
import { getProperty } from '@/libs/actions/editProperty'
import { redirect } from 'next/navigation'

interface EditPropertyPageProps {
  params: {
    id: string
  }
}

export default async function EditPropertyPage({ params }: EditPropertyPageProps) {
  const result = await getProperty(params.id)

  if (result.error || !result.data) {
    redirect('/properties')
  }

  const handleSuccess = () => {
    redirect('/properties')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <PropertyForm 
          property={result.data}
          isEditing={true}
          onSuccess={handleSuccess}
        />
      </div>
    </div>
  )
}