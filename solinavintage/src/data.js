// Mekot
import longPurpleDress from "./assets/dresses/long_purple_dress.JPG";
import blueDress from "./assets/dresses/light-blue_dress.JPG";
import blackDress from "./assets/dresses/black_dress.JPG";
import whiteDress from "./assets/dresses/white_dress.JPG";
import redDress from "./assets/dresses/red_silky_dress.JPG";
import yellowDress from "./assets/dresses/yellow_dress.JPG";
import greenDress from "./assets/dresses/green_dress.JPG";
import orangeDress from "./assets/dresses/orange_dress.JPG";
import shortPurpleDress from "./assets/dresses/short_purple_dress.JPG";
import blackVelvetDress from "./assets/dresses/black_velvet_dress.JPG";
import redPolkadotDress from "./assets/dresses/polkadot_dress.JPG";
import grayFloralDress from "./assets/dresses/gray_floral_dress.JPG";
import yellowFloralDress from "./assets/dresses/yellow_floral_dress.JPG";
// Takit
import longBrownCoat from "./assets/coats/long_brown_coat.jpg";
import lightBrownCoat from "./assets/coats/light-brown_coat.jpg";
import shortGreenCoat from "./assets/coats/short_green_coat.JPG";
import longGreenCoat from "./assets/coats/long_green_coat.JPG";
import furCoat from "./assets/coats/fur_coat.JPG";
import roseCoat from "./assets/coats/rose_coat.JPG";
import longBlackCoat from "./assets/coats/long_black_coat.JPG";
import leatherJacket from "./assets/coats/short_leather_jacket.JPG";
import trenchCoat from "./assets/coats/trench_coat.JPG";
import blackCoatWithBelt from "./assets/coats/black_coat_with_belt.JPG";
import brownFurCollarCoat from "./assets/coats/brown_fur_collar_coat.JPG";

//laukut
import brownLeatherBag from "./assets/bags/vintage_purse_brown.jpg";
import fakeLeatherBag from "./assets/bags/brown_leather_bag.JPG";
import whiteBag from "./assets/bags/white_purse.jpg";
import grayBag from "./assets/bags/gray_vintage_purse.jpg";
import blackSmallBag from "./assets/bags/black_handbag.JPG";

//kengät
import whiteLacePumps from "./assets/shoes/white_lace_pumps.JPG";
import brownBlackHeels from "./assets/shoes/black-brown_mary-jane_pumps.jpg";
import blackSmallHeel from "./assets/shoes/black_shoes_small_heel.JPG";
import blackMaryJane from "./assets/shoes/black_mary-jane.JPG";
import blackPumps from "./assets/shoes/black_pumps.JPG";
import redPolkadotMaryJane from "./assets/shoes/polkadot_heels.JPG";
import redPeepToe from "./assets/shoes/red_peeptoe_heels.JPG";
import bluePumps from "./assets/shoes/blue_pumps.JPG";

//Korut
import pearlEarrings from "./assets/accessories/earring_pearls.jpg";
import zirkoniaEarring from "./assets/accessories/earrings_big-stone.jpg";
import goldGrayBracelet from "./assets/accessories/gold&gray_bracelet.JPG";
import goldBraceletGrayStones from "./assets/accessories/gold_bracelet_gray_stones.JPG";
import goldBraceletThreeStones from "./assets/accessories/gold_bracelet_three_stones.JPG";
import goldHoopEarrings from "./assets/accessories/gold_hoop_earrings.JPG";
import pearlNecklace from "./assets/accessories/pearl_necklace.JPG";
import silverBrooch from "./assets/accessories/silver_brooch.JPG";
import smallPearlEarrings from "./assets/accessories/small_pearl_earrings.JPG";


