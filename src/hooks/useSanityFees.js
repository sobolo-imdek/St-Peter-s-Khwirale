import { useState, useEffect } from "react";
import { sanityClient } from "../lib/sanity";

const defaultFees = [
  { category: "Tuition & Learning Materials", amount: "KES 12,500" },
  { category: "Administrative Levies", amount: "KES 3,200" },
  { category: "Activity & Co-curricular", amount: "KES 1,500" },
  { category: "Medical & Insurance", amount: "KES 800" },
  { category: "PTA Project Fund", amount: "KES 2,000" },
];

export default function useSanityFees() {
  const [fees, setFees] = useState(defaultFees);

  useEffect(() => {
    const fetchFees = async () => {
      try {
        const query = `*[_type == "feeStructure" && _id == "fee-structure-default"][0]{
          fees[]{
            category,
            amount
          }
        }`;
        
        const data = await sanityClient.fetch(query);
        
        if (data && data.fees && data.fees.length > 0) {
          setFees(data.fees);
        }
      } catch (error) {
        console.error("Error fetching fees from Sanity:", error);
      }
    };

    fetchFees();
  }, []);

  return { fees };
}
