OHKEY
=======


Sivuston idea:
Tarjota ohjelmistokehittäjille hyväksi koettuja koodinpätkiä, tietolähteitä kehitystyökaluja, ja niihin ohjeita sekä OHKEY-jäsenten arvosteluita antamaan suuntaa koodarille, mihin työkaluihin hänen kannattaisi panostaa. 
Sivuston ominaisuuksista lisää OHKEY-PB:n välilehdessä “Ajateltuja featureita”

Tekninen toteutus:

Sivuston navigointi:
Navigointi tapahtuu aina käyttäjän painaessa navigointi-linkkejä piilottamalla elementit, joiden luokaksi on merkitty “content-container” ja tuomalla esille linkin rel-attribuutin mukaan nimetty html-tiedosto (jQueryn .load()-metodilla) sekä div, jonka id on sama kuin linkin rel-attribuutti. Esiintuodulla divillä on classina myös “content-container”, joten näin navigoidessa ei ladata koko sivua uudestaan, vaan vain osia siitä (katso js/custom.navbar.js). Sivuston etusivulle tultaessa ladataan elementit carousel,nav-bar,right-side ja recent (katso custom.index.js).

Sivuston navigointiratkaisu on mahdollista muuttaa, varsinkin jos sivustoon integroidaan tietokanta.


Nimeämiskäytännöt:
Käytössä on finglish (:D) tyyppinen nimeämiskäytäntö, jonka tarkoituksena on nimetä mahdollisimman kuvaava nimi elementeille, tiedostoille, metodeille, funktioille ja muuttujille englantia ja suomea käyttäen. Tätä tullaan refaktoroimaan projektin edetessä.

Parhaillaan nimeämiskäytäntöinä on:
Omat javascript tiedostot ovat muotoa custom.(mihin liittyy).js.
HTML-sivut ovat suomeksi yhteensopivana linkkien rel-muuttujan kanssa.


Käytetyt teknologiat ja frameworkit

Bootstrap v3.1.1:
“Saappaanraksia” käytetään sivun responsiivisuuteen grid-layoutia käyttämällä ja tyylittelyyn ilmaisten teemojen kanssa. Parhaillaan käytössä on teema Superhero (25.3.2014).

Font-Awesome 4.0.3:
Font-Awesomesta käytetään ikoneita sivuston tarpeisiin (mm. Koodieditorien käyttäjärjestelmien yhteensopivuus kuvataan linux, mac, windows ikonein Font Awesomesta).

JQuery v.1.10.2

Less v1.7.0:
Sivustoa kehitettäessä käytetään Less:iä, jotta nähdään tyylimuutokset helposti ilman erillisiä sivun päivittämisiä (F5 refresh etc.). Sivuston mennessä tuotantoon tod.näk generoidaan .less-tiedostoista .css.