export const mekot = [
  {
    id: 1,
    title: "Lila Pitkä hihaton iltapuku",
    desc: "Kaunis lilansävyinen hihaton iltapuku, jossa on pitsikoristeinen helma ja leveä vyötärökaistale. Pääntie on V-mallinen ja sitä koristaa satiiniset kukkia muistuttavat koristeet.",
    img: longPurpleDress,
    category: "mekot",
    size: "S",
    price: "€99,00",
    color: "lila",
    inStock: true,
  },
  {
    id: 2,
    title: "Vaaleansininen puuvillainen mekko",
    desc: "Hempeän vaalenasininen A-linjainen puuvillamekko 1930-luvulta. Mekossa on valkoisia pitsisiä koristeita ja lyhyet puhvimaiset hihat. Kuvan vyö ei ole myynnissä.",
    img: blueDress,
    category: "mekot",
    size: "XS",
    price: "€69,00",
    color: "sininen",
    inStock: true,
  },
  {
    id: 3,
    title: "Musta satiininen kellohelmainen mekko",
    desc: "Kellohelmainen hihaton musta mekko, jossa on röyhelöinen V-mallinen pääntie. Mekon alkuperä sijoittuu 1960-luvulle.",
    img: blackDress,
    category: "mekot",
    size: "M",
    price: "€49,00",
    color: "musta",
    inStock: true,
  },
  {
    id: 4,
    title: "Valkoinen pitsihelmainen puuvillamekko",
    desc: "Suloinen kellohelmainen valkoinen mekko, jossa on pitsikoristeita pyöreän kaula-aukon alla ja helmassa. Mekossa on lyhyet hihat ja rusetti.",
    img: whiteDress,
    category: "mekot",
    size: "S",
    price: "€49,00",
    color: "valkoinen",
    inStock: true,
  },
  {
    id: 5,
    title: "Punainen satiininen lyhythihainen mekko",
    desc: "Juhlava kirkkaanpunainen satiininen mekko pitkällä helmalla ja puhvimaisilla hihoilla. Mekkoa koristaa V-mallinen pääntie ja silkkinen nauha vyötäröllä.",
    img: redDress,
    category: "mekot",
    size: "S",
    price: "€59,00",
    color: "punainen",
    inStock: true,
  },
  {
    id: 6,
    title: "Keltainen pitkä hihaton maksimekko",
    desc: "Aidosta silkistä valmistettu pitkä hihaton keltainen mekko. Mekossa on vene-mallinen pääntie ja leveä kaistale vyötäröllä tuomassa muotoa.",
    img: yellowDress,
    category: "mekot",
    size: "XL",
    price: "€39,00",
    color: "keltainen",
    inStock: true,
  },
  {
    id: 7,
    title: "Vihreä silkkinen mekko vyöllä",
    desc: "Aidosta silkistä tehty lyhythihainen mekko solmittavalla vyöllä. Mekossa on röyhelöinen koriste O-mallisella pääntiellä.",
    img: greenDress,
    category: "mekot",
    size: "L",
    price: "€39,00",
    color: "vihreä",
    inStock: true,
  },
  {
    id: 8,
    title: "Oranssi kellohelmainen Sweetheart-mekko",
    desc: "Satiininen kellohelmainen minimekko lyhyillä hihoilla ja Sweetheart mallisella kaula-aukolla. Mekon alkuperä on 1950-luvulta.",
    img: orangeDress,
    category: "mekot",
    size: "XS",
    price: "€39,00",
    color: "oranssi",
    inStock: true,
  },
  {
    id: 9,
    title: "Lila minimekko rusetilla",
    desc: "Satiininen kellohelmainen minimekko lyhyillä hihoilla ja pyöreällä kaula-aukolla. Mekon alkuperä on 1960-luvulta.",
    img: shortPurpleDress,
    category: "mekot",
    size: "M",
    color: "lila",
    price: "€39,00",
    inStock: true,
  },
  {
    id: 10,
    title: "Musta samettinen mekko",
    desc: "Tämä musta samettinen mekko on elegantti ja ylellinen valinta, joka yhdistää tyylin ja mukavuuden täydellisesti. Mekko on valmistettu pehmeästä ja ylellisestä samettimateriaalista, joka tuntuu miellyttävältä ihoa vasten.",
    img: blackVelvetDress,
    category: "mekot",
    size: "L",
    color: "musta",
    price: "€59,00",
    inStock: true,
  },
  {
    id: 11,
    title: "Harmaa kukkakuviollinen mekko",
    desc: "Tämä harmaa kukkakuvioinen mekko on herkkä ja tyylikäs valinta, joka yhdistää kauniin muotoilun ja keveän ilmeen. Mekko on koristeltu hienostuneilla kukkakuviolla, tuoden siihen raikkaan ja naisellisen ulkonäön.",
    img: grayFloralDress,
    category: "mekot",
    size: "S",
    color: "harmaa",
    price: "€49,00",
    inStock: true,
  },
  {
    id: 12,
    title: "Punainen polka dot -mekko",
    desc: "Tämä punainen polka dot -mekko on leikkisä ja elegantti valinta, joka tuo mukanaan retrohenkistä viehätystä. Mekon pirteä punainen väri yhdistettynä klassisiin pilkkukuviin tekee siitä iloisen ja tyylikkään vaatekappaleen.",
    img: redPolkadotDress,
    category: "mekot",
    size: "XL",
    color: "punainen",
    price: "€55,00",
    inStock: true,
  },
  {
    id: 13,
    title: "Keltainen kukkakuviollinen mekko",
    desc: "Tämä keltainen kukkakuviollinen mekko on aurinkoinen ja viehättävä valinta, joka yhdistää pirteän värin ja romanttisen kuviomaailman. Mekko on koristeltu herkillä kukkakuvioilla, tuoden siihen raikkautta ja naisellista ilmettä.",
    img: yellowFloralDress,
    category: "mekot",
    size: "XS",
    color: "keltainen",
    price: "€35,00",
    inStock: true,
  },
];

