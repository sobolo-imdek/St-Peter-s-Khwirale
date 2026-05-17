import { sanityClient } from './src/lib/sanity.js';

async function main() {
  try {
    const data = await sanityClient.fetch('*[_type == "page" && slug.current == "about"][0]');
    console.log("PUBLIC CLIENT ABOUT PAGE:");
    console.log(JSON.stringify(data, null, 2));
  } catch (err) {
    console.error(err);
  }
}

main();
