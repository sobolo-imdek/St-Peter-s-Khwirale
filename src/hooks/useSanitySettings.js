import { useState, useEffect } from "react";
import { sanityClient } from "../lib/sanity";
import { schoolData } from "../data/content";

export default function useSanitySettings() {
  const [settings, setSettings] = useState({
    phone: schoolData.contact.phone,
    email: schoolData.contact.email,
  });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const query = `*[_type == "siteSettings"] | order(_updatedAt desc)[0]{
          phone,
          email
        }`;
        
        const data = await sanityClient.fetch(query);
        
        if (data) {
          setSettings({
            phone: data.phone || schoolData.contact.phone,
            email: data.email || schoolData.contact.email,
          });
        }
      } catch (error) {
        console.error("Error fetching site settings from Sanity:", error);
      }
    };

    fetchSettings();
  }, []);

  return { settings };
}