// Takit
export const takit = [
  {
    id: 1,
    title: "Musta pitkä takki vyöllä",
    desc: "Tämä upea musta takki, varustettuna tyylikkäällä vyöllä, on aito vintage-löytö. Takki yhdistää klassisen tyylin ja ajattoman eleganssin, tarjoten käyttäjälleen sekä tyylikkyyttä että mukavuutta.",
    img: blackCoatWithBelt,
    category: "takit",
    size: "M",
    color: "musta",
    price: "€79,00",
    inStock: true,
  },
  {
    id: 2,
    title: "Ruskea karvakauluksinen talvitakki ",
    desc: "Tämä ruskea talvitakki yhdistää tyylikkyyden ja lämpimän mukavuuden ainutlaatuisella tavalla. Kauluksessa ja hihansuissa käytetty tekoturkis luo ylellisen ja lämpimän ilmeen, joka tekee takista täydellisen valinnan viileisiin talvipäiviin.",
    img: brownFurCollarCoat,
    category: "takit",
    size: "S",
    color: "ruskea",
    price: "€89,00",
    inStock: true,
  },
  {
    id: 3,
    title: "Beigen värinen tekoturkistakki",
    desc: "Tämä upea beige tekoturkistakki on katseenvangitsija, joka yhdistää tyylikkyyden ja ylellisyyden ainutlaatuisella tavalla. Takin vaikuttava ulkonäkö tekee siitä täydellisen valinnan niille, jotka haluavat erottua ja ilmaista persoonallisuuttaan tyylikkäästi.",
    img: furCoat,
    category: "takit",
    size: "XXL",
    color: "beige",
    price: "€129,00",
    inStock: true,
  },
  {
    id: 4,
    title: "Vaalea pitkä villakangastakki",
    desc: "Tyyliäs vaaleanruskea villakangastakki solmittavalla vyöllä. Malli on pitkä ja materiaali on villa/villasekoite. Kunto erittäin hyvä. Pesulapun ohjeen mukaan pestävä pesulassa.",
    img: lightBrownCoat,
    category: "takit",
    size: "XS",
    color: "beige",
    price: "€79,00",
    inStock: true,
  },
  {
    id: 5,
    title: "Musta extra pitkä villakangastakki",
    desc: "Tämä musta extra pitkä villakangastakki on yhdistelmä tyylikkyyttä ja käytännöllisyyttä. Takki ulottuu pidemmälle, luoden elegantin ja modernin ilmeen, samalla tarjoten tehokasta suojaa viimalta ja kylmyydeltä.",
    img: longBlackCoat,
    category: "takit",
    size: "S",
    color: "musta",
    price: "€99,00",
    inStock: true,
  },
  {
    id: 6,
    title: "Ruskea pitkä elegantti villakangastakki",
    desc: "Ajaton ja tyyliäs ruskea villakangastakki solmittavalla vyöllä. Malli on pitkä ja materiaali on villa/villasekoite. Kunto erittäin hyvä. Pesulapun ohjeen mukaan pestävä pesulassa.",
    img: longBrownCoat,
    category: "takit",
    size: "XS",
    color: "ruskea",
    price: "€99,00",
    inStock: true,
  },
  {
    id: 7,
    title: "Vihreä pitkä karvakauluksinen talvitakki",
    desc: "Tämä vihreä pitkä talvitakki karvakauluksella yhdistää tyylin, lämmön ja trendikkyyden täydellisesti. Takki on suunniteltu pituudeltaan antamaan elegantin ilmeen ja samalla tarjoamaan tehokasta suojaa viimaa vastaan.",
    img: longGreenCoat,
    category: "takit",
    size: "M",
    color: "vihreä",
    price: "€109,00",
    inStock: true,
  },
  {
    id: 8,
    title: "Hempeän roosan värinen pitkä villakangastakki",
    desc: "Tämä hempeän roosan värinen pitkä villakangastakki yhdistää tyylikkään ulkonäön ja lämpimän mukavuuden täydellisesti. Takki on suunniteltu antamaan eleganssia ja naisellista ilmettä, samalla tarjoten tehokasta suojaa viimalta ja kylmältä.",
    img: roseCoat,
    category: "takit",
    size: "L",
    color: "roosa",
    price: "€89,00",
    inStock: true,
  },
  {
    id: 9,
    title: "Vihreä keskipitkä karvakauluksinen talvitakki",
    desc: "Tämä vihreä keskipitkä talvitakki, jossa on karvakaulus, yhdistää käytännöllisyyden ja tyylikkyyden taitavasti. Takin pituus tarjoaa lämpöä ja suojaa kylmää vastaan samalla säilyttäen tyylikkään ilmeen.",
    img: shortGreenCoat,
    category: "takit",
    size: "L",
    color: "vihreä",
    price: "€75,00",
    inStock: true,
  },
  {
    id: 10,
    title: "Ruskea lyhyt nahkatakki",
    desc: "Tämä ruskea lyhyt nahkatakki on täydellinen yhdistelmä tyylikkyyttä ja rohkeutta. Takki on suunniteltu antamaan modernin ja rennon ilmeen, samalla kun se huokuu ajatonta tyylikkyyttä.",
    img: leatherJacket,
    category: "takit",
    size: "S",
    color: "ruskea",
    price: "€49,00",
    inStock: true,
  },
  {
    id: 11,
    title: "Vaalea beigen värinen klassinen trenssi",
    desc: "Tämä vaaleanbeige klassinen trenssitakki on aito tyylikkyyden ikoni, joka yhdistää eleganssin ja ajattoman muotoilun. Takki on suunniteltu antamaan hillitysti tyylikkään ilmeen ja samalla tarjoamaan käytännöllisyyttä eri vuodenaikoina.",
    img: trenchCoat,
    category: "takit",
    size: "XS",
    color: "beige",
    price: "€69,00",
    inStock: true,
  },
];

