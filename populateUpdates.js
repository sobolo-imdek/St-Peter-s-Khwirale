import { getCliClient } from 'sanity/cli'

const client = getCliClient()

async function main() {
  console.log("Starting Updates & Downloads Population...");

  const docs = [
    // Events
    {
      _id: 'event-academics-day',
      _type: 'update',
      title: 'Academics Day',
      slug: { current: 'academics-day' },
      category: 'event',
      publishedAt: '2026-10-15T09:00:00Z',
      excerpt: 'Main Event - Join us at the school main hall for this significant milestone in our academic calendar.',
    },
    {
      _id: 'event-sports-meet',
      _type: 'update',
      title: 'Inter-School Sports Meet',
      slug: { current: 'inter-school-sports-meet' },
      category: 'event',
      publishedAt: '2026-10-28T09:00:00Z',
      excerpt: 'Sports - Join us at the school main hall for this significant milestone in our academic calendar.',
    },
    {
      _id: 'event-parents-meeting',
      _type: 'update',
      title: 'Parents Association Meeting',
      slug: { current: 'parents-association-meeting' },
      category: 'event',
      publishedAt: '2026-11-12T09:00:00Z',
      excerpt: 'Meeting - Join us at the school main hall for this significant milestone in our academic calendar.',
    },

    // News
    {
      _id: 'news-math-contest',
      _type: 'update',
      title: 'Khwirale Senior Shines in Busia Mathematics Contest',
      slug: { current: 'khwirale-senior-shines-in-busia-mathematics-contest' },
      category: 'news',
      publishedAt: '2025-09-12T09:00:00Z',
      excerpt: 'We are immensely proud of our students and staff for their hard work and dedication which continues to lead us to excellence...',
    },
    {
      _id: 'news-science-lab',
      _type: 'update',
      title: 'New Science Lab Commissioning by County Education Team',
      slug: { current: 'new-science-lab-commissioning-by-county-education-team' },
      category: 'news',
      publishedAt: '2025-08-28T09:00:00Z',
      excerpt: 'We are immensely proud of our students and staff for their hard work and dedication which continues to lead us to excellence...',
    },

    // Tenders (Downloads)
    {
      _id: 'tender-staff-quarters',
      _type: 'download',
      title: 'Tender for Construction of Staff Quarters 2026',
      category: 'tender',
      description: 'Ref: STPK/TN/2026/04 · Due: Dec 12, 2025'
    },
    {
      _id: 'tender-prequalification',
      _type: 'download',
      title: 'Prequalification of Suppliers for 2025 Financial Year',
      category: 'tender',
      description: 'Status: Closed'
    },

    // Careers
    {
      _id: 'career-subject-teacher',
      _type: 'update',
      title: 'Subject Teacher (Math/Physics)',
      slug: { current: 'subject-teacher-math-physics' },
      category: 'career',
      publishedAt: '2026-05-01T09:00:00Z',
      excerpt: 'Full-time · Experience Required',
    }
  ];

  for (const doc of docs) {
    try {
      const result = await client.createOrReplace(doc);
      console.log(`Created: ${result.title}`);
    } catch (error) {
      console.error(`Error creating ${doc.title}:`, error.message);
    }
  }
}

main();
