"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const sections = [
  {
    title: "Grundlagen",
    items: [
      {
        q: "Was ist ein Fonds?",
        a: `
Ein Fonds ist eine Art Korb, in dem sich verschiedene Wertpapiere wie Aktien, Anleihen oder Geldbestände in unterschiedlichen Währungen befinden.

Gäbe es keinen Fonds, müsste man jede Aktie oder jedes andere Wertpapier einzeln erwerben und dafür sorgen, dass alles zueinander passt. Deshalb ist es einfacher, den ganzen Korb zu kaufen und die Auswahl der Wertpapiere dem Fondsmanagement zu überlassen.
        `,
      },

      {
        q: "Was ist ein:e Fondsmanager:in?",
        a: `
Ein:e Fondsmanager:in oder Portfoliomanager:in kümmert sich um die Zusammensetzung eines Fonds.

Er oder sie sorgt dafür, dass durch die effiziente Auswahl der einzelnen Fondsbestandteile wie Aktien, Anleihen und unterschiedlichen Währungen ein ausgeglichenes Verhältnis zwischen Risiko (Verlust) und Ertrag (Gewinn) entsteht, welches Anlegenden zugute kommt.

Analogie: Fondsmanager = Koch

Der Koch (Fondsmanager) sorgt durch die richtige Auswahl und Dosierung der Zutaten (Wertpapiere) dafür, dass die Suppe (der Fonds) gut schmeckt.
        `,
      },

      {
        q: "Was sind Aktien?",
        a: `
Aktien sind Wertpapiere, die Anteile eines Unternehmens bzw. einer Aktiengesellschaft verkörpern.

Als Käufer:in einer Aktie gehört einem somit ein kleiner Teil des jeweiligen Unternehmens. Die Aktie ist der sogenannte Anteilsschein, welcher bestätigt, dass man Miteigentümer:in der Gesellschaft ist.

Aktionäre und Aktionärinnen sind direkt vom Gewinn und Verlust des Unternehmens betroffen. Wenn die Geschäfte gut laufen, profitieren sie von Dividenden. Macht das Unternehmen Verlust, wirkt sich das ebenfalls auf die Aktionär:innen aus.
        `,
      },

      {
        q: "Was sind Anleihen?",
        a: `
Staaten wie Deutschland, Italien oder Kanada benötigen Kapital, um ihre Haushalte oder Projekte zu finanzieren.

Anleihen sind eine Art Kredit, welchen Staaten oder Länder ausgeben, um sich mittel- oder langfristig Kapital zu beschaffen.

Die Anleihen bringen ihren Inhaber:innen einen festgelegten Zinsertrag, der zu einem bestimmten Zeitpunkt ausgezahlt wird.
        `,
      },

      {
        q: "Warum verwendet ihr keine ETFs?",
        a: `
ETFs sind ein wichtiger Schritt in Richtung Kostenoptimierung für die Kapitalanlage.

Dennoch besitzen sie Schwächen, beispielsweise erhöhte Transaktionskosten sowie eingeschränkte Handelbarkeit in kritischen Marktphasen.

Unsere Strategien verzichten daher bewusst auf ETFs und setzen stattdessen auf flexiblere und oft kostengünstigere Alternativen wie Futures.

Dadurch haben wir außerdem vollen Einfluss darauf, welche Wertpapiere sich im Fonds befinden und können strenge Nachhaltigkeitskriterien umsetzen.
        `,
      },

      {
        q: "Was ist ein Future?",
        a: `
Futures gehören zur Gruppe der Derivate und dienen vor allem der Absicherung gegenüber Marktschwankungen.

Dabei verpflichtet sich ein:e Käufer:in, eine Ware oder einen Vermögenswert zu einem festgelegten Zeitpunkt und Preis zu kaufen.

Heute werden Futures häufig genutzt, um Indizes abzubilden — ähnlich wie ETFs, jedoch oft kostengünstiger und flexibler.

Für Privatanleger:innen sind Futures komplex, werden aber im professionellen Fondsmanagement häufig eingesetzt.
        `,
      },
    ],
  },
  {
    title: "Depot",
    items: [
      {
        q: "Wofür benötige ich ein Depot?",
        a: `Ein Depot ist wie ein spezielles Konto, in dem deine Investitionen, wie z.B. Fonds, aufbewahrt werden.

Stell dir ein Depot als eine Art Schatzkiste vor, in der deine Wertpapiere sicher gelagert werden.

Wenn du bei Evergreen investierst, benötigst du ein Depot, damit wir deine Geldanlagen für dich verwalten können. Die Depoteröffnung ist also der erste Schritt, um in die Welt der Geldanlage einzusteigen.`,
      },
      {
        q: "Wie erfolgt die Depoteröffnung bei Evergreen?",
        a: `Die kostenlose Depoteröffnung bei unserer Partnerbank DAB BNP Paribas ist einfach online in wenigen Schritten möglich. Als Unterlagen werden lediglich deine Bankdaten sowie dein Personalausweis oder Reisepass benötigt.

Schritt 1: Kontoerstellung

Erstelle als Erstes auf unserer Website über den Button „Jetzt starten“ ein Evergreen Benutzerkonto. Dafür brauchst du nur eine E-Mail-Adresse und ein selbst gewähltes Passwort.

Schritt 2: Ermittlung des Anlagetyps und der optimalen Strategie

Damit wir die Geldanlage bestmöglich an deine Vorstellungen anpassen können, ermitteln wir zunächst deinen Anlagetyp.

Schritt 3: Angabe persönlicher Daten und Identifizierung

Anschließend fragen wir einige persönliche Daten ab, um diese später mit deinem Personalausweis oder Reisepass abgleichen zu können.

Schritt 4: Identifizierung

Deine Identifizierung erfolgt schnell und sicher über POSTIDENT. Ist die Identifizierung erfolgreich abgeschlossen, wird dein Depot bei der DAB BNP Paribas eröffnet.`,
      },
      {
        q: "Kann ich ein Depot eröffnen, obwohl ich außerhalb von Deutschland wohne?",
        a: `Eine Depoteröffnung ist auch möglich, wenn du nicht in Deutschland wohnst oder außerhalb von Deutschland steuerlich ansässig bist.

Allerdings können wir nur ein Depot für dich eröffnen, wenn du in einem dieser Länder wohnhaft bist:

Australien, Belgien, Dänemark, Deutschland, Estland, Finnland, Frankreich, Italien, Japan, Luxemburg, Neuseeland, Niederlande, Norwegen, Österreich, Polen, Portugal, Schweden, Schweiz, Spanien, Tschechien oder Vereinigtes Königreich.

Wenn du außerhalb von Deutschland steuerpflichtig bist, werden anfallende Steuern nicht automatisch abgeführt.`,
      },
      {
        q: "Kann ich ein Depot eröffnen, obwohl ich keine deutsche Staatsbürgerschaft besitze?",
        a: `Eine Depoteröffnung bei Evergreen ist auch möglich, wenn keine deutsche Staatsbürgerschaft besteht.

Die einzige Ausnahme bilden Personen mit einer US-amerikanischen Staatsbürgerschaft. Für diese dürfen wir aus rechtlichen Gründen kein Depot eröffnen.`,
      },
      {
        q: "Kann ich auch ein Unternehmensdepot eröffnen?",
        a: `Unter firmenzins.plus kann Betriebsvermögen gewinnbringend angelegt werden. Auch Stiftungen und Vereine haben dort die Möglichkeit, von attraktiven Zinsen für ihr Kapital zu profitieren.`,
      },
      {
        q: "Was gilt als Meldenachweis?",
        a: `Wenn du zur Identifizierung deinen Reisepass oder ein anderes Ausweisdokument ohne Adressangabe verwendet hast, benötigen wir einen Nachweis deines Wohnsitzes.

Als Meldenachweis akzeptieren wir:

Gültiger Personalausweis mit Adressangabe
Meldebescheinigung
Gültiger Aufenthaltstitel mit Adressangabe

Das Dokument darf nicht abgelaufen und nicht älter als 12 Monate sein.`,
      },
      {
        q: "Was ist das Referenzkonto?",
        a: `Bei der Depoteröffnung muss ein Referenzkonto hinterlegt werden, das mit dem Verrechnungskonto verknüpft wird.

Alle Einzahlungen auf das Depot werden automatisch von diesem Referenzkonto abgebucht. Auch für Auszahlungen wird ausschließlich das Referenzkonto verwendet.

Für jedes Depot kann lediglich ein einziges Referenzkonto hinterlegt werden.`,
      },
      {
        q: "Wozu brauche ich ein Verrechnungskonto?",
        a: `Wenn du dein Geld bei Evergreen anlegst, wird dir ein eigenes Wertpapierdepot bei DAB BNP Paribas eröffnet.

Da über dieses Depot keine Zahlungsströme erfolgen können, erstellen wir dir zusätzlich ein Verrechnungskonto.

Auf diesem Konto werden Einzahlungen von deinem Referenzkonto in dein Depot und Auszahlungen von deinem Depot auf dein Referenzkonto verrechnet.`,
      },
      {
        q: "Gibt es einen Mindestanlagebetrag?",
        a: `Du kannst bei uns mit 1 Euro starten, egal ob du regelmäßig oder einmalig bei uns anlegst.`,
      },
      {
        q: "Gibt es eine Mindestlaufzeit?",
        a: `Für dein Evergreen-Depot gibt es keine Mindestlaufzeit.

Das gilt auch für alle Strategien im Vermögensaufbau sowie für das ZinsPocket.

Eine Ausnahme bildet das ZinsPocket Plus: Hier besteht eine feste Mindestlaufzeit von 6 Monaten.`,
      },
      {
        q: "Wie kann ich Geld in mein Depot einzahlen?",
        a: `In jedem Pocket gibt es die Funktion „Einzahlen“, über die jederzeit kostenfrei Einmalzahlungen beauftragt werden können.

Alternativ sind Einzahlungen jederzeit per Überweisung an die IBAN des Verrechnungskontos möglich.

Bitte beachte: Bei Einzahlungen per SEPA-Lastschrift kann in einem Zeitraum von 8 Wochen maximal eine Summe von 100.000 Euro eingezahlt werden.`,
      },
      {
        q: "Wo finde ich meine Depotnummer?",
        a: `Deine Depotnummer wird dir in deinen persönlichen Kundendaten der DAB BNP Paribas angezeigt. Diese kannst du jederzeit in deinem Account unter „Mein Profil“ abrufen.`,
      },
      {
        q: "Kann ich eine Vollmacht für mein Depot erteilen?",
        a: `Ja, eine Vollmacht für dein Depot kann ausgestellt werden.

Das Dokument muss ausgefüllt und unterschrieben im Original per Post zurückgesendet werden.

Außerdem muss sich die zu bevollmächtigende Person zur Identitätsfeststellung legitimieren.`,
      },
      {
        q: "Wie kann ich meinen hinterlegten Nachnamen ändern?",
        a: `Wenn sich dein Nachname geändert hat, beispielsweise durch Heirat, benötigen wir für die Anpassung im Depot einen Antrag auf Änderung.

Das Änderungsdokument sendest du ausgefüllt und unterschrieben per Post im Original an Evergreen.`,
      },
      {
        q: "Wie funktioniert ein Depotübertrag?",
        a: `Bei einem Depotübertrag werden alle deine Wertpapiere von deinem alten Depot in dein neues Evergreen-Depot übertragen.

Ein Depotübertrag innerhalb Deutschlands ist kostenfrei.

Sobald deine Wertpapiere eingegangen sind, verkaufen wir diese automatisch und investieren den Erlös entsprechend deiner gewählten Anlagestrategie.`,
      },
      {
        q: "Gibt es auch Gemeinschaftskonten?",
        a: `Aktuell ist bei Evergreen nur die Eröffnung von Einzelkonten möglich.`,
      },
      {
        q: "Kann ich mein Depot an verschiedene Finanzsoftwares anbinden?",
        a: `Das ist leider nicht möglich, da die Pocketansicht deines Depots von Evergreen bereitgestellt wird und nicht von der Partnerbank DAB BNP Paribas.`,
      },
      {
        q: "Gibt es von Evergreen auch eine App?",
        a: `Ja, es gibt die Evergreen App für iOS und Android. So kannst du dein Depot bequem aufrufen und deine Geldanlage managen.`,
      },
      {
        q: "Wie kann ich mein Depot kündigen?",
        a: `Bei Evergreen gibt es keine Kündigungsfristen und du kannst dein Depot jederzeit auflösen.

Eine Kündigung ist jederzeit kostenfrei möglich.

Dein Depot kannst du in der Profil-Ansicht unter „Sicherheit“ digital kündigen.`,
      },
      {
        q: "Wie kann ich Evergreen weiterempfehlen?",
        a: `Evergreen weiterempfehlen zahlt sich aus: Für jede erfolgreiche Depoteröffnung gibt es 10 Euro für dich und deine Freund:innen.

Den persönlichen Empfehlungscode findest du in deinem Depot unter „Mehr für dich“.`,
      },
      {
        q: "Wie lange dauert eine Auszahlung?",
        a: `Die Dauer einer Auszahlung hängt von der gewählten Strategie ab:

Vermögensaufbau-Strategien: in der Regel 3 bis 4 Bankarbeitstage
ZinsPocket: etwa 5 Bankarbeitstage
ZinsPocket Plus: bis zu einer Woche`,
      },
    ],
  },
  {
    title: "Geldanlage",
    items: [
      {
        q: "Was sind Pockets?",
        a: `Mit den Evergreen Pockets kannst du unendlich viele Unterdepots für all deine Ziele anlegen.
  
  Jedes Pocket ist also eine eigene Geldanlage, für die du einen eigenen Sparplan und eine eigene Strategie festlegen kannst.
  
  Die passende Strategie für jedes Pocket finden wir gemeinsam mit dir bei der Pocketerstellung.`,
      },
      {
        q: "Wie funktionieren Sparpläne?",
        a: `Unsere Sparpläne vereinfachen deine Finanzplanung und helfen dir dabei, deine Sparziele zu erreichen.
  
  Die Sparpläne werden monatlich ausgeführt. Der Betrag wird automatisch am 3. eines jeden Monats von deinem Referenzkonto auf dein Verrechnungskonto abgebucht.
  
  Du kannst die Höhe jederzeit anpassen oder den Sparplan pausieren.`,
      },
      {
        q: "Wie funktionieren Auszahlungspläne?",
        a: `Mit einem Auszahlungsplan kannst du dir von deinen Pockets monatlich eine bestimmte Summe auszahlen lassen.
  
  Die Auszahlung wird jeweils am 3. eines Monats angestoßen. Nach Abschluss der Fondsverkäufe wird der Betrag automatisch auf dein Referenzkonto überwiesen.`,
      },
      {
        q: "Was ist der Evergreen Fondsshop?",
        a: `Über unseren Fondsshop kannst du eigenständig investieren und dir dein individuelles nachhaltiges Anlageportfolio selbst zusammenstellen.
  
  Dabei hast du alle Fonds zur Auswahl, die von uns gemanagt werden:
  
  Evergreen Stable World Fund
  Evergreen Sustainable World Stocks
  Evergreen Sustainable World Bonds
  Tomorrow Fund
  
  Der Fondsshop eignet sich besonders für erfahrene Anleger:innen.`,
      },
      {
        q: "Wie legt Evergreen mein Geld in den Pockets an?",
        a: `In den Pockets wird dein Geld in eine unserer 11 Strategien investiert.
  
  Im Prozess der Pocketerstellung finden wir gemeinsam mit dir heraus, welche Strategie für dich und dein Pocket am besten geeignet ist.
  
  Dabei wird dein Geld immer nachhaltig investiert.`,
      },
      {
        q: "Welche Anlagestrategien gibt es bei Evergreen?",
        a: `Bei Evergreen kannst du in 11 verschiedene Anlagestrategien investieren.
  
  Diese unterscheiden sich in ihren Risikostufen und ihrem Anlageansatz:
  
  Evergreen Komfort:
  Aktiv investieren mit Risikomanagement.
  
  Evergreen Balance:
  Stabilität trifft Wachstum für eine ausgewogene Geldanlage.
  
  Evergreen Wachstum:
  Maximales Potenzial für langfristiges Wachstum.
  
  In deinem Depot kannst du für jedes Pocket eine eigene Strategie festlegen.`,
      },
      {
        q: "Kann ich die Strategie meines Pockets ändern?",
        a: `Jedes Pocket ist fest mit einer Strategie verbunden. Diese kann für ein Pocket nicht direkt geändert werden.
  
  Wenn du eine andere Strategie besparen möchtest, kannst du ein neues Pocket mit der gewünschten Strategie anlegen.
  
  Danach kannst du uns informieren, dass dein bestehendes Guthaben übertragen werden soll.`,
      },
      {
        q: "Wann wird die Wertentwicklung der Fonds aktualisiert?",
        a: `Die Fondspreise werden in der Regel am frühen Nachmittag aktualisiert.
  
  Dann wird der Fondspreis beziehungsweise Depotwert des Vortages angezeigt, da der aktuelle Tagespreis für Publikumsfonds nur einmal am Tag festgelegt und erst einen Tag später veröffentlicht wird.`,
      },
      {
        q: "Warum ist die Wertdarstellung im Depot verzögert?",
        a: `Die Wertdarstellung im Depot zeigt immer die aktuellen Preise zum letzten Bewertungstag an.
  
  Unsere Fonds werden einmal täglich durch die Kapitalverwaltungsgesellschaft bewertet.
  
  Da die Tagesbewertung erst am Mittag des nächsten Tages übermittelt wird, kann die Wertdarstellung im Depot immer erst einen Tag verzögert angezeigt werden.`,
      },
    ],
  },{
    title: "Anlagestrategie",
    items: [
      {
        q: "Was ist Evergreen Komfort?",
        a: `Evergreen Komfort basiert auf unserem Evergreen Stable World Fund und wird durch ein aktives Risikomanagement gesteuert.
  
  Unser Fondsmanagement-Team passt die Zusammensetzung des Fonds täglich an die aktuelle Marktlage an, um starke Kursschwankungen zu vermeiden und mögliche Verluste zu begrenzen.
  
  Ein besonderes Merkmal ist die sogenannte Komfortzone. Diese zeigt eine Wertuntergrenze, die mit sehr hoher Wahrscheinlichkeit nicht unterschritten wird.
  
  Die Strategie eignet sich besonders für sicherheitsorientierte Anleger:innen.`,
      },
  
      {
        q: "Was ist Evergreen Balance?",
        a: `Evergreen Balance ist unsere ausgewogene Anlagestrategie für alle, die mittelfristig investieren möchten.
  
  Die Strategie kombiniert drei Fonds:
  
  Evergreen Sustainable World Stocks
  Evergreen Sustainable World Bonds
  Evergreen Stable World Fund
  
  Durch die Kombination entstehen unterschiedliche Strategien mit verschiedenen Risikostufen und Renditechancen.`,
      },
  
      {
        q: "Was ist Evergreen Wachstum?",
        a: `Evergreen Wachstum ist unsere Strategie für langfristige Anleger:innen mit Fokus auf höhere Renditechancen.
  
  Die Strategien kombinieren nachhaltige Aktien- und Anleihenfonds.
  
  Es gibt vier unterschiedliche Wachstum-Strategien, die sich durch den Anteil von Aktien und Anleihen unterscheiden.`,
      },
  
      {
        q: "Wie heißt meine neue Anlagestrategie?",
        a: `Die bisherigen GREENactive und GREENimpact Strategien wurden umbenannt.
  
  Beispiele:
  
  GREENactive 1 → Evergreen Komfort
  GREENactive 5 → Evergreen Balance 30
  GREENimpact 80 → Evergreen Wachstum 80
  GREENimpact 100 → Evergreen Wachstum 100
  
  Die neuen Namen orientieren sich stärker an Risiko und Anlageschwerpunkt.`,
      },
  
      {
        q: "Was ist die Komfortzone bei Evergreen Komfort?",
        a: `Die Komfortzone zeigt eine Untergrenze für den Wert deiner Geldanlage an.
  
  Durch aktives Risikomanagement werden Risiken reduziert, sobald sich der Wert deiner Anlage der Komfortzone nähert.
  
  Dadurch wird das maximale Verlustpotenzial mit hoher Wahrscheinlichkeit begrenzt.`,
      },
  
      {
        q: "Was bedeutet die Kassequote im Evergreen Stable World Fund?",
        a: `Der Evergreen Stable World Fund besitzt ein aktives Risikomanagement.
  
  In schwierigen Marktphasen kann ein Teil des Fonds vorübergehend als Kasse gehalten werden, also nicht investiert sein.
  
  Dadurch sollen hohe Verluste vermieden werden. Sobald sich die Märkte erholen, wird das Kapital wieder investiert.`,
      },
  
      {
        q: "Wie wird das Risikomanagement umgesetzt?",
        a: `Das Risikomanagement erfolgt über unseren Passive Dynamic Investing Ansatz.
  
  Dabei wird das Portfolio täglich an die aktuelle Marktsituation angepasst.
  
  Aktien- und Anleihenquoten werden dynamisch verändert, um Risiken zu begrenzen und Chancen effizient zu nutzen.`,
      },
  
      {
        q: "Wie stellt Evergreen Diversifikation sicher?",
        a: `Diversifikation bedeutet die Streuung von Risiken.
  
  Evergreen investiert nicht in einzelne Aktien, sondern breit gestreut in viele Unternehmen, Branchen und Regionen weltweit.
  
  Dadurch wird das Risiko eines vollständigen Kapitalverlusts reduziert.`,
      },
  
      {
        q: "Was ist Risikobudgetierung?",
        a: `Risikobudgets helfen dabei, Verlustrisiken kalkulierbar zu machen.
  
  Dabei wird deinem Kapital eine Wertuntergrenze zugeordnet.
  
  Beispiel:
  100 Euro Kapital
  10 Euro Risikobudget
  → Wertuntergrenze = 90 Euro
  
  So behalten wir dein Portfolio auch in turbulenten Marktphasen im Blick.`,
      },
    ],
  },
  {
    title: "Kosten",
    items: [
      {
        q: "Wie viel kostet euer Produkt im Jahr?",
        a: `Wir haben eine transparente und faire Kostenstruktur geschaffen.
  
  Für unsere klassischen Anlagestrategien entstehen keine zusätzlichen Kosten für Service, Depot oder Transaktionen.
  
  Die Gesamtkostenquote der Evergreen-Fonds liegt bei etwa 0,79 % pro Jahr.
  
  Beim ZinsPocket und ZinsPocket Plus fällt eine Servicegebühr von 0,39 % pro Jahr an.`,
      },
  
      {
        q: "Was ist die TER?",
        a: `TER steht für Total Expense Ratio, also Gesamtkostenquote.
  
  Die TER fasst die jährlichen Kosten eines Fonds zusammen, beispielsweise Verwaltungs- oder Depotbankkosten.
  
  Mit der TER lassen sich die Gebühren verschiedener Fonds vergleichen.`,
      },
  
      {
        q: "Gibt es unterschiedliche Kosten für unterschiedliche Anlagebeträge?",
        a: `Nein.
  
  Bei Evergreen fallen keine unterschiedlichen Kosten für unterschiedliche Anlagebeträge an.
  
  Alle Anleger:innen zahlen die gleichen fairen Gebühren.`,
      },
  
      {
        q: "Wie könnt ihr eure Kosten so niedrig halten?",
        a: `Evergreen ist selbst Fondsmanager und verwaltet die eingesetzten Fonds eigenständig.
  
  Dadurch entstehen keine zusätzlichen Kosten für externe Fondsmanager oder Zwischenhändler.
  
  Den Kostenvorteil geben wir direkt an unsere Anleger:innen weiter.`,
      },
    ],
  },{
    title: "Sicherheit",
    items: [
      {
        q: "Kann ich bei euch mein ganzes investiertes Geld verlieren?",
        a: `Nein.
  
  Als Orientierung für die Verlustrisiken dient deine gewählte Strategie und ihr Risikolevel.
  
  Welche Strategie am besten zu dir passt, finden wir gemeinsam im Prozess der Pocketerstellung heraus.
  
  Für unterschiedliche Sparziele kannst du verschiedene Pockets mit unterschiedlichen Strategien anlegen.`,
      },
  
      {
        q: "Wie komme ich an mein Geld, falls ihr pleite geht?",
        a: `Dein Geld wird zwar von uns gemanagt, gehört aber weiterhin dir.
  
  Wir selbst haben keinen direkten Zugriff auf dein Kapital, sondern steuern lediglich die Fonds, in denen dein Geld investiert ist.
  
  Es handelt sich um sogenanntes Sondervermögen, welches rechtlich getrennt von Evergreen verwahrt wird.`,
      },
  
      {
        q: "Wie ist mein Investment als Sondervermögen geschützt?",
        a: `Das Kapital in den Fonds wird als Sondervermögen geführt.
  
  Dieses Sondervermögen ist vollständig vom Vermögen von Evergreen und der Investmentgesellschaft getrennt und wird separat bei einer unabhängigen Depotbank gelagert.
  
  Dadurch bleibt dein Geld auch im Fall einer Insolvenz geschützt.
  
  Zusätzlich überwacht die BaFin sämtliche Prozesse und Institutionen.
  
  Analogie:
  Den Schlüssel zum Tresor besitzt immer der Anleger oder die Anlegerin selbst.`,
      },
    ],
  },
  {
    title: "Fonds",
    items: [
      {
        q: "Was ist Evergreen Stable World Fund?",
        a: `Der Evergreen Stable World Fund ist ein sicherheitsorientierter Publikumsfonds von Evergreen.
  
  Das Besondere ist das aktive Risikomanagement mit Risikobudgetierung. Dadurch können starke Marktschwankungen abgeschwächt werden.
  
  Der Fonds berücksichtigt neben finanziellen auch ökologische und soziale Kriterien und ist nach Artikel 8 der EU-Offenlegungsverordnung klassifiziert.`,
      },
  
      {
        q: "Was ist der Evergreen Sustainable World Stocks?",
        a: `Der Evergreen Sustainable World Stocks ist ein globaler nachhaltiger Aktienfonds.
  
  Im Vergleich zum Evergreen Stable World Fund besitzt er höhere Renditechancen, aber auch stärkere Schwankungen.
  
  Der Fonds eignet sich besonders für langfristige Sparziele wie Altersvorsorge oder Vermögensaufbau und ist nach Artikel 9 klassifiziert.`,
      },
  
      {
        q: "Was ist der Evergreen Sustainable World Bonds?",
        a: `Der Evergreen Sustainable World Bonds ist ein nachhaltiger Anleihenfonds.
  
  Im Vergleich zu Aktienfonds sind die Wertschwankungen in der Regel geringer.
  
  Der Fonds investiert unter anderem in Green Bonds und verfolgt ein konkretes Nachhaltigkeitsziel nach Artikel 9 der EU-Offenlegungsverordnung.`,
      },
  
      {
        q: "Was ist der Tomorrow Fund?",
        a: `Der Tomorrow Fund wird von Evergreen für den nachhaltigen Banking-Anbieter Tomorrow gemanagt.
  
  Der Fonds investiert schwerpunktmäßig in nachhaltige Unternehmen und kleinere Firmen mit Fokus auf Klima- und Nachhaltigkeitsthemen.
  
  Als reiner Aktienfonds eignet er sich besonders für langfristige Sparziele.`,
      },
  
      {
        q: "Wo finde ich Informationen zu den Fonds?",
        a: `Aktuelle und historische Informationen zu allen Evergreen Fonds findest du auf den jeweiligen Fondsdatenblättern und im Download-Bereich.
  
  Dort werden die wichtigsten Eigenschaften, Kennzahlen und Nachhaltigkeitsinformationen der Fonds erklärt.`,
      },
  
      {
        q: "Kann man eure Fonds auch woanders erwerben?",
        a: `Ja.
  
  Unsere Fonds können auch über viele Banken und Sparkassen gekauft werden — du benötigst dafür nicht zwingend ein Evergreen-Depot.
  
  Dafür kannst du die jeweiligen WKN- oder ISIN-Nummern der Fonds verwenden.`,
      },
    ],
  },{
    title: "Nachhaltigkeit",
    items: [
      {
        q: "Wie steht Evergreen zum Thema Nachhaltigkeit?",
        a: `Für uns steht fest: Geldanlage darf nicht die Welt kosten.
  
  Nachhaltigkeit endet für uns nicht beim Produkt. Deshalb sind nicht nur unsere Fonds nachhaltig aufgestellt, sondern auch Evergreen als Unternehmen.
  
  Evergreen ist B-Corp-zertifiziert und außerdem CO2-neutral durch Kompensation.`,
      },
  
      {
        q: "Was bedeutet es, dass Evergreen eine B Corp ist?",
        a: `B Corp steht für „Certified Benefit Corporation“.
  
  Die Zertifizierung bestätigt, dass Evergreen soziale, ökologische und gesellschaftliche Verantwortung übernimmt.
  
  Dabei werden Themen wie Umwelt, Arbeitnehmer:innen, Kund:innen und Unternehmensführung geprüft.`,
      },
  
      {
        q: "Evergreen ist CO2-neutral durch Kompensation – was bedeutet das?",
        a: `Nicht alle Emissionen lassen sich vermeiden.
  
  Deshalb kompensiert Evergreen unvermeidbare CO2-Emissionen unter anderem durch Klimaschutzprojekte, Moor-Renaturierung und Aufforstungsprojekte.
  
  Dadurch gelten unsere Netto-Emissionen als ausgeglichen.`,
      },
  
      {
        q: "Warum sind eure Fonds nachhaltig?",
        a: `Unsere Fonds berücksichtigen neben Rendite auch ökologische, soziale und ethische Kriterien.
  
  Die Evergreen Fonds sind nach Artikel 8 oder Artikel 9 der EU-Offenlegungsverordnung klassifiziert.
  
  Artikel-9-Fonds verfolgen dabei ein konkretes Nachhaltigkeitsziel.`,
      },
  
      {
        q: "Was sind Impact Investments?",
        a: `Impact Investments sind Investitionen, die neben Rendite auch einen messbaren positiven Einfluss auf Umwelt oder Gesellschaft erzeugen.
  
  Die Investments müssen aktiv zu mindestens einem Nachhaltigkeitsziel der Vereinten Nationen beitragen.`,
      },
  
      {
        q: "Was bedeutet Fonds gemäß Artikel 8 (SFDR)?",
        a: `Artikel-8-Fonds berücksichtigen ökologische und soziale Faktoren im Investmentprozess.
  
  Sie werden auch als „hellgrüne Fonds“ bezeichnet.
  
  Der Evergreen Stable World Fund gehört zu dieser Kategorie.`,
      },
  
      {
        q: "Was bedeutet Fonds gemäß Artikel 9 (SFDR)?",
        a: `Artikel 9 ist die höchste Nachhaltigkeitsklassifizierung der EU-Offenlegungsverordnung.
  
  Diese Fonds verfolgen ein konkretes nachhaltiges Anlageziel und werden auch „dunkelgrüne Fonds“ genannt.`,
      },
  
      {
        q: "Welche Ausschlusskriterien wendet ihr an?",
        a: `Evergreen nutzt strenge ESG- und Nachhaltigkeitskriterien.
  
  Investitionen mit negativen Auswirkungen auf Umwelt, Gesellschaft oder Unternehmensführung werden ausgeschlossen.`,
      },
    ],
  },
  {
    title: "Steuern",
    items: [
      {
        q: "Wann werden Steuern bei der Geldanlage fällig?",
        a: `Auf Zinsen, Dividenden und realisierte Kursgewinne fällt grundsätzlich Abgeltungssteuer an.
  
  Diese beträgt 25 % plus Solidaritätszuschlag und gegebenenfalls Kirchensteuer.
  
  Zusätzlich gibt es den jährlichen Sparerpauschbetrag.`,
      },
  
      {
        q: "Was ist die Vorabpauschale?",
        a: `Die Vorabpauschale ist eine Mindestbesteuerung für Fonds.
  
  Sie soll sicherstellen, dass auch bei thesaurierenden Fonds eine Besteuerung stattfindet, selbst wenn keine Ausschüttung erfolgt.`,
      },
  
      {
        q: "Wie genau senkt ihr meine Steuerlast?",
        a: `Mit der Steuerautomatisierung nutzt Evergreen deinen jährlichen Freibetrag möglichst effizient aus.
  
  Dafür werden automatisch Gewinne bis zur Höhe des Freibetrags realisiert und direkt wieder investiert.`,
      },
  
      {
        q: "Wozu brauche ich einen Freistellungsauftrag?",
        a: `Mit einem Freistellungsauftrag kannst du Kapitalerträge bis zum gesetzlichen Freibetrag steuerfrei erhalten.
  
  Aktuell liegt dieser bei 1.000 Euro pro Person beziehungsweise 2.000 Euro für Ehepaare.`,
      },
  
      {
        q: "Was ist ein Verlustverrechnungstopf?",
        a: `Verluste aus Kapitalanlagen können mit späteren Gewinnen verrechnet werden.
  
  Diese Verluste werden im sogenannten Verlustverrechnungstopf gesammelt.`,
      },
  
      {
        q: "Was ist eine Nichtveranlagungsbescheinigung (NV-Bescheinigung)?",
        a: `Mit einer NV-Bescheinigung können Personen mit geringem Einkommen Kapitalerträge steuerfrei erhalten.
  
  Das gilt beispielsweise häufig für Studierende oder Rentner:innen.`,
      },
  
      {
        q: "Wo finde ich meine Jahressteuerbescheinigung?",
        a: `Die Jahressteuerbescheinigung findest du am Anfang jedes Jahres in der Postbox deines Evergreen-Depots.`,
      },
    ],
  },
  {
    title: "Zinsen",
    items: [
      {
        q: "Wie unterscheidet sich das Zinssparen vom Vermögensaufbau bei Evergreen?",
        a: `Zinssparen eignet sich eher für kurzfristige Sparziele.
  
  Beim Vermögensaufbau investierst du langfristig in Aktien und Anleihen, wodurch höhere Renditechancen entstehen können.`,
      },
  
      {
        q: "Ist der Zinsertrag garantiert?",
        a: `Im ZinsPocket orientiert sich der Zinssatz an den Leitzinsen der EZB.
  
  Im ZinsPocket Plus ist der Zinssatz variabel und nicht garantiert.`,
      },
  
      {
        q: "Wie funktioniert das ZinsPocket?",
        a: `Das ZinsPocket funktioniert ähnlich wie Tagesgeld oder ein Sparbuch.
  
  Das Geld wird direkt am Geldmarkt investiert, wodurch attraktive Zinsen auf Marktniveau erzielt werden können.`,
      },
  
      {
        q: "Wie eröffne ich ein ZinsPocket oder ZinsPocket Plus?",
        a: `Wenn du bereits ein Depot besitzt, kannst du einfach ein neues Pocket anlegen.
  
  Neue Kund:innen wählen bei der Depoteröffnung einfach das Sparziel „Zinsen kassieren“.`,
      },
  
      {
        q: "Für wen ist das ZinsPocket Plus geeignet?",
        a: `Das ZinsPocket Plus eignet sich besonders für kurz- und mittelfristige Sparziele.
  
  Es richtet sich an Menschen, die mehr Sicherheit wünschen als bei Aktieninvestments.`,
      },
  
      {
        q: "Welchen Vorteil hat das ZinsPocket Plus gegenüber Festgeld?",
        a: `Das ZinsPocket Plus bietet die Chance auf attraktivere Zinsen bei gleichzeitig hoher Flexibilität.
  
  Außerdem handelt es sich um Sondervermögen und nicht um klassische Bankeinlagen.`,
      },
  
      {
        q: "Welche Risiken gehe ich mit dem ZinsPocket Plus ein?",
        a: `Das ZinsPocket Plus besitzt ein etwas höheres Risiko als Tages- oder Festgeld.
  
  Der Zinssatz ist variabel und die Rückzahlung des eingesetzten Kapitals ist nicht garantiert.`,
      },
    ],
  },{
    title: "Vermögenswirksame Leistungen",
    items: [
      {
        q: "Was sind vermögenswirksame Leistungen (VL)?",
        a: `Vermögenswirksame Leistungen sind eine staatlich geförderte Sparform.
  
  Arbeitgeber:innen können Mitarbeitende mit bis zu 40 Euro monatlich zusätzlich zum Gehalt unterstützen.
  
  Das Geld wird bei Evergreen automatisch in den nachhaltigen Aktienfonds Evergreen Sustainable World Stocks investiert.`,
      },
  
      {
        q: "Wer kann VL beziehen?",
        a: `VL können grundsätzlich alle Arbeitnehmer:innen in einem sozialversicherungspflichtigen Beschäftigungsverhältnis beziehen.
  
  Dazu zählen auch Auszubildende, Teilzeitkräfte und geringfügig Beschäftigte.`,
      },
  
      {
        q: "Kann auch mein Ehepartner in mein VL-Depot einzahlen?",
        a: `Nein.
  
  Die Einzahlungen sind direkt mit dem jeweiligen Arbeitsverhältnis verknüpft.
  
  Jede Person benötigt daher ein eigenes VL-Depot.`,
      },
  
      {
        q: "Was muss erfüllt sein, damit ich VL erhalte?",
        a: `Du musst prüfen, ob dein Arbeitgeber vermögenswirksame Leistungen anbietet und ob du Anspruch darauf hast.
  
  Anschließend kannst du dein VL-Pocket bei Evergreen eröffnen.`,
      },
  
      {
        q: "Was kostet VL-Sparen bei Evergreen?",
        a: `Bei Evergreen gibt es keine Grundgebühren für VL-Sparen.
  
  Es fallen lediglich die regulären Fondskosten an.`,
      },
  
      {
        q: "Worin wird das VL-Geld bei Evergreen investiert?",
        a: `Das Geld wird automatisch in den nachhaltigen Aktienfonds Evergreen Sustainable World Stocks investiert.`,
      },
  
      {
        q: "Ich habe bereits einen laufenden VL-Vertrag. Kann ich trotzdem ein VL-Pocket eröffnen?",
        a: `Ja.
  
  Du kannst auch mit einem bestehenden VL-Vertrag ein neues VL-Pocket bei Evergreen eröffnen.`,
      },
  
      {
        q: "Ich habe bereits ein Evergreen-Depot. Kann ich darüber auch ein VL-Pocket eröffnen?",
        a: `Ja.
  
  Wenn du bereits ein Depot besitzt, dauert die Eröffnung eines VL-Pockets nur wenige Minuten.`,
      },
  
      {
        q: "Wann kann ich über das Geld meines VL-Pockets verfügen?",
        a: `VL-Verträge besitzen eine Sperrfrist von sieben Jahren.
  
  Nach Ablauf kannst du frei über das Geld verfügen.`,
      },
  
      {
        q: "Greift beim VL-Sparen auch die Steuerautomatisierung?",
        a: `Ja.
  
  Die Steuerautomatisierung funktioniert auch innerhalb deines VL-Pockets.`,
      },
    ],
  },
  {
    title: "Kinderdepot",
    items: [
      {
        q: "Was ist ein Kinderdepot?",
        a: `Ein Kinderdepot ist ein Wertpapierdepot, mit dem für Kinder langfristig Vermögen aufgebaut werden kann.
  
  Bis zur Volljährigkeit verwalten die Sorgeberechtigten das Depot.`,
      },
  
      {
        q: "Wie kann ich ein Kinderdepot eröffnen?",
        a: `Alle Sorgeberechtigten benötigen zunächst ein kostenloses Evergreen-Depot.
  
  Danach kann das Kinderdepot eröffnet und die benötigten Dokumente hochgeladen werden.`,
      },
  
      {
        q: "Wann kann das Kind auf das Depot zugreifen?",
        a: `Mit dem 18. Lebensjahr wird das Depot automatisch auf das Kind übertragen.`,
      },
  
      {
        q: "Können auch andere Geld auf das Kinderdepot einzahlen?",
        a: `Ja.
  
  Auch Verwandte oder Bekannte können Geld auf das Kinderdepot einzahlen.
  
  Jedes Kinderdepot besitzt dafür eine eigene IBAN.`,
      },
  
      {
        q: "Kann Geld aus meinem bestehenden Evergreen-Depot übertragen werden?",
        a: `Ja.
  
  Evergreen organisiert auf Wunsch einen kostenlosen Depotübertrag auf das Kinderdepot.`,
      },
  
      {
        q: "Welche Vorteile bietet ein Kinderdepot?",
        a: `Ein Kinderdepot bietet steuerliche Vorteile, da Freibeträge des Kindes genutzt werden können.
  
  Außerdem gehört das angesparte Vermögen rechtlich dem Kind.`,
      },
  
      {
        q: "Kann ich über das Kinderdepot in den Fondsshop investieren?",
        a: `Aktuell können über das Kinderdepot noch keine Anteile im Fondsshop gekauft werden.`,
      },
    ],
  },{
    title: "Betriebliche Altersvorsorge",
    items: [
      {
        q: "Muss mein Arbeitgeber einer bAV zustimmen?",
        a: `Eine betriebliche Altersvorsorge funktioniert immer gemeinsam mit dem Arbeitgeber.
  
  DYNO übernimmt dabei auf Wunsch das Gespräch mit dem Unternehmen und unterstützt bei der Einrichtung der bAV.`,
      },
  
      {
        q: "Muss mein Arbeitgeber etwas zu meiner bAV dazuzahlen?",
        a: `Ja.
  
  Seit 2022 sind Arbeitgeber gesetzlich verpflichtet, mindestens 15 % Zuschuss zu leisten, sofern Sozialversicherungsbeiträge eingespart werden.
  
  Viele Arbeitgeber zahlen freiwillig sogar mehr.`,
      },
  
      {
        q: "Was passiert mit meiner bestehenden bAV?",
        a: `Bestehende Verträge können geprüft und gegebenenfalls übertragen werden.
  
  Die gesamte Abwicklung wird dabei übernommen.`,
      },
  
      {
        q: "Was passiert mit meiner bAV bei einem Jobwechsel?",
        a: `Die bAV gehört dir.
  
  Bei einem Arbeitgeberwechsel kann der Vertrag häufig mitgenommen oder privat weitergeführt werden.`,
      },
  
      {
        q: "Was bedeutet bis zu 100 % Kapitalmarktquote?",
        a: `Zu Beginn wird das Kapital bis zu 100 % am Kapitalmarkt investiert.
  
  Das Geld wird auf Evergreen Fonds und zusätzliche Wertsicherungsbausteine verteilt.`,
      },
  
      {
        q: "Muss ich später Steuern auf meine bAV zahlen?",
        a: `Ja.
  
  Die Auszahlung im Alter wird nachgelagert versteuert.
  
  Da der persönliche Steuersatz im Ruhestand häufig niedriger ist, entstehen daraus oft Vorteile.`,
      },
  
      {
        q: "Was kostet mich die Evergreen bAV?",
        a: `Für dich entstehen keine zusätzlichen Kosten gegenüber klassischen bAV-Modellen.
  
  Es fallen lediglich die regulären Fondskosten an.`,
      },
  
      {
        q: "Ich bin Geschäftsführer:in einer GmbH. Geht das auch für mich?",
        a: `Ja.
  
  Auch Geschäftsführer:innen können unter bestimmten Voraussetzungen eine betriebliche Altersvorsorge nutzen.`,
      },
    ],
  },
];