//Laukut
export const laukut = [
  {
    id: 1,
    title: "Italialainen valkoinen laukku",
    desc: "Kaunis yksinkertainen Italialainen laukku 1950-1960-luvulta. Laukun sisältä löytyy kettinkinen kantohihna. Koko noin 24x20x5,5cm.",
    img: whiteBag,
    category: "laukut",
    color: "valkoinen",
    price: "€29,00",
    inStock: true,
  },
  {
    id: 2,
    title: "Keinonahkainen ruskea käsilaukku",
    desc: "Yksinkertaisen elegantti laukku 1980-luvulta. Laukun materiaali on keinonahkaa ja koko ilman kantokahvaa noin 37x30x12cm. ",
    img: fakeLeatherBag,
    category: "laukut",
    color: "ruskea",
    price: "€39,00",
    inStock: true,
  },
  {
    id: 3,
    title: "Nahkainen harmaa käsilaukku",
    desc: "Upea harmaansävyinen käsilaukku 1960-luvulta. Laukun koristeet ovat pronssinsävyistä metallia, johon on tullut ajan patinaa. Koko ilman kantokahvaa on noin 25x20x9cm.",
    img: grayBag,
    category: "laukut",
    color: "harmaa",
    price: "€49,00",
    inStock: true,
  },
  {
    id: 4,
    title: "Nahkainen ruskea käsilaukku soljella",
    desc: "Aidosta nahasta tehty käsilaukku 1950-luvulta. Sisällä kolme taskua ja pitkä nahkainen kantohihna. Koko ilman kantokahvoja noin 36x25x11cm.",
    img: brownLeatherBag,
    category: "laukut",
    color: "ruskea",
    price: "€45,00",
    inStock: true,
  },
  {
    id: 5,
    title: "Musta pieni käsilaukku kullanvärisella soljella",
    desc: "Tämä musta pieni käsilaukku kullanvärisellä soljella on tyylikäs ja monipuolinen asuste, joka yhdistää käytännöllisyyden ja muodin sulavasti. Laukun kompakti koko tekee siitä täydellisen kumppanin päivittäiseen menoon, ja kullanvärisen soljen yksityiskohta lisää siihen eleganttia silausta.",
    img: blackSmallBag,
    category: "laukut",
    color: "musta",
    price: "€29,00",
    inStock: true,
  },
];

