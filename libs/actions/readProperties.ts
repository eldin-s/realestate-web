import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function readProperties() {
  try {
    const { data: properties, error } = await supabase
      .from("properties")
      .select("*");

    if (error) {
      console.error("Error fetching properties:", error);
      return [];
    }

    return { data: properties, error };
  } catch (error) {
    console.error("Error reading properties:", error);
    return { data: null, error: "Error reading properties" };
  }
}
