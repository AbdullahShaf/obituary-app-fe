"use client";

import Head from "next/head";
import Image from "next/image";
import { FAQHeader3 } from "@/app/components/appcomponents/Header";
import { FooterForFaq3 } from "../components/appcomponents/Footer";
import { useBreakpoint } from "../hooks/useBreakpoint";
import Link from "next/link";

export default function Oglasevalci() {
  const breakpoint = useBreakpoint();

  if (breakpoint === "desktop" || breakpoint === "tablet") {
    return (
      <>
        {/* Allow crawlability but no indexing. */}
        <Head>
          <title>C-Priložnost | Osrmtnica</title>
          <meta name="robots" content="noindex, follow" />
        </Head>

        <div className="bg-[#FBE9E8] min-h-[100vh] text-[#3C3E41] relative">
          <FAQHeader3 />
          {/* <div className="tablet:w-[700px] desktop:w-[1200px] absolute top-[108px] left-1/2 -translate-x-1/2 flex items-end justify-end">
            <h1 className="text-[#0A85C2] text-[18px] desktop:text-[20px] mobile:hidden">
              OGLAŠEVALCI
            </h1>
          </div> */}

          <div className="flex flex-col items-center pt-[200px] w-full px-4 max-w-[720px] mx-auto">
            <Image src="/faq_page_icon.png" alt="FAQ" width={94} height={94} />
            <h1 className="text-[40px] font-light mt-4 text-center mobile:text-[26px]">
              Priložnost za prve oglaševalce
            </h1>
            <h2 className="text-[22px] mobile:hidden font-[600] block  mt-2 font-bold text-center">
              Številne ugodnosti
            </h2>

            <p className="font-light text-[16px] mt-[50px]">
              <p>Šele začenjamo, zato ponujamo nekatere posebne ugodnosti, ki jih kasneje ne bo več.</p>
              <p className="mt-[12px]">Standardni popusti za oglaševalce, ki so del redne ponudbe: </p>

              <ul className="list-disc list-inside text-[16px] mt-4 space-y-0 px-3">
                <li>25% popust za drugo in vsako naslednjo občino</li>
                <li>
                  <span className="">50% popust za oglaševanje na drugi in tretji strani v isti občini (izmed treh: osmrtnice,</span>
                  <span className="block ml-5">pogrebi, cvetličarne). Pomeni oglaševanje na treh straneh za ceno dveh.</span>
                </li>
              </ul>
            </p>
            <h2 className="text-[22px] mobile:block hidden mobile:font-[20px] mt-2 font-bold text-center">
              Dva meseca. Brez obveznosti.
            </h2>

            <section className="mt-10 text-[16px] space-y-6 leading-[1.6] mobile:w-[360px] w-[720px]">
              <div className="w-full bg-[#083545] relative h-12 flex items-center text-[#D4D4D4] text-[18px] pl-6">
                <h3 className="font-medium mb-1">
                  Dodatne ugodnosti za prve pridružene oglaševalce?
                </h3>
              </div>
              <div>
                <p className="font-light text-[16px]">
                  Naše prve oglaševalske partnerje, ki sklenejo letno pogodbo{" "}
                  <span className="font-bold underline text-[#EB1D1D]"> do 12. novembra,</span>{" "}
                  <span>čaka še </span>
                  <br />
                  <span>nekaj dodatnih ugodnosti:</span>
                </p>

                <ul className="list-disc list-inside text-[16px] mt-4 ml-3 space-y-[12px]">
                  <li>
                    Za oglaševanje na vseh treh lokalnih straneh (osmrtnice, pogrebi, cvetličarne), dodamo
                    <br />
                    <div className="pl-5">
                      <span className="text-[#0A85C2] font-bold">
                        brezplačno še četrto - regionalno (!)
                      </span>{" "}
                      <span>
                        oglaševanje na strani pogrebnih podjetij. Pomeni,
                      </span>
                    </div>
                    <span className="ml-5">
                      plačaš dve, dobiš štiri strani za oglaševanje.
                    </span>
                  </li>

                  <li>
                    <span className="text-[#0A85C2] font-bold">
                      Tretja in peta občina sta brezplačni.
                    </span>{" "}
                    <span>
                      Za oglaševanje v dveh občinah, je ena dodatna
                    </span>
                    <br />
                    <span className="ml-5">
                      občina brezplačno, za oglaševanje v treh občinah prejmete dve občini brezplačno.
                    </span>

                  </li>

                  <li>
                    <span className="text-[#0A85C2] font-bold">Ljubljana</span>{" "}
                    - brezplačno enako oglaševanje še v eni dodatni občini
                  </li>

                  <li>
                    <span className="text-[#0A85C2] font-bold">Skupna FB promocija - partner tedna</span>
                    <span> (predstavitev na našem FB) za večje oglaševalce </span>

                    <p className="ml-5 text-[#6D778E]">
                      (in od januarja naprej tudi manjšim, ki bodo promovirali koristi portala osmrtnica.com)
                    </p>
                  </li>
                </ul>

                <p className="font-light text-[16px] mt-12">
                  <span className="font-bold underline">
                    Dodatno, prvi oglaševalec
                  </span>{" "}
                  v posamezni občini prejme (samo za to občino):
                </p>

                <ul
                  className="list-disc list-inside text-[16px] mt-4 space-y-[12px] pl-5"
                  style={{ listStylePosition: "outside" }}
                >
                  <li>
                    <span className="text-[#0A85C2] font-bold">
                      Garantirana nespremenjena cena
                    </span>{" "}
                    <span className="">
                      oglaševanja
                    </span>{" "}
                    <span className="text-[#0A85C2] font-bold">
                      vse do leta 2030
                    </span>{" "}
                    <br />
                    <span className="text-[#6D778E]">
                      (kot velja po uradnem ceniku letos jeseni. Četudi bi v naslednjih letih spremenili ceno oglaševanja, bo vaša cena ostala nespremenjena do leta 2030. Velja za uradno ceno oglaševanja, ne za popuste, ki so vsako leto različni).
                    </span>
                    <span>Drugi ima garantirano enako ceno do 2028.</span>
                  </li>

                  <li>
                    <span>
                      Vaš logotip bo imel
                    </span>
                    <span className="text-[#0A85C2] font-bold">direktno povezavo do vaše spletne strani </span>
                    <br />
                    <span className="">
                      ali Facebook profila. Promocija velja izključno za naše Facebook sledilce.
                    </span>
                  </li>
                </ul>

                <p className="mt-12 mb-4">Splača se biti med prvimi.</p>
                <p className="text-[#6D778E] font-light mt-1 text-[14px]">
                  Op. vse promocije veljajo samo v primeru letne naročnine.
                </p>
              </div>
            </section>

            {/* set for desktop */}
            <div className="w-[720px] mt-7 pb-[60px] mobile:hidden text-[#3C3E41] ">
              <p className="mt-12 mb-4 text-[16px] text-[#0A85C2] font-bold">Kontaktirajte nas za izdelavo ponudbe. </p>
              <p className="text-[16px]">
                Pošljite nam svoje podatke z navedbo občine oz občin, za katere se zanimate in strani, kjer naj bi oglaševali ter čas (mesečno oz letno) in poslali vam bomo ponudbo s povezavo za plačilo po spletu oz predračun za plačilo na TRR.
              </p>
              <p className="text-[#6D778E] text-[14px] mt-4">Op. strani, kjer je mogoče oglaševanje so naslednje: </p>

              <ul className="flex flex-row gap-2 mt-4 text-[#0A85C2]">
                <li className="underline underline-offset-2"><Link href={'/'}>Osmrtnice</Link></li>
                <li><span>*</span> <Link href={'/pogrebi'} className="underline underline-offset-2">Pogrebi</Link> </li>
                <li><span>*</span> <Link href={'/cenik'} className="underline underline-offset-2">Cvetličarne</Link> </li>
                <li><span>*</span> <Link href={'/pogrebna-p'} className="underline underline-offset-2">Pogrebna podjetja</Link> </li>
              </ul>
            </div>
            {/* <Link
              href={"/podjetja"}
              className="flex justify-end w-full mt-[50px] pb-[60px] mobile:hidden"
            >
              <button>
                <Image
                  src="/pridruzi-se-button.svg"
                  alt="Arrow Right"
                  width={250}
                  height={60}
                />
              </button>
            </Link> */}
          </div>
          <FooterForFaq3 />
        </div>
      </>
    );
  }

  if (breakpoint === "mobile") {
    return (
      <>
        <Head>
          <title>C-Priložnost | Osrmtnica</title>
          <meta name="robots" content="noindex, follow" />
        </Head>

        <div className="bg-[#FBE9E8] min-h-[100vh] text-[#3C3E41]">
          <FAQHeader3 />

          <div className="w-full hidden mobile:flex gap-[16px] absolute top-[62px] left-0 right-0">
            <div className="bg-[#36556C] w-full">
              <div className="mobile:flex text-[#FFFFFF] items-center justify-between hidden h-[30px] bg-[#36556C] px-3 mobile:max-w-[348px] mx-auto">
                <div className="text-[#D4D4D4] text-[12px]">
                  POGREBNA PODJETJA
                </div>
                <Link href="/cvetlicarne" className="text-[#fff] text-[12px]">
                  CVETLIČARNE
                </Link>
                <Link href="/oglasevalci" className="text-[#fff] text-[12px]">
                  OGLAŠEVALCI
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center pt-[200px] w-full px-4 max-w-[720px] mx-auto">
            <Image src="/faq_page_icon.png" alt="FAQ" width={79} height={79} />
            <h1 className="text-[40px] font-light mt-4 text-center mobile:text-[26px]">
              Priložnost
            </h1>
            <h2 className="text-[22px] mobile:hidden block mt-2 font-bold text-center">
              Dodatne ugodnosti
            </h2>

            <h2 className="text-[22px] mobile:block hidden mobile:font-[20px] mt-2 font-bold text-center">
              za prve oglaševalce
            </h2>

            <section className="mt-10 text-[16px] space-y-6 leading-[1.6] mobile:w-[354px] w-[720px]">
              <div className="w-full bg-[#083545] relative h-12 flex items-center text-[#D4D4D4] text-[18px] pl-2">
                <h3 className="font-medium mb-1">
                  Dodatne ugodnosti za prve naročnike
                </h3>
              </div>

              <div>
                <p className="font-light text-[16px]">
                  Naše prve oglaševalske partnerje, ki sklenejo letno pogodbo{" "}
                  <span className="font-bold underline">do 12. novembra,</span>{" "}
                  čaka še nekaj dodatnih ugodnosti:
                </p>

                <ul
                  className="list-disc list-inside text-[16px] mt-4 space-y-0 pl-5"
                  style={{ listStylePosition: "outside" }}
                >
                  <li>
                    Za oglaševanje na vseh treh lokalnih straneh (osmrtnice,
                    pogrebi, cvetličarne), dodamo{" "}
                    <span className="text-[#0A85C2] font-bold">
                      brezplačno še četrto - regionalno (!)
                    </span>{" "}
                    oglaševanje na strani pogrebnih podjetij. <br />
                    <div className="text-[#6D778E] mt-1">
                      (primer: letno oglaševanje{" "}
                      <span className="underline">na vseh štirih straneh</span>{" "}
                      za manjše občine tako znaša 100+50+50+0=200€; V Ljubljani
                      bi znašalo oglaševanje{" "}
                      <span className="underline">na vseh štirih</span> najbolj
                      obiskanih straneh preračunano 50€ na mesec za vse štiri)
                    </div>
                  </li>

                  <li>
                    <span className="text-[#0A85C2] font-bold">
                      5x5 promocija - Pet občin
                    </span>{" "}
                    za 5€ na občino mesečno.
                    <br />
                    <span className="text-[#6D778E] mt-1">
                      (oglaševanje v petih manjših občinah na eni izmed strani:
                      osmrtnice, pogrebi, cvetličarne).
                    </span>
                  </li>

                  <li>
                    <span className="text-[#0A85C2] font-bold">Ljubljana</span>{" "}
                    - brezplačno enako oglaševanje še v eni dodatni občini
                  </li>

                  <li>
                    Za tiste, ki oglašujejo v treh ali več občinah - posebna
                    promocija oglaševalca na našem FB (
                    <span className="text-[#0A85C2] font-bold">
                      partner tedna
                    </span>{" "}
                    s predstavitvijo).
                  </li>
                </ul>

                <p className="font-light text-[16px] mt-12">
                  <span className="font-bold underline">
                    Dodatno, prvi oglaševalec
                  </span>{" "}
                  v posamezni občini prejme (samo za to občino):
                </p>

                <ul
                  className="list-disc list-inside text-[16px] mt-4 space-y-0 pl-5"
                  style={{ listStylePosition: "outside" }}
                >
                  <li>
                    <span className="text-[#0A85C2] font-bold">
                      12x12 - prvih 12 oglaševalcev
                    </span>{" "}
                    prejme vsak po 12 Skrbnikov za spominske strani prednikov,
                    ki jih lahko podari svojim klientom naprej{" "}
                    <span className="text-[#6D778E] mt-1">
                      (doslej so bile spominske vezane na aktualne osmrtnice,
                      odslej bodo omogočale tudi zapisovanje in hranjenje
                      spominov najdražjih, ki so odšli pred leti, desetletji).
                      To novost bomo omogočili 12.12. in strani bo mogoče
                      aktivirati do 1.2., sicer zapadejo). Podarjeni skrbniki
                      bodo mesečni, če pa na našem FB komentirate, jim bomo ob
                      aktivaciji dodali še dva dodatna meseca - kar je dovolj
                      časa, da družine spomine skupaj uredijo. Ta promocija je
                      spet lahko dobrodošla dodatna priložnost, da svojim
                      klientom pomagate obuditi dragocene spomine preden
                      zbledijo - ponuja priložnost za povezovanje generacij in
                      mnogi vam bodo še leta hvaležni.
                    </span>
                  </li>

                  <li>
                    Garantirano nespremenjeno ceno oglaševanja vse do leta 2030
                    <br />
                    <span className="text-[#6D778E] mt-1">
                      (kot velja po uradnem ceniku letos jeseni. Četudi bi v
                      naslednjih letih spremenili ceno oglaševanja, bo vaša cena
                      ostala nespremenjena)
                    </span>
                  </li>

                  <li>
                    Oglaševan logotip ima direktno povezavo do vaših strani
                  </li>

                  <li>
                    Pri podaljšanju v naslednjem letu prejme naročnik brezplačno
                    letno oglaševanje še na dodatni izmed treh lokalnih strani.
                    Drugi oglaševalec v občini pa enako polletno oglaševanje
                  </li>
                </ul>

                <p className="mt-6 mb-6">Splača se biti med prvimi.</p>
                <p className="text-[#6D778E] font-light mt-1 text-[14px] mb-10">
                  Op. vse promocije veljajo samo v primeru letne naročnine.
                  Popusti se ne seštevajo, obvelja višji popust. Osnovni paketi
                  so vnešeni v cenik, kjer je možno tudi naročilo, v primeru
                  obsežnejšega oglaševanja pa nas kontaktirajte, da pripravimo
                  posebno ponudbo.
                </p>
              </div>
            </section>

            <Link
              href={"/podjetja"}
              className="flex justify-end w-full mt-[50px] pb-[60px] mobile:hidden"
            >
              <button>
                <Image
                  src="/pridruzi-se-button.svg"
                  alt="Arrow Right"
                  width={250}
                  height={60}
                />
              </button>
            </Link>
          </div>

          {/* set for mobile */}
          <div className="w-full hidden mobile:flex px-7 mb-10 mt-3 justify-between items-center">
            <Link
              className="text-[17px] text-[#0A85C2] underline"
              href={"/kontakt"}
            >
              Kontaktirajte nas
            </Link>
            <Link href={"/cenik"}>
              <Image
                src={"/cenik_narocilo_btn.png"}
                alt="Arrow Right"
                width={140}
                height={35}
              />
            </Link>
            {/* <Link
              href={"/cenik"}
              className="w-[140px] h-[35px] flex items-center justify-center rounded-[2px] text-[14px] text-[#FFFFFF]"
              style={{
                background:
                  "linear-gradient(180deg, #0D94E8 4.81%, #1860A3 100%)",
                border: "2px solid #6D778E",
              }}
            >
              Cenik / Naročilo
            </Link> */}
          </div>
          <FooterForFaq3 />
        </div>
      </>
    );
  }
}
