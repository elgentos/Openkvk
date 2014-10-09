# elgentos OpenKVK extensie

Deze extensie realiseert een koppeling met OpenKvK.nl om zo voor B2B Magento shops na het invoeren van een KvK nummer de naam, het adres en de postcode/woonplaats op te halen via de JSON OpenKvK API.

Deze extensie realiseert een koppeling met OpenKvK.nl om zo voor B2B Magento shops na het invoeren van een KvK nummer de naam, het adres en de postcode/woonplaats op te halen via de JSON OpenKvK API.

Deze werkt standaard na het installeren voor de OnePage Checkout; er wordt daar bij Billing een veld voor het KvK nummer toegevoegd (zie screenshot). Voor de OneStepCheckout module zullen nog wat extra verricht moeten worden, voornamelijk in de template files. Dit kunnen wij ook voor u doen, voor meer informatie neem contact met ons op op 050 700 15 15.

![screenshot 2014-10-09 10 46 25](https://cloud.githubusercontent.com/assets/431360/4573262/92586292-4f90-11e4-82c0-c75a009e32f8.png)
![screenshot 2014-10-09 10 46 29](https://cloud.githubusercontent.com/assets/431360/4573261/925719d2-4f90-11e4-8d75-4575a49d4859.png)
![screenshot 2014-10-09 10 46 36](https://cloud.githubusercontent.com/assets/431360/4573260/92557d52-4f90-11e4-8e48-c1b6608f531c.png)

## Changelog

### Versie 1.1.0

1. Toegevoegd; 
 - KvK nummer gokken op basis van bedrijfsnaam (retourneert eerste hit)
2. Configuratie opties in de backend toegevoegd voor;
 - In/uitschakelen module
 - Laat adresvelden zien op de registratie pagina ja/nee
 - Zoek bedrijfsinformatie op na invoeren van het KvK nummer ja/nee
 - Gok het KvK nummer op basis van de bedrijfsnaam ja/nee
3. KvK veld toegevoegd aan de volgende formulieren;
 - Registratiepagina (mits adresvelden op registratiepagina staat ingeschakeld)
 - Account informatie onder Mijn Dashboard
 - Adres wijzigen onder Mijn Dashboard
 - Adres wijzigen in de checkout
