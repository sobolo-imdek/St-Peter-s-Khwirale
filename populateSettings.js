import { getCliClient } from 'sanity/cli'
import { schoolData } from './src/data/content.js'

const client = getCliClient()

async function main() {
  console.log("Populating siteSettings...");
  
  const doc = {
    _id: 'siteSettings', // Standard singleton ID
    _type: 'siteSettings',
    schoolName: "St Peter's Khwirale Senior School",
    phone: schoolData.contact.phone,
    email: schoolData.contact.email,
    address: schoolData.contact.address,
    motto: "Elimu Ni Nguvu",
    vision: "To be a leading center of excellence in holistic education.",
    mission: "To provide quality education that empowers students with knowledge, skills, and values for global competitiveness."
  };

  try {
    const result = await client.createIfNotExists(doc);
    console.log("Successfully created siteSettings!");
    console.log(`Document ID: ${result._id}`);
  } catch (error) {
    console.error("Error creating siteSettings document:");
    console.error(error.message);
  }
}

main();
