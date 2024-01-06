import {Navbar} from "@/app/components/navbar";
import {Footer} from "@/app/components/footer";
import {Article} from "@/app/components/article";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen items-center">
            <Navbar imageUrl="/kampgroepsfoto.jpg" imageAlt="Groepsfoto Kamp" title="Chiro Houthulst"/>
            <main className="flex-grow w-full max-w-7xl p-16 gap-8 flex flex-col">
                <Article title={"Wie zijn wij?"}>
                    De Chiro is de grootste jeugdbeweging van België. De Chirogroepen brengen kinderen en jongeren in
                    hun vrije tijd samen, zonder onderscheid. Via spel laten we hen ervaringen opdoen, leren we hen
                    samenleven en bieden we hen een kijk op zichzelf en op de wereld. De Chiro is meer nog dan spel, we
                    zijn een leerschool voor het leven. Vertrekkend uit de leefwereld van kinderen en jongeren streven
                    we met hen naar een Chirodroom: een wereld waarin de Chirowaarden graag zien, rechtvaardigheid en
                    innerlijkheid centraal staan. We werken hiervoor met onze Chiromethoden (de participatieve, de
                    gemeenschapsgerichte en de intuïtieve methode). Chiro is geen eiland, maar is betrokken zijn op de
                    brede gemeenschap. We zetten jongeren aan om een engagement op te nemen in de buurt en de
                    samenleving. We vormen hen tot geëngageerde en kritische wereldburgers. Met alle groepen samen
                    bouwen we aan één jeugdbeweging: de Chiro.
                </Article>
                <Article title={"Praktische info"}>
                    Iedereen is welkom in onze Chiro, van het derde kleuter tot en met het vijfde middelbaar. Bijna elke
                    zondag (zie kalender) is er Chiro van 14 tot 17 uur.

                    Voor de keti&apos;s en de aspi&apos;s (derde t.e.m. vijfde middelbaar) is er Chiro van 14 tot 18 uur.

                    Inschrijven voor het Chirojaar kan elke Chirozondag. Uw kind kan altijd eens de Chiro komen
                    &apos;uittesten&apos;, inschrijven hoeft niet voor de eerste zondag.

                    Houd zeker ook onze Facebookpagina in de gaten, hier plaatsen wij regelmatig foto&apos;s en belangrijke
                    informatie!
                </Article>
                <Article title={"Waar?"}>
                    Ons terrein bevindt zich rechts van de Carrefour in Houthulst (Jonkershovestraat 101S)
                </Article>

                <Article title={"Enkele afspraken"}>
                    Inschrijven in de Chiro kost €30. Zo zijn jullie kinderen ook verzekerd.

                    Wij bieden elke chironamiddag een vieruurtje aan voor €1. Breng je liever je eigen drankje en
                    koekje mee, is dat zeker geen probleem.

                    Als je mee wil op kamp, vragen we je wel om minstens 5 keer te komen naar de Chiro (en liefst zo
                    vaak mogelijk). Zo kunnen de leiding en medeleden je beter leren kennen. Zoals elk jaar gaan we
                    op kamp van 20 t.e.m. 30 juli. De Aspi&apos;s gaan mee op nawacht tot 31 juli.
                </Article>
            </main>
            <Footer/>
        </div>
    )
        ;
}
