"use server"

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function uploadPropertyImages(files: File[], propertyId?: string) {
  try {
    const uploadPromises = files.map(async (file, index) => {
      const fileExt = file.name.split('.').pop()
      const fileName = `${propertyId || 'temp'}-${Date.now()}-${index}.${fileExt}`
      
      const { data, error } = await supabase.storage
        .from('property-images')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false
        })

      if (error) {
        console.error('Error uploading file:', error)
        throw error
      }

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('property-images')
        .getPublicUrl(fileName)

      return publicUrl
    })

    const urls = await Promise.all(uploadPromises)
    return { success: true, urls }

  } catch (error) {
    console.error('Error in uploadPropertyImages:', error)
    return { error: 'Failed to upload images' }
  }
}

export async function deletePropertyImage(imageUrl: string) {
  try {
    // Extract filename from URL
    const urlParts = imageUrl.split('/')
    const fileName = urlParts[urlParts.length - 1]

    const { error } = await supabase.storage
      .from('property-images')
      .remove([fileName])

    if (error) {
      console.error('Error deleting image:', error)
      return { error: 'Failed to delete image' }
    }

    return { success: true }

  } catch (error) {
    console.error('Error in deletePropertyImage:', error)
    return { error: 'An unexpected error occurred' }
  }
}