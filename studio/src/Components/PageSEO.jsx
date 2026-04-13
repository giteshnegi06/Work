import React from "react";
import { Helmet } from "react-helmet-async";
import { SITE } from "../lib/seo";

/**
 * Reusable SEO head component using react-helmet-async.
 *
 * Usage:
 *   <PageSEO
 *     title="Page Title"
 *     description="Page description"
 *     canonical="https://mahakstudio.in/some-path"
 *     ogImage="https://..."        // optional, falls back to SITE.ogImage
 *     structuredData={{...}}       // optional extra JSON-LD object
 *   />
 */
export default function PageSEO({ title, description, canonical, ogImage, structuredData }) {
  const image = ogImage || SITE.ogImage;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Extra JSON-LD (per-page) — supports single object or array */}
      {structuredData && (Array.isArray(structuredData) ? structuredData : [structuredData]).map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
