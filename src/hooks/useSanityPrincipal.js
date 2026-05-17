import { useState, useEffect } from "react";
import { sanityClient } from "../lib/sanity";
import { schoolData } from "../data/content";

export default function useSanityPrincipal() {
  const [principal, setPrincipal] = useState(schoolData.principal);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check local storage cache first to avoid flashing
    const cached = localStorage.getItem("sanity_principal");
    if (cached) {
      try {
        setPrincipal(JSON.parse(cached));
      } catch (e) {
        console.error("Error parsing cached principal:", e);
      }
    }

    const fetchPrincipal = async () => {
      try {
        const query = `*[_type == "principal"][0]{
          name,
          title,
          message,
          "imageUrl": image.asset->url
        }`;
        
        const data = await sanityClient.fetch(query);
        
        if (data) {
          const mergedPrincipal = {
            name: data.name || schoolData.principal.name,
            title: data.title || schoolData.principal.title,
            message: data.message || schoolData.principal.message,
            image: data.imageUrl || schoolData.principal.image,
          };
          
          setPrincipal(mergedPrincipal);
          localStorage.setItem("sanity_principal", JSON.stringify(mergedPrincipal));
        }
      } catch (err) {
        console.error("Error fetching principal from Sanity:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPrincipal();
  }, []);

  return { principal, loading };
}
