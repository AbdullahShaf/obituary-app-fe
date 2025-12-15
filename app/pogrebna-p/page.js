import React, { Suspense } from "react";
import FuneralsComp from '../../comps/Pograbi';
import Breadcrumbs from "../components/appcomponents/Breadcrumbs";
import { APP_BASE_URL } from "@/config/apiConfig";


export const dynamic = "force-dynamic";

export async function generateMetadata({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const region = typeof resolvedSearchParams?.region === 'string' ? resolvedSearchParams.region : Array.isArray(resolvedSearchParams?.region) ? resolvedSearchParams.region[0] : "";
  const regionText = region ? ` v ${region} regiji` : "";
  
  return {
    title: region ? `Pogrebna podjetja v ${region} regiji – Seznam podjetij | Osmrtnica.com` : "Pogrebna podjetja – Seznam podjetij | Osmrtnica.com",
    description: region
      ? `Osmrtnica.com - pogrebna podjetja v ${region} regiji. Pregled lokalnih izvajalcev storitev z naslovom in povezavo do spletne strani. Pridružite se kot partner.`
      : "Osmrtnica.com - pogrebna podjetja v Sloveniji. Pregled lokalnih izvajalcev storitev z naslovom in povezavo do spletne strani. Pridružite se kot partner.",
    alternates: {
      canonical: region ? `https://www.osmrtnica.com/pogrebna-p?region=${encodeURIComponent(region)}` : "https://www.osmrtnica.com/pogrebna-p",
    },
  };
}

const FuneralsList = () => {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Domov",
        item: `${APP_BASE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Pogrebna podjetja",
        item: `${APP_BASE_URL}/pogrebna-p`,
      },
    ],
  };

  return (
    <div className="flex flex-1 flex-col bg-[#F5F7F9]">
      <Breadcrumbs
        items={[
          { label: "Domov", href: "/" },
          { label: "Pogrebna podjetja" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <FuneralsComp />
      </Suspense>
    </div>
  );
};

export default FuneralsList;