// kengät
export const kengät = [
  {
    id: 1,
    title: "Valkoiset avokkaat pitsikoristeella",
    desc: "Pitsikoristeiset valkoiset korkokengät piikkikoroilla 1990-luvulta. Kengissä on 8cm korkea korko ja materiaali keinonahkaa.",
    img: whiteLacePumps,
    category: "kengät",
    size: "39",
    color: "valkoinen",
    price: "€29,00",
    inStock: true,
  },
  {
    id: 2,
    title: "Musta-ruskeat avokkaat remmillä",
    desc: "Tyylikkäät kaksiväriset piikkikorkoiset avokkaat 1950-1960-luvulta. Kengissä on remmi ja korko on noin 7cm korkea. Materiaali on aitoa nahkaa.",
    img: brownBlackHeels,
    category: "kengät",
    size: "38",
    color: "monivärinen",
    price: "€39,00",
    inStock: true,
  },
  {
    id: 3,
    title: "Mustat matalakorkoiset kävelykengät",
    desc: "Nämä mustat matalakorkoiset kävelykengät yhdistävät tyylikkyyden ja mukavuuden täydellisesti. Kengät ovat suunniteltu tarjoamaan rentoa eleganssia jokapäiväiseen käyttöön.",
    img: blackSmallHeel,
    category: "kengät",
    size: "37",
    color: "musta",
    price: "€35,00",
    inStock: true,
  },
  {
    id: 4,
    title: "Siniset korkeakorkoiset avokkaat",
    desc: "Nämä siniset korkeakorkoiset avokkaat ovat elegantti valinta, joka yhdistää tyylin ja naisellisen ilmeen. Kengät on suunniteltu korostamaan jalkasi kauneutta ja tuomaan lisää pituutta sekä itsevarmuutta.",
    img: bluePumps,
    category: "kengät",
    size: "39",
    color: "sininen",
    price: "€29,00",
    inStock: true,
  },
  {
    id: 5,
    title: "Punaiset avokärkiset avokkaat",
    desc: "Nämä punaiset avokärkiset avokkaat ovat rohkea ja silmiinpistävä valinta, joka tuo väriä ja tyylikkyyttä jalkineisiin. Kengät on suunniteltu korostamaan jalkasi kauneutta ja lisäämään asukokonaisuuteesi näyttävyyttä.",
    img: redPeepToe,
    category: "kengät",
    size: "40",
    color: "punainen",
    price: "€35,00",
    inStock: true,
  },
  {
    id: 6,
    title: "Mustat koristekuviolliset avokkaat",
    desc: "Nämä mustat koristekuviolliset avokkaat ovat tyylikäs ja yksilöllinen valinta, joka yhdistää eleganssin ja ainutlaatuisen muotoilun. Kengät on suunniteltu kiinnittämään huomiota hienostuneiden yksityiskohtien ja kuvioiden avulla.",
    img: blackPumps,
    category: "kengät",
    size: "39",
    color: "musta",
    price: "€39,00",
    inStock: true,
  },
  {
    id: 7,
    title: "Punaiset Mary Jane polka dot korkokengät",
    desc: "Nämä punaiset Mary Jane -tyyliset korkokengät, joissa on pilkkukuvio, ovat iloinen ja elegantti valinta, joka yhdistää retrohenkisen viehätyksen ja naisellisen tyylin. Kengät ovat suunniteltu tuomaan iloa ja persoonallisuutta asuusi.",
    img: redPolkadotMaryJane,
    category: "kengät",
    size: "36",
    color: "punainen",
    price: "€45,00",
    inStock: true,
  },
  {
    id: 8,
    title: "Mustat Mary Jane korkokengät",
    desc: "Nämä mustat Mary Jane -korkokengät ovat klassinen ja ajaton valinta, joka yhdistää naisellisen eleganssin ja mukavuuden. Kengät ovat suunniteltu tuomaan hienostuneisuutta ja tyylikkyyttä jokaiseen askellukseen.",
    img: blackMaryJane,
    category: "kengät",
    size: "38",
    color: "musta",
    price: "€49,00",
    inStock: true,
  },
];

