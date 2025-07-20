"use server"

import { createClient } from '@supabase/supabase-js'
import { revalidatePath } from 'next/cache'

export interface UpdatePropertyData {
  title?: string,
  category?: string,
  price?: number,
  monthly_rent?: number,
  rooms?: number,
  baths?: number,
  square_meters?: number,
  location?: string,
  furnished?: boolean,
  state?: string,
  available_from?: string,
  contact_email?: string,
  images?: string[],
  signature?: boolean,
  property_type?: string,
  appliances?: string[],
  other_features?: string[],
  stories?: number,
  totalStories?: number,
  utilities?: string[],
  garage?: string,
  parking?: string,
  heat_type?: string,
  security_features?: string[],
  description?: string,
  pool?: string,
  hot_water?: string,
  listing_last_updated?: string,
  [key: string]: any
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function updateProperty(propertyId: string, formData: FormData) {
  try {
    // Extract form data only for fields that are present
    const updateData: UpdatePropertyData = {}
    
    const formFields = [
      'title', 'category', 'location', 'contact_email', 'state', 
      'available_from', 'property_type', 'heat_type', 'description',
      'garage', 'parking', 'pool', 'hot_water'
    ]
    
    formFields.forEach(field => {
      const value = formData.get(field)
      if (value !== null && value !== '') {
        updateData[field] = value as string
      }
    })

    const numberFields = ['price', 'monthly_rent', 'rooms', 'baths', 'square_meters', 'stories', 'totalStories']
    numberFields.forEach(field => {
      const value = formData.get(field)
      if (value !== null && value !== '') {
        updateData[field] = Number(value)
      }
    })

    const booleanFields = ['furnished', 'signature']
    booleanFields.forEach(field => {
      const value = formData.get(field)
      if (value !== null) {
        updateData[field] = value === 'true'
      }
    })

    const arrayFields = ['images', 'appliances', 'other_features', 'utilities', 'security_features']
    arrayFields.forEach(field => {
      const value = formData.get(field)
      if (value !== null && value !== '') {
        updateData[field] = JSON.parse(value as string)
      }
    })

    // Add listing_last_updated timestamp
    updateData.listing_last_updated = new Date().toISOString()

    // Update property in database
    const { data, error } = await supabase
      .from('properties')
      .update(updateData)
      .eq('id', propertyId)
      .select()
      .single()

    if (error) {
      console.error('Error updating property:', error)
      return { error: 'Failed to update property' }
    }

    revalidatePath('/properties')
    return { success: true, data }

  } catch (error) {
    console.error('Error in updateProperty:', error)
    return { error: 'An unexpected error occurred' }
  }
}

export async function getProperty(propertyId: string) {
  try {
    const { data, error } = await supabase
      .from('properties')
      .select('*')
      .eq('id', propertyId)
      .single()

    if (error) {
      console.error('Error fetching property:', error)
      return { error: 'Property not found' }
    }

    return { success: true, data }
  } catch (error) {
    console.error('Error in getProperty:', error)
    return { error: 'An unexpected error occurred' }
  }
}