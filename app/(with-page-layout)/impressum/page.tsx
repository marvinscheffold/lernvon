import { Container } from "@/app/_components/Container";
import { Typography } from "@mui/material";

export default function Page() {
  return (
    <Container>
      <div className="py-16 flex flex-col gap-6">
        <Typography variant="h3" component={"h1"}>
          Impressum
        </Typography>
        <Typography variant="body1">
          lernvon ist ein Produkt der Phelb UG (haftungsbeschränkt)<br></br>
          Wehrleshalde 4/1<br></br>
          73434 Aalen<br></br>
          Deutschland<br></br>
          Amtsgericht Berlin (Charlottenburg) - HRB 247874
        </Typography>
        <Typography variant="h4" component={"h2"} className="break-words">
          Vertretungsberechtigter Geschäftsführer
        </Typography>
        <Typography variant="body1">Marvin Scheffold</Typography>
        <Typography variant="h4" component={"h2"} className="break-words">
          Kontakt
        </Typography>
        <Typography variant="body1">E-Mail: info@lernvon.de</Typography>
        <Typography variant="h4" component={"h2"} className="break-words">
          Haftungsausschluss
        </Typography>
        <Typography variant="body1">
          Haftung für Inhalte <br></br>
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
          die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
          jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7
          Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
          Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
          Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
          gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
          forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
          Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
          von entsprechenden Rechtsverletzungen werden wir diese Inhalte
          umgehend entfernen. <br></br>
          <br></br>
          Haftung für Links<br></br>
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
          permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
          konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen<br></br>
          <br></br>
          Urheberrecht<br></br>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </Typography>
      </div>
    </Container>
  );
}