// Korut
export const korut = [
  {
    id: 1,
    title: "Kullansävyiset roikkuvat läpi korvan korvakorut zirkonia kivillä",
    desc: "Nämä näyttävät korvakorut ovat varma katseenvangitsija! Alkuperä on 1980-luvulta. Materiaali on värjättyä korumetallia ja zirkonia jalokiviä.",
    img: zirkoniaEarring,
    category: "korut",
    color: "kultainen",
    price: "€13,00",
    inStock: true,
  },
  {
    id: 2,
    title: "Koristeelliset roikkuvat läpi korvan helmikorvakorut",
    desc: "Kauniit aidoilla helmillä koristellut korvakorut 1960-1970-luvulta. Materiaali on kullanväriseksi värjättyä korumetallia, zirkonia jalokiviä, muovia ja aitoja makean veden helmiä.",
    img: pearlEarrings,
    category: "korut",
    color: "kultainen",
    price: "€10,00",
    inStock: true,
  },
  {
    id: 3,
    title:
      "Kultainen rannekoru koristeellisilla punosmallisilla yksityiskohdilla",
    desc: "Tämä kultainen rannekoru on elegantti mestariteos, joka yhdistää ylellisyyden ja hienostuneen muotoilun. Korun punosmalliset yksityiskohdat tuovat siihen ainutlaatuisen ja huomiota herättävän ilmeen, mikä tekee siitä täydellisen koristeen niin arkeen kuin erityistilaisuuksiinkin.",
    img: goldGrayBracelet,
    category: "korut",
    color: "kultainen",
    price: "€125,00",
    inStock: true,
  },
  {
    id: 4,
    title:
      "Kultainen ranneketju koristekivillä ja koristeellisilla yksityiskohdilla",
    desc: "Tämä kultainen ranneketju on kiehtova yhdistelmä ylellisyyttä ja hienostunutta kauneutta. Ranneketjun koristekivet ja taidokkaasti muotoillut yksityiskohdat luovat korun, joka säteilee eleganssia ja houkuttelee katseen.",
    img: goldBraceletGrayStones,
    category: "korut",
    color: "kultainen",
    price: "€79,00",
    inStock: true,
  },
  {
    id: 5,
    title: "Kultainen koristeellinen rannekoru kolmella koristekivellä",
    desc: "Tämä kultainen koristeellinen rannekoru on ylellinen taideteos, joka yhdistää hienostuneisuuden ja korostetun kauneuden. Kolme upeaa koristekiveä kimaltelevat rannekorun päällä, tuoden siihen säihkettä ja eksklusiivista tunnelmaa.",
    img: goldBraceletThreeStones,
    category: "korut",
    color: "kultainen",
    price: "€119,00",
    inStock: true,
  },
  {
    id: 6,
    title: "Kultaiset isot korvarenkaat",
    desc: "Nämä kultaiset isot korvarenkaat ovat rohkea ja näyttävä lisäys korukokoelmaasi, tuoden samalla ripauksen glamouria ja tyylikkyyttä. Rennot ja silti vaikuttavat korvakorut korostavat persoonallisuuttasi ja viimeistelevät asusi eleganssilla.",
    img: goldHoopEarrings,
    category: "korut",
    color: "kultainen",
    price: "€69,00",
    inStock: true,
  },
  {
    id: 7,
    title: "Helmikaulanauha zirkonia-kivillä",
    desc: "Tämä helmikaulanauha zirkonia-kivillä on hienostunut ja lumoava koru, joka yhdistää perinteisen helmikorun eleganssin moderneihin yksityiskohtiin. Helmien kaunis kiilto yhdistyy zirkonia-kivien säihkeeseen, luoden näyttävän ja silmiinpistävän kokonaisuuden.",
    img: pearlNecklace,
    category: "korut",
    color: "hopea",
    price: "€39,00",
    inStock: true,
  },
  {
    id: 8,
    title: "Hopeinen rintaneula helmillä",
    desc: "Tämä hopeinen rintaneula on herkkä ja tyylikäs lisäys asuusi, tuoden mukanaan klassista kauneutta ja naisellista charmia. Rintaneulan kauniit helmet korostavat sen eleganttia muotoilua, tehdessään siitä täydellisen koristeen moniin eri tilaisuuksiin.",
    img: silverBrooch,
    category: "korut",
    color: "hopea",
    price: "€19,00",
    inStock: true,
  },
  {
    id: 9,
    title: "Pienet roikkuvat läpi korvan helmikorvakorut",
    desc: "Nämä pienet roikkuvat läpi korvan helmikorvakorut ovat hienostuneet ja ajattomat, tuoden mukanaan naisellista eleganssia ja tyylikästä yksinkertaisuutta. Korvakorujen keveä muotoilu ja helmien lumoava kiilto tekevät niistä ihanteellisen valinnan niin arkeen kuin erityistilaisuuksiinkin.",
    img: smallPearlEarrings,
    category: "korut",
    color: "kultainen",
    price: "€9,00",
    inStock: true,
  },
];
