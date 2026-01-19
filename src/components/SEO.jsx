import { Helmet } from 'react-helmet-async';
import { schoolData } from '../data/content';

export default function SEO({ title, description, type = 'website', image }) {
    // Use school name as default suffix
    const siteTitle = schoolData.name || "St Peter's Khwirale Senior School";
    const fullTitle = title ? `${title} | ${schoolData.shortName || siteTitle}` : siteTitle;

    // Default description if none provided
    const metaDescription = description || schoolData.about.mission;

    // Default image if none provided
    const metaImage = image || "/images/gallery/DSC_0094.JPG";

    return (
        <Helmet>
            {/* Standard metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={metaImage} />
        </Helmet>
    );
}