export default function HelpPage() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <main className="bg-[#f3f3f3] px-4 py-20">
      <section className="mx-auto max-w-5xl">
        <h1 className="text-center text-[40px] font-light leading-[1] tracking-[-0.05em] text-[#4f5752] md:text-[58px]">
          Wie können wir{" "}
          <span className="font-serif font-bold text-[#001f14]">
            dir helfen?
          </span>
        </h1>

        <div className="mt-20 space-y-20">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="mb-10 text-center text-[34px] font-bold tracking-[-0.04em] text-[#4f5752] md:text-[44px]">
                {section.title}
              </h2>

              <div className="rounded-[2.5rem] border border-[#e7e7e7] bg-white p-5 shadow-[0_10px_35px_rgba(0,0,0,0.03)] md:p-8">
                <div className="space-y-4">
                  {section.items.map((item) => {
                    const isOpen = open === item.q;

                    return (
                      <div
                        key={item.q}
                        className="overflow-hidden rounded-[1.8rem] bg-[#fbf6e8]"
                      >
                        <button
                          onClick={() => setOpen(isOpen ? null : item.q)}
                          className="flex w-full items-center justify-between px-7 py-6 text-left transition hover:bg-[#f7f0db]"
                        >
                          <span className="pr-6 text-[20px] font-bold leading-snug tracking-[-0.03em] text-[#001f14] md:text-[20px]">
                            {item.q}
                          </span>

                          {isOpen ? (
                            <Minus
                              size={24}
                              className="shrink-0 text-[#5d655f]"
                            />
                          ) : (
                            <Plus
                              size={24}
                              className="shrink-0 text-[#5d655f]"
                            />
                          )}
                        </button>

                        <div
                          className={`grid transition-all duration-300 ${isOpen
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                            }`}
                        >
                          <div className="overflow-hidden">
                            <div className="px-7 pb-7">
                              <p className="whitespace-pre-line text-[17px] leading-[1.8] text-[#6f756f] md:text-[18px]">
                                {item.a}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}