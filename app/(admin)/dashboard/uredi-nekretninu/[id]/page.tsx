'use client'

import PropertyForm from "@/components/PropertyForm";
import { getProperty } from "@/libs/actions/editProperty";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface EditPropertyPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function EditPropertyPage({
  params,
}: EditPropertyPageProps) {
  const router = useRouter();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProperty() {
      const { id } = await params;
      const result = await getProperty(id);

      if (result.error || !result.data) {
        router.push("/properties");
        return;
      }

      setProperty(result.data);
      setLoading(false);
    }

    loadProperty();
  }, [params, router]);

  const handleSuccess = () => {
    router.push("/nekretnine");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <PropertyForm
          property={property}
          isEditing={true}
          onSuccess={handleSuccess}
        />
      </div>
    </div>
  );
}