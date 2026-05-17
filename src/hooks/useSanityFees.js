import { useState, useEffect } from "react";
import { sanityClient } from "../lib/sanity";

const defaultFees = [
  { category: "Tuition & Learning Materials", amount: "KES 12,500" },
  { category: "Administrative Levies", amount: "KES 3,200" },
  { category: "Activity & Development", amount: "KES 2,800" },
];

export default function useSanityFees() {
  const [fees, setFees] = useState(defaultFees);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cached = localStorage.getItem("sanity_fees");
    if (cached) {
      try {
        setFees(JSON.parse(cached));
      } catch (e) {
        console.error("Error parsing cached fees:", e);
      }
    }

    const fetchFees = async () => {
      try {
        const query = `*[_type == "feeStructure"][0]{
          fees[]{
            category,
            amount
          }
        }`;
        
        const data = await sanityClient.fetch(query);
        
        if (data && data.fees && data.fees.length > 0) {
          setFees(data.fees);
          localStorage.setItem("sanity_fees", JSON.stringify(data.fees));
        }
      } catch (err) {
        console.error("Error fetching fees from Sanity:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFees();
  }, []);

  return { fees, loading };
}
