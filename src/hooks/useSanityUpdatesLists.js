import { useState, useEffect } from "react";
import { sanityClient } from "../lib/sanity";

export default function useSanityUpdatesLists() {
  const [events, setEvents] = useState([]);
  const [news, setNews] = useState([]);
  const [tenders, setTenders] = useState([]);
  const [careers, setCareers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `{
          "events": *[_type == "update" && category == "event"] | order(publishedAt desc) {
            title,
            publishedAt,
            excerpt
          },
          "news": *[_type == "update" && category == "news"] | order(publishedAt desc) {
            title,
            publishedAt,
            excerpt,
            "imageUrl": mainImage.asset->url
          },
          "tenders": *[_type == "download" && category == "tender"] | order(_createdAt desc) {
            title,
            description,
            "fileUrl": file.asset->url
          },
          "careers": *[_type == "update" && category == "career"] | order(publishedAt desc) {
            title,
            excerpt
          }
        }`;
        
        const data = await sanityClient.fetch(query);
        
        if (data.events) setEvents(data.events);
        if (data.news) setNews(data.news);
        if (data.tenders) setTenders(data.tenders);
        if (data.careers) setCareers(data.careers);
      } catch (error) {
        console.error("Error fetching updates lists from Sanity:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { events, news, tenders, careers, isLoading };
}
