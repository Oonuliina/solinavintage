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
// Takit
import brownCoat from "./assets/coats/brown_coat.jpg";
import lightBrownCoat from "./assets/coats/light-brown_coat.jpg";

//laukut
import brownLeatherBag from "./assets/bags/vintage_purse_brown.jpg";
import fakeLeatherBag from "./assets/bags/brown_leather_bag.JPG";
import whiteBag from "./assets/bags/white_purse.jpg";
import grayBag from "./assets/bags/gray_vintage_purse.jpg";

//kengät
import whiteHeels from "./assets/shoes/white_heels.jpg";
import brownBlackHeels from "./assets/shoes/black-brown_heels.jpg";

//Korut
import pearlEarrings from "./assets/accessories/earring_pearls.jpg";
import zirkoniaEarring from "./assets/accessories/earrings_big-stone.jpg";

export const dresses = [
  {
    id: 1,
    title: "Pitkä hihaton lila iltapuku",
    desc: "Kaunis lilansävyinen hihaton iltapuku, jossa on pitsikoristeinen helma ja leveä vyötärökaistale. Pääntie on V-mallinen ja sitä koristaa satiiniset kukkia muistuttavat koristeet.",
    img: longPurpleDress,
    category: "Mekot",
    size: "S",
    price: "€99,00",
    color: "Lila",
    inStock: true,
  },
  {
    id: 2,
    title: "Vaaleansininen puuvillainen mekko",
    desc: "Hempeän vaalenasininen A-linjainen puuvillamekko 1930-luvulta. Mekossa on valkoisia pitsisiä koristeita ja lyhyet puhvimaiset hihat. Kuvan vyö ei ole myynnissä.",
    img: blueDress,
    category: "Mekot",
    size: "M",
    price: "€69,00",
    color: "Sininen",
    inStock: true,
  },
  {
    id: 3,
    title: "Musta satiininen kellohelmainen mekko",
    desc: "Kellohelmainen hihaton musta mekko, jossa on röyhelöinen V-mallinen pääntie. Mekon alkuperä sijoittuu 1960-luvulle.",
    img: blackDress,
    category: "Mekot",
    size: "S",
    price: "€49,00",
    color: "Musta",
    inStock: true,
  },
  {
    id: 4,
    title: "Pitsihelmainen valkoinen puuvillamekko",
    desc: "Suloinen kellohelmainen valkoinen mekko, jossa on pitsikoristeita pyöreän kaula-aukon alla ja helmassa. Mekossa on lyhyet hihat ja rusetti.",
    img: whiteDress,
    category: "Mekot",
    size: "M",
    price: "€49,00",
    color: "Valkoinen",
    inStock: true,
  },
  {
    id: 5,
    title: "Satiininen lyhythihainen punainen mekko",
    desc: "Juhlava kirkkaanpunainen satiininen mekko pitkällä helmalla ja puhvimaisilla hihoilla. Mekkoa koristaa V-mallinen pääntie ja silkkinen nauha vyötäröllä.",
    img: redDress,
    category: "Mekot",
    size: "S",
    price: "€59,00",
    color: "Punainen",
    inStock: true,
  },
  {
    id: 6,
    title: "Pitkä hihaton Keltainen maksimekko",
    desc: "Aidosta silkistä valmistettu pitkä hihaton keltainen mekko. Mekossa on vene-mallinen pääntie ja leveä kaistale vyötäröllä tuomassa muotoa.",
    img: yellowDress,
    category: "Mekot",
    size: "M",
    price: "€39,00",
    color: "Keltainen",
    inStock: true,
  },
  {
    id: 7,
    title: "Silkkinen Vihreä mekko vyöllä",
    desc: "Aidosta silkistä tehty lyhythihainen mekko solmittavalla vyöllä. Mekossa on röyhelöinen koriste O-mallisella pääntiellä.",
    img: greenDress,
    category: "Mekot",
    size: "S",
    price: "€39,00",
    color: "Vihreä",
    inStock: true,
  },
  {
    id: 8,
    title: "Oranssi kellohelmainen Sweetheart-mekko",
    desc: "Satiininen kellohelmainen minimekko lyhyillä hihoilla ja Sweetheart mallisella kaula-aukolla. Mekon alkuperä on 1950-luvulta.",
    img: orangeDress,
    category: "Mekot",
    size: "M",
    price: "€39,00",
    color: "Oranssi",
    inStock: true,
  },
  {
    id: 9,
    title: "Lila minimekko rusetilla",
    desc: "Satiininen kellohelmainen minimekko lyhyillä hihoilla ja pyöreällä kaula-aukolla. Mekon alkuperä on 1960-luvulta.",
    img: shortPurpleDress,
    category: "Mekot",
    size: "M",
    color: "Lila",
    price: "€39,00",
    inStock: true,
  },
];
// Takit
export const takit = [
  {
    id: 1,
    title: "Ruskea pitkä elegantti villakangastakki",
    desc: "Ajaton ja tyyliäs ruskea villakangastakki solmittavalla vyöllä. Malli on pitkä ja materiaali on villa/villasekoite. Kunto erittäin hyvä. Pesulapun ohjeen mukaan pestävä pesulassa.",
    img: brownCoat,
    category: "Takit",
    size: "M",
    color: "Ruskea",
    price: "€79,00",
    inStock: true,
  },
  {
    id: 2,
    title: "Vaalea pitkä villakangastakki",
    desc: "Tyyliäs vaaleanruskea villakangastakki solmittavalla vyöllä. Malli on pitkä ja materiaali on villa/villasekoite. Kunto erittäin hyvä. Pesulapun ohjeen mukaan pestävä pesulassa.",
    img: lightBrownCoat,
    category: "Takit",
    size: "S",
    color: "Beige",
    price: "€69,00",
    inStock: true,
  },
];
//Laukut
export const laukut = [
  {
    id: 1,
    title: "Italialainen valkoinen laukku",
    desc: "Kaunis yksinkertainen laukku 1950-1960-luvulta. Laukun sisältä löytyy kettinkinen kantohihna. Koko noin 24x20x5,5cm.",
    img: whiteBag,
    category: "Laukut",
    color: "Valkoinen",
    price: "€29,00",
    inStock: true,
  },
  {
    id: 2,
    title: "Keinonahkainen ruskea käsilaukku",
    desc: "Yksinkertaisen elegantti laukku 1980-luvulta. Laukun materiaali on keinonahkaa ja koko ilman kantokahvaa noin 37x30x12cm. ",
    img: fakeLeatherBag,
    category: "Laukut",
    color: "Ruskea",
    price: "€39,00",
    inStock: true,
  },
  {
    id: 3,
    title: "Nahkainen harmaa käsilaukku",
    desc: "Upea harmaansävyinen käsilaukku 1960-luvulta. Laukun koristeet ovat pronssinsävyistä metallia, johon on tullut ajan patinaa. Koko ilman kantokahvaa on noin 25x20x9cm.",
    img: grayBag,
    category: "Laukut",
    color: "Harmaa",
    price: "€49,00",
    inStock: true,
  },
  {
    id: 4,
    title: "Nahkainen ruskea käsilaukku soljella",
    desc: "Aidosta nahasta tehty käsilaukku 1950-luvulta. Sisällä kolme taskua ja pitkä nahkainen kantohihna. Koko ilman kantokahvoja noin 36x25x11cm.",
    img: brownLeatherBag,
    category: "Laukut",
    color: "Ruskea",
    price: "€45,00",
    inStock: true,
  },
];
// kengät
export const kengät = [
  {
    id: 1,
    title: "Valkoiset korkokengät",
    desc: "Pitsikoristeiset valkoiset korkokengät piikkikoroilla 1990-luvulta. Kengissä on 8cm korkea korko ja materiaali keinonahkaa.",
    img: whiteHeels,
    category: "Kengät",
    size: "39",
    color: "Valkoinen",
    price: "€29,00",
    inStock: true,
  },
  {
    id: 2,
    title: "Musta-ruskeat avokkaat",
    desc: "Tyylikkäät kaksiväriset piikkikorkoiset avokkaat 1950-1960-luvulta. Kengissä on remmi ja korko on noin 7cm korkea. Materiaali on aitoa nahkaa.",
    img: brownBlackHeels,
    category: "Kengät",
    size: "38",
    color: "Monivärinen",
    price: "€39,00",
    inStock: true,
  },
];
// Korut
export const Korut = [
  {
    id: 1,
    title: "Kullansävyiset roikkuvat läpi korvan korvakorut zirkonia kivillä",
    desc: "Nämä näyttävät korvakorut ovat varma katseenvangitsija! Alkuperä on 1980-luvulta. Materiaali on värjättyä korumetallia ja zirkonia jalokiviä.",
    img: zirkoniaEarring,
    category: "Korut",
    color: "Kultainen",
    price: "€13,00",
    inStock: true,
  },
  {
    id: 2,
    title: "Koristeelliset roikkuvat läpi korvan helmikorvakorut",
    desc: "Kauniit aidoilla helmillä koristellut korvakorut 1960-1970-luvulta. Materiaali on kullanväriseksi värjättyä korumetallia, zirkonia jalokiviä, muovia ja aitoja makean veden helmiä.",
    img: pearlEarrings,
    category: "Korut",
    color: "Kultainen",
    price: "€9,00",
    inStock: true,
  },
];
