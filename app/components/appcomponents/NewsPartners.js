import React from "react";
import SavusLogo from "../../../public/lokalni/savus-logo.jpg";
import PartnerAdItem from "./PartnerAdItem";
const NewsPartnersComponent = () => {
    const partners = [
        {
            name: "Savus",
            link: "https://www.partner1.com",
            tagline: "Lokalne novice iz zasavja",
            images: [SavusLogo, SavusLogo],
            city: "Zasavska"
        }
    ];
    return (
        <div className="w-full max-w-5xl mx-auto text-left my-28">
            <h1 className="text-[#1E2125] text-[40px] leading-[100%] text-[#1E2125] mb-11">Lokalne novice</h1>
            <NewsPartnersList partners={partners} />
        </div>
    );
};

const NewsPartnersList = ({partners}) => {
    return (
        <div className="w-full max-w-5xl mx-auto text-left flex flex-row gap-[32px] flex-wrap">
            {
                partners.map((partner, index) => (
                    <PartnerAdItem key={index} partner={partner} />
                ))
            }
        </div>
    );
};


export default NewsPartnersComponent;
