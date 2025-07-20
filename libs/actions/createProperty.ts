"use server"

import { createClient } from '@supabase/supabase-js'
import { revalidatePath } from 'next/cache'

export interface Property {
  id: string,
  title: string,
  category: string,
  price: number,
  monthly_rent?: number,
  rooms: number,
  baths: number,
  square_meters: number,
  location: string,
  furnished: boolean,
  state: string,
  available_from?: string,
  contact_email: string,
  images: string[],
  signature?: boolean,
  created_at: string,
  property_type: string,
  listing_last_updated: string,
  appliances: string[],
  other_features: string[],
  stories: number,
  totalStories: number,
  utilities: string[],
  garage?: string,
  parking?: string,
  heat_type: string,
  security_features: string[],
  description: string,
  pool?: string,
  hot_water?: string,
}

export interface CreatePropertyData {
  title: string,
  category: string,
  price: number,
  monthly_rent?: number,
  rooms: number,
  baths: number,
  square_meters: number,
  location: string,
  furnished: boolean,
  state: string,
  available_from?: string,
  contact_email: string,
  images: string[],
  signature?: boolean,
  property_type: string,
  appliances: string[],
  other_features: string[],
  stories: number,
  totalStories: number,
  utilities: string[],
  garage?: string,
  parking?: string,
  heat_type: string,
  security_features: string[],
  description: string,
  pool?: string,
  hot_water?: string,
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function createProperty(formData: FormData) {
  try {
    // Extract and validate form data
    const propertyData: CreatePropertyData = {
      title: formData.get('title') as string,
      category: formData.get('category') as string,
      price: Number(formData.get('price')),
      monthly_rent: formData.get('monthly_rent') ? Number(formData.get('monthly_rent')) : undefined,
      rooms: Number(formData.get('rooms')),
      baths: Number(formData.get('baths')),
      square_meters: Number(formData.get('square_meters')),
      location: formData.get('location') as string,
      furnished: formData.get('furnished') === 'true',
      state: formData.get('state') as string,
      available_from: formData.get('available_from') as string || undefined,
      contact_email: formData.get('contact_email') as string,
      images: JSON.parse(formData.get('images') as string || '[]'),
      signature: formData.get('signature') === 'true',
      property_type: formData.get('property_type') as string,
      appliances: JSON.parse(formData.get('appliances') as string || '[]'),
      other_features: JSON.parse(formData.get('other_features') as string || '[]'),
      stories: Number(formData.get('stories')),
      totalStories: Number(formData.get('totalStories')),
      utilities: JSON.parse(formData.get('utilities') as string || '[]'),
      garage: formData.get('garage') as string || undefined,
      parking: formData.get('parking') as string || undefined,
      heat_type: formData.get('heat_type') as string,
      security_features: JSON.parse(formData.get('security_features') as string || '[]'),
      description: formData.get('description') as string,
      pool: formData.get('pool') as string || undefined,
      hot_water: formData.get('hot_water') as string || undefined,
    }

    // Validate required fields
    if (!propertyData.title || !propertyData.category || !propertyData.price || 
        !propertyData.location || !propertyData.contact_email) {
      return { error: 'Missing required fields' }
    }

    // Insert property into database
    const { data, error } = await supabase
      .from('properties')
      .insert({
        ...propertyData,
        created_at: new Date().toISOString(),
        listing_last_updated: new Date().toISOString(),
      })
      .select()
      .single()

    if (error) {
      console.error('Error creating property:', error)
      return { error: 'Failed to create property' }
    }

    revalidatePath('/properties')
    return { success: true, data }

  } catch (error) {
    console.error('Error in createProperty:', error)
    return { error: 'An unexpected error occurred' }
  }
}