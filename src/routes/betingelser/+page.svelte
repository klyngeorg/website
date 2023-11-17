<script>
  import MetaTags from '$components/meta-tags.svelte';
  import { prices } from '$libs/prices';

  const formatter = new Intl.NumberFormat('no-NB', {
    style: 'currency',
    currency: 'NOK',
    currencyDisplay: 'code',
    maximumFractionDigits: 0
  });
</script>

<MetaTags
  path="/betingelser"
  title="Personvernerklæring"
  description="Les om hvordan Klynge Næringsforening samler inn og bruker personvernopplysninger"
/>

<div class="content">
  <h1>Medlemsbetingelser</h1>

  <ol>
    <li>
      For å bli medlem av Klynge Næringsforening må du være interessert i å samarbeide og innovere
      med andre.
    </li>
    <li>
      Du kan søke om medlemskap ved å fylle ut digitalt søknadsskjema. Styret vil vurdere din søknad
      og gi deg beskjed om du er godkjent eller ikke innen 14 dager.
    </li>
    <li>
      Som medlem av Klynge Næringsforening forplikter du deg til å betale en årlig forskuddsvis
      medlemsavgift, stor {formatter.format(prices.yearly)}. Hvis du ønsker å betale forskuddsvis
      månedlig koster det {formatter.format(prices.monthly)} per. Hvis du ikke ønsker å binde deg til
      et år, kan du betale {formatter.format(prices.monthlyWithoutContract)}
      per måned uten binding.
    </li>
    <li>
      Medlemsavgiften inkluderer medlemskontingenten på {formatter.format(prices.membership)}, som
      gir deg stemmerett på årsmøtet, og et abonnement som definert over, som dekker kostnadene for
      Klynge nettverkslunsjer og eventuelle andre aktiviteter.
    </li>
    <li>
      Som medlem av Klynge Næringsforening har du rett til å delta på alle møter, aktiviteter, kurs
      og samlinger som foreningen arrangerer. Enkelte arrangementer kan ha egne billettkostnader. Du
      har også tilgang til et nettverk av likesinnede individer som du kan dele erfaringer, utvide
      ditt nettverk, samarbeide og få støtte fra. Det er opp til styret å bestemme innhold og
      frekvens på foreningens møter, aktiviteter, kurs og samlinger.
    </li>
    <li>
      Som medlem av Klynge Næringsforening forventes du å bidra til foreningens formål og verdier,
      og å oppføre deg på en respektfull og profesjonell måte overfor andre medlemmer og
      samarbeidspartnere. Du forventes også å overholde foreningens vedtekter og retningslinjer, som
      du kan finne på foreningens nettside.
    </li>
    <li>
      Hvis du ønsker å si opp ditt medlemskap, må du gi skriftlig beskjed til styret i Klynge
      Næringsforening minst én måned før utgangen av den aktuelle betalingsperioden. Hvis du har
      betalt for et helt år, vil du ikke få refundert medlemsavgiften. Hvis du har betalt månedlig,
      vil du ikke bli belastet for neste måned etter oppsigelsen.
    </li>
    <li>
      Styret i Klynge Næringsforening forbeholder seg retten til å avslutte ditt medlemskap hvis du
      bryter med foreningens vedtekter, retningslinjer, formål eller verdier, eller hvis du ikke
      betaler medlemsavgiften innen forfall. Du vil få skriftlig varsel om oppsigelsen og en
      mulighet til å uttale deg før styret fatter sitt endelige vedtak.
    </li>
    <li>
      Ved å akseptere disse medlemsbetingelsene samtykker du til at Klynge Næringsforening kan
      behandle dine personopplysninger i henhold til personvernloven og foreningens
      personvernerklæring. Du samtykker også til at Klynge Næringsforening kan sende deg informasjon
      om foreningens aktiviteter, nyheter og tilbud via e-post, SMS eller andre kanaler. Du kan når
      som helst trekke tilbake ditt samtykke eller endre dine preferanser ved å kontakte foreningen.
    </li>
  </ol>
</div>

<style>
  .content {
    max-width: 60ch;
    margin: 0 auto;
  }

  li {
    margin-block: 1em;
  }
</style>
