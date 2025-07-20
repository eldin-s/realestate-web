"use client";

import { useState } from "react";
import { createProperty } from "@/libs/actions/createProperty";
import { updateProperty } from "@/libs/actions/editProperty";
import { uploadPropertyImages } from "@/libs/actions/imageUpload";
import { Property } from "@/libs/actions/createProperty";
import ImageUpload from "./ImageUpload";
import InputField from "./ui/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CustomButton from "./custom/CustomButton";

interface PropertyFormProps {
  property?: Property;
  isEditing?: boolean;
  onSuccess?: () => void;
}

export default function PropertyForm({
  property,
  isEditing = false,
  onSuccess,
}: PropertyFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [existingImages, setExistingImages] = useState<string[]>(
    property?.images || []
  );
  const [formState, setFormState] = useState({
    category: property?.category || "",
    property_type: property?.property_type || "",
    state: property?.state || "",
    garage: property?.garage || "",
    parking: property?.parking || "",
    pool: property?.pool || "",
    heat_type: property?.heat_type || "",
    hot_water: property?.hot_water || "",
  });

  const categories = [
    "prodaja",
    "iznajmljivanje",
    "komercijalno",
    "građevinsko zemljište",
  ];
  const propertyTypes = ["stan", "kuća", "studio", "lokal", "zemljište"];
  const states = ["dostupno", "u procesu", "prodano", "iznajmljeno"];
  const applianceOptions = [
    "hladnjak",
    "štednjak",
    "perilica posuđa",
    "mikrovalna",
    "perilica rublja",
    "sušilica",
  ];
  const utilityOptions = [
    "struja",
    "plin",
    "voda",
    "internet",
    "kabel",
    "grijanje",
  ];
  const securityOptions = [
    "alarmni sistem",
    "sigurnosne kamere",
    "ograđeno naselje",
    "portir",
  ];

  const handleImageChange = (files: File[]) => {
    setSelectedImages(files);
  };

  const removeExistingImage = (index: number) => {
    setExistingImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      let imageUrls = [...existingImages];

      // Upload new images if any
      if (selectedImages.length > 0) {
        const uploadResult = await uploadPropertyImages(
          selectedImages,
          property?.id
        );
        if (uploadResult.error) {
          throw new Error(uploadResult.error);
        }
        imageUrls = [...imageUrls, ...uploadResult.urls!];
      }

      // Process arrays
      const appliances = formData.getAll("appliances") as string[];
      const utilities = formData.getAll("utilities") as string[];
      const securityFeatures = formData.getAll("security_features") as string[];
      const otherFeaturesInput = formData.get("other_features_input") as string;
      const otherFeatures = otherFeaturesInput
        ? otherFeaturesInput.split(",").map((f) => f.trim())
        : [];

      // Add processed data to form
      formData.set("images", JSON.stringify(imageUrls));
      formData.set("appliances", JSON.stringify(appliances));
      formData.set("utilities", JSON.stringify(utilities));
      formData.set("security_features", JSON.stringify(securityFeatures));
      formData.set("other_features", JSON.stringify(otherFeatures));

      // Add formState values to formData
      formData.set("category", formState.category);
      formData.set("property_type", formState.property_type);
      formData.set("state", formState.state);
      formData.set("garage", formState.garage);
      formData.set("parking", formState.parking);
      formData.set("pool", formState.pool);
      formData.set("heat_type", formState.heat_type);
      formData.set("hot_water", formState.hot_water);

      // Convert checkboxes to string values
      formData.set("furnished", formData.get("furnished") ? "true" : "false");
      formData.set("signature", formData.get("signature") ? "true" : "false");

      // Submit form
      const result = isEditing
        ? await updateProperty(property!.id, formData)
        : await createProperty(formData);

      if (result.error) {
        throw new Error(result.error);
      }

      onSuccess?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      action={handleSubmit}
      className="max-w-4xl mx-auto p-6 bg-muted rounded-2xl"
    >
      <h2 className="text-2xl font-bold mb-6">
        {isEditing ? "Uredi nekretninu" : "Dodaj novu nekretninu"}
      </h2>

      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Osnovne informacije</h3>

          <InputField
            inputClassName="bg-background"
            type="text"
            name="title"
            defaultValue={property?.title}
            required
            label="Naslov *"
          />

          <div className="flex flex-col gap-3">
            <label className="text-sm font-medium">Kategorija *</label>
            <Select
              name="category"
              value={formState.category}
              onValueChange={(value) =>
                setFormState((prev) => ({ ...prev, category: value }))
              }
              required
            >
              <SelectTrigger className="w-full py-[22px] !bg-background">
                <SelectValue placeholder="Izaberite kategoriju" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-sm font-medium">Tip nekretnine *</label>
            <Select
              name="property_type"
              value={formState.property_type}
              onValueChange={(value) =>
                setFormState((prev) => ({ ...prev, property_type: value }))
              }
              required
            >
              <SelectTrigger className="w-full py-[22px] !bg-background">
                <SelectValue placeholder="Izaberite tip nekretnine" />
              </SelectTrigger>
              <SelectContent>
                {propertyTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <InputField
            inputClassName="bg-background"
            type="number"
            name="price"
            defaultValue={property?.price}
            required
            min="0"
            label="Cena *"
          />

          <InputField
            inputClassName="bg-background"
            type="number"
            name="monthly_rent"
            defaultValue={property?.monthly_rent}
            min="0"
            label="Mesečna renta (ako je iznajmljivanje)"
          />

          <InputField
            inputClassName="bg-background"
            type="text"
            name="location"
            defaultValue={property?.location}
            required
            label="Lokacija *"
          />

          <div className="flex flex-col gap-3">
            <label className="text-sm font-medium">Stanje nekretnine *</label>
            <Select
              name="state"
              value={formState.state}
              onValueChange={(value) =>
                setFormState((prev) => ({ ...prev, state: value }))
              }
            >
              <SelectTrigger className="w-full py-[22px] !bg-background">
                <SelectValue placeholder="Stanje nekretnine *" />
              </SelectTrigger>
              <SelectContent>
                {states.map((state) => (
                  <SelectItem key={state} value={state}>
                    {state}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <InputField
            inputClassName="bg-background"
            type="email"
            name="contact_email"
            defaultValue={property?.contact_email}
            required
            label="Email za kontakt *"
          />
        </div>

        {/* Property Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Detalji nekretnine</h3>

          <div className="grid grid-cols-2 gap-4">
            <InputField
              inputClassName="bg-background"
              type="number"
              name="rooms"
              defaultValue={property?.rooms}
              min="0"
              label="Broj soba *"
            />

            <InputField
              inputClassName="bg-background"
              type="number"
              name="baths"
              defaultValue={property?.baths}
              min="0"
              label="Broj kupatila *"
            />
          </div>

          <InputField
            inputClassName="bg-background"
            type="number"
            name="square_meters"
            defaultValue={property?.square_meters}
            min="0"
            label="Kvadratura (m²) *"
          />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <InputField
                inputClassName="bg-background"
                type="number"
                name="stories"
                defaultValue={property?.stories}
                min="1"
                label="Sprat *"
              />
            </div>

            <div>
              <InputField
                inputClassName="bg-background"
                type="number"
                name="totalStories"
                defaultValue={property?.totalStories}
                min="1"
                label="Ukupno spratova *"
              />
            </div>
          </div>

          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="furnished"
                defaultChecked={property?.furnished}
                className="mr-2"
              />
              Namešteno
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Datum dostupnosti
            </label>
            <input
              type="date"
              name="available_from"
              defaultValue={property?.available_from}
              className="w-full border rounded-md p-3 text-sm focus:outline-double focus:outline-gold-primary focus:ring-0 focus:outline-offset-2 bg-background"
            />
          </div>

          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="signature"
                defaultChecked={property?.signature}
                className="mr-2"
              />
              Potpisan ugovor
            </label>
          </div>
        </div>
      </div>

      {/* Dodatne karakteristike */}
      <div className="mt-6 space-y-4">
        <h3 className="text-lg font-semibold">Dodatne karakteristike</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Uređaji</label>
            <div className="space-y-2">
              {applianceOptions.map((appliance) => (
                <label key={appliance} className="flex items-center">
                  <input
                    type="checkbox"
                    name="appliances"
                    value={appliance}
                    defaultChecked={property?.appliances?.includes(appliance)}
                    className="mr-2"
                  />
                  {appliance}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Usluge</label>
            <div className="space-y-2">
              {utilityOptions.map((utility) => (
                <label key={utility} className="flex items-center">
                  <input
                    type="checkbox"
                    name="utilities"
                    value={utility}
                    defaultChecked={property?.utilities?.includes(utility)}
                    className="mr-2"
                  />
                  {utility}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Sigurnosne karakteristike
          </label>
          <div className="grid grid-cols-2 gap-2">
            {securityOptions.map((feature) => (
              <label key={feature} className="flex items-center">
                <input
                  type="checkbox"
                  name="security_features"
                  value={feature}
                  defaultChecked={property?.security_features?.includes(
                    feature
                  )}
                  className="mr-2"
                />
                {feature.replace("_", " ")}
              </label>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-3">
            <label className="text-sm font-medium">Garaža</label>
            <Select
              name="garage"
              value={formState.garage}
              onValueChange={(value) =>
                setFormState((prev) => ({ ...prev, garage: value }))
              }
            >
              <SelectTrigger className="w-full py-[22px] !bg-background">
                <SelectValue placeholder="Izaberite garažu" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="da">Da</SelectItem>
                <SelectItem value="ne">Ne</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-sm font-medium">Parking</label>
            <Select
              name="parking"
              value={formState.parking}
              onValueChange={(value) =>
                setFormState((prev) => ({ ...prev, parking: value }))
              }
            >
              <SelectTrigger className="w-full py-[22px] !bg-background">
                <SelectValue placeholder="Izaberite parking" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="javni">Javni</SelectItem>
                <SelectItem value="rezervisan">Rezervisan</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-sm font-medium">Bazen</label>
            <Select
              name="pool"
              value={formState.pool}
              onValueChange={(value) =>
                setFormState((prev) => ({ ...prev, pool: value }))
              }
            >
              <SelectTrigger className="w-full py-[22px] !bg-background">
                <SelectValue placeholder="Izaberite bazen" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="da">Da</SelectItem>
                <SelectItem value="ne">Ne</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-3">
            <label className="text-sm font-medium">Tip grejanja</label>
            <Select
              name="heat_type"
              value={formState.heat_type}
              onValueChange={(value) =>
                setFormState((prev) => ({ ...prev, heat_type: value }))
              }
            >
              <SelectTrigger className="w-full py-[22px] !bg-background">
                <SelectValue placeholder="Izaberite tip grejanja" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="central">Centralno</SelectItem>
                <SelectItem value="electric">Električno</SelectItem>
                <SelectItem value="gas">Gasno</SelectItem>
                <SelectItem value="oil">Naftno</SelectItem>
                <SelectItem value="solar">Solarno</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-sm font-medium">Topla voda</label>
            <Select
              name="hot_water"
              value={formState.hot_water}
              onValueChange={(value) =>
                setFormState((prev) => ({ ...prev, hot_water: value }))
              }
            >
              <SelectTrigger className="w-full py-[22px] !bg-background">
                <SelectValue placeholder="Izaberite tip tople vode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bojler">Bojler</SelectItem>
                <SelectItem value="centralna">Centralna</SelectItem>
                <SelectItem value="solar">Solarno</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-sm font-medium">Opis</label>
          <textarea
            name="description"
            defaultValue={property?.description}
            rows={4}
            className="bg-background border rounded-md p-3 text-sm focus:outline-double focus:outline-gold-primary focus:ring-0 focus:outline-offset-2"
          />
        </div>

        <div>
          <InputField
            inputClassName="bg-background"
            type="text"
            name="other_features_input"
            placeholder="Unesite karakteristike odvojene zarezima"
            defaultValue={property?.other_features?.join(", ")}
            label="Ostale karakteristike"
          />
        </div>
      </div>

      {/* Images */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Slike nekretnine</h3>

        <ImageUpload
          onFilesSelected={handleImageChange}
          existingImages={existingImages}
          onRemoveExisting={removeExistingImage}
          maxFiles={10}
        />
      </div>

      {/* Submit Button */}
      <div className="mt-8">
        <CustomButton
          type="submit"
          disabled={isSubmitting}
          className="w-full justify-center"
        >
          {isSubmitting
            ? isEditing
              ? "Ažuriranje..."
              : "Kreiranje..."
            : isEditing
            ? "Ažuriraj nekretninu"
            : "Kreiraj nekretninu"}
        </CustomButton>
      </div>
    </form>
  );
}
