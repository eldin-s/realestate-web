import PropertyForm from "@/components/PropertyForm";
import { getProperty } from "@/libs/actions/editProperty";
import { redirect } from "next/navigation";

interface EditPropertyPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditPropertyPage({
  params,
}: EditPropertyPageProps) {
  const { id } = await params;
  const result = await getProperty(id);

  if (result.error || !result.data) {
    redirect("/properties");
  }

  const handleSuccess = () => {
    redirect("/properties");
  };

  if (!result.data) {
    return <div>Property not found</div>;
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
  );
}