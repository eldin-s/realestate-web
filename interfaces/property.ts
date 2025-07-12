export interface Property {
  id: number;
  created_at: string; // ISO timestamp
  title: string;
  category: string;
  monthly_rent: number;
  rooms: number;
  baths: number;
  square_meters: number;
  location: string;
  furnished: boolean;
  available_from: string; // ISO date string (YYYY-MM-DD)
  contact_email: string;
  img: string;
  signature: boolean;
  property_type: string;
  listing_last_updated: string; // ISO date string
  interior: {
    appliances: string[]; // values in Serbian/Latin
    other_features: string[]; // values in Serbian/Latin
    stories: number;
  };
  exterior: {
    garage_spaces: number;
    water_source: string; // e.g., "Javni vodovod"
    utilities: string[]; // Serbian/Latin
    pool: string; // e.g., "Bazen"
    roof: string; // e.g., "Betonski krov"
    lot_features: string; // e.g., "Slepa ulica"
    parking: string[]; // Serbian/Latin
    heat_type: string; // e.g., "Centralno grejanje"
    air_conditioning: string; // e.g., "Centralna klima"
    sewer: string; // e.g., "Javna kanalizacija"
    amenities: string; // e.g., "Teniski teren(i)"
    security_features: string[]; // Serbian/Latin
    other_exterior_features: string; // e.g., "TV antena"
  };
}