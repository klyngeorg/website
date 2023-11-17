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
  path="/medlem"
  title="Bli medlem"
  description="Bli medlem av Klynge Næringsforening og få tilgang til et nettverk av likesinnede individer som du kan dele erfaringer, utvide ditt nettverk, samarbeide og få støtte fra."
/>

<div class="content">
  <h1>Bli medlem av Klynge Næringsforening</h1>

  Klynge Næringforening er en forening for bedrifter og enkeltpersoner som ønsker å samarbeide og
  innovere med andre. Vi arrangerer nettverkslunsjer, kurs og andre aktiviteter for å hjelpe våre
  medlemmer med å utvide sitt nettverk, dele erfaringer og få støtte fra andre likesinnede
  individer.

  <h2>Hvorfor bli medlem?</h2>

  <ul>
    <li>
      <strong>Erfaringsdeling:</strong> Dra nytte av kunnskap og erfaringer fra andre, og del dine egne
      innsikter.
    </li>
    <li>
      <strong>Nettverksbygging:</strong> Knytt bånd med mennesker i ulike faser av karriere eller livsreise,
      og skape verdifulle forbindelser.
    </li>
    <li>
      <strong>Lunsj annenhver torsdag:</strong> Vi møtes på Vaaghals annenhver torsdag for et skikkelig
      godt måltid.
    </li>
  </ul>

  <h2>Hva kan du forvente som medlem?</h2>
  <p>
    Alle medlemmer av Klynge Næringsforening møtes på Vaaghals annenhver torsdag for å samles,
    diskutere, lære og dele erfaringer, bygge nettverk, samarbeide og støtte hverandre.
  </p>
  <p>
    Fra tid til annen har vi aktiviteter, slik som opplevelser, kurs innen relevante temaer og andre
    samlinger.
  </p>

  <h2>Hva koster det?</h2>
  <p>
    Medlemmer av Klynge Næringsforening betaler {formatter.format(prices.yearly)} per tolv måneder. Lunsjen
    er inkludert i medlemskapet.
  </p>
  <p>
    For å senke terskelen for at folk besøker oss, betaler gjester en redusert pris på {formatter.format(
      prices.guest
    )} per gang. I løpet av en 12 måneders periode kan gjester kun være med 4 ganger.
  </p>
  <p>
    Om du vil betale månedlig koster det {formatter.format(prices.monthly)} per måned. Om du ikke ønsker
    binding koster det {formatter.format(prices.monthlyWithoutContract)} per måned.
  </p>

  <h2>Klar for å bli medlem?</h2>
  <p>Alle medlemmer må godkjennes av styret i Klynge Næringsforening.</p>

  <a
    class="signup"
    href="https://forms.gle/wNBShrE6oNr8nXyy9"
  >
    Gå til innmeldingsskjema
  </a>
</div>

<style>
  .content {
    max-width: 60ch;
    margin: 0 auto;
  }

  li {
    margin-block: 1em;
  }

  .signup {
    display: inline-block;
    background: var(--primary-color);
    color: var(--light-bg-color);
    text-decoration: none;
    padding-block: 1rem;
    padding-inline: 1.4rem;
    border-radius: 50px;
  }
</style>
