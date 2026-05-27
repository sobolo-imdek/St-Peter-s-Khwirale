import { getCliClient } from 'sanity/cli'

const client = getCliClient()

async function main() {
  console.log("Starting Fees Population...");
  
  const doc = {
    _id: 'fee-structure-default', // Predictable ID to avoid duplicates on multiple runs
    _type: 'feeStructure',
    title: 'Standard Fee Structure',
    fees: [
      { _key: 'f1', category: "Tuition & Learning Materials", amount: "KES 12,500" },
      { _key: 'f2', category: "Administrative Levies", amount: "KES 3,200" },
      { _key: 'f3', category: "Activity & Co-curricular", amount: "KES 1,500" },
      { _key: 'f4', category: "Medical & Insurance", amount: "KES 800" },
      { _key: 'f5', category: "PTA Project Fund", amount: "KES 2,000" }
    ]
  };

  try {
    const result = await client.createOrReplace(doc);
    console.log("Successfully created/updated fee structure!");
    console.log(`Document ID: ${result._id}`);
  } catch (error) {
    console.error("Error creating fee structure document:");
    console.error(error.message);
  }
}

main();
