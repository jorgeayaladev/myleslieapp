import { PostgrestError } from "@supabase/supabase-js"

export type SpecieData = {
  id: number
  created_at: string
  scientific_name: string
  spanish_name: string
  english_name: string
  portuguese_name: string
  description: string
  place: string
  year: number
  iucn: number
  youth_data: number[]
  adult_data: number[]
  mature_data: number[]
  images: string[]
  family_id: number
}

export type SpeciesData = {
  id: number
  spanish_name: string
  scientific_name: string
  images: string[]
  iucn: number
}

export type FetchSpecieData = {
  data: SpecieData[] | null
  error: PostgrestError| null 
}

export type FetchSpeciesData = {
  data: SpeciesData[] | null
  error: PostgrestError| null 
}