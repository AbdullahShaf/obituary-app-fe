import React from "react"
import PartnerAdItem from "./PartnerAdItem"
import RegionalOne from "../../../public/lokalni/reigonal-1.jpg"
import RegionalTwo from "../../../public/lokalni/regional-2.jpg"
import RegionalThree from "../../../public/lokalni/regional-3.jpg"
import PartnersSelectionList from "./PartnersSelectionList"


const RegionalPartnersSection = () => {
    const defaultItems = [
      {
        name: "OSREDNJESLOVENSKA",
        link: "OSREDNJESLOVENSKA"
      },
      {
        name: "PODRAVSKA",
        link: "PODRAVSKA"
      },
      {
        name: "SAVINJSKA",
        link: "SAVINJSKA"
      }
    ];
    const items = [
      {
        name: "OSREDNJESLOVENSKA",
        link: "OSREDNJESLOVENSKA"
      },
      {
        name: "PODRAVSKA",
        link: "PODRAVSKA"
      },
      {
        name: "SAVINJSKA",
        link: "SAVINJSKA"
      },
      {
        name: "VSE REGIJE",
        link: "VSE REGIJE"
      },
      {
        name: "PREVOZI POKOJNIKOV",
        link: "PREVOZI POKOJNIKOV"
      }
    ];

    const regionalPartners = [
        {
            name: "Stone Studio Luxury d.o.o.",
            link: "https://www.partner1.com",
            tagline: "KAMNITE STOPNICE",
            images: [RegionalOne, RegionalTwo],
            city: "Log - Dragomer"
        },
        {
            name: "Stone Studio Luxury d.o.o.",
            link: "https://www.partner1.com",
            tagline: "KUHINJSKI PULTI IN STENSKE OBLOGE",
            images: [RegionalTwo, RegionalThree],
            city: "Horjul"
        },
        {
            name: "Stone Studio Luxury d.o.o.",
            link: "https://www.partner1.com",
            tagline: "NAGROBNI SPOMENIKI",
            images: [RegionalThree, RegionalOne],
            city: "Dobrova - Polhov Gradec"
        }
    ];

    return (
        <div className="w-full max-w-5xl mx-auto mb-28">
            <h1 className="flex font-normal text-[40px] leading-[48px] tracking-normal text-black mb-9">Regijsko</h1>
            <div className="flex flex-col gap-14">
            <PartnersSelectionList defaultItems={defaultItems} items={items} title="Regijsko" />
            <RegionalPartnersList regionalPartners={regionalPartners} />
            </div>
        </div>
    );
};

const RegionalPartnersList = ({regionalPartners}) => {
    return (
        <div className="w-full max-w-5xl mx-auto text-left flex flex-row gap-[32px] flex-wrap">

            {
                regionalPartners.map((partner,index) => (
                    <PartnerAdItem key={index} partner={partner} />
                ))
            }
        </div>
    );
};

export default RegionalPartnersSection;
