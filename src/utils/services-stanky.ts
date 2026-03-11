export interface ServiceStanokItem {
  name: string;
  description: string;
  /** Cenník – napr. "Na vyžiadanie", "od 15 €/m²" */
  priceLabel?: string;
}

export interface ServiceStanok {
  id: string;
  title: string;
  zameranie: string;
  items: ServiceStanokItem[];
  /** Obrázok pre kartu služby na homepage (pekné divy) */
  imageUrl?: string;
  imageAlt?: string;
}

export const servicesStanky: ServiceStanok[] = [
  {
    id: "b2b",
    title: "Kancelárske a firemné priestory",
    zameranie: "Pravidelnosť, diskrécia a reprezentatívny vzhľad.",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    imageAlt: "Kancelárske priestory",
    items: [
      {
        name: "Business Standard",
        description:
          "Pravidelné udržiavacie upratovanie (denne/týždenne). Prach, podlahy, kuchynka, odpadkové koše.",
        priceLabel: "Na vyžiadanie",
      },
      {
        name: "Business Premium",
        description:
          "Komplexná starostlivosť vrátane dopĺňania hygienických potrieb a hĺbkovej dezinfekcie dotykových plôch.",
        priceLabel: "Na vyžiadanie",
      },
      {
        name: "Flash Office",
        description:
          "Jednorazové upratovanie po firemnej akcii alebo pred dôležitou návštevou.",
        priceLabel: "Na vyžiadanie",
      },
    ],
  },
  {
    id: "special",
    title: "Zdravotnícke zariadenia",
    zameranie: "Sterilita, dodržiavanie hygienických noriem a legislatívy.",
    imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop",
    imageAlt: "Zdravotnícke zariadenie",
    items: [
      {
        name: "Sanity Care",
        description:
          "Špecializované upratovanie čakární a ambulancií s dôrazom na dezinfekciu podľa sanitačného poriadku.",
        priceLabel: "Na vyžiadanie",
      },
      {
        name: "Germ-Free Zone",
        description:
          "Hĺbková dekontaminácia priestorov (vhodné pre operačné sály alebo rizikovejšie prostredia).",
        priceLabel: "Na vyžiadanie",
      },
    ],
  },
  {
    id: "projektove",
    title: "Komplexné upratovanie",
    zameranie: "Detail, hĺbka a obnova materiálov.",
    imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
    imageAlt: "Komplexné upratovanie",
    items: [
      {
        name: "Deep Clean (Hĺbkové upratovanie)",
        description:
          "Generálne upratovanie po rekonštrukcii, sťahovaní alebo sezónne (jarné/vianočné). Umývanie okien, výkladov a presklených priečok.",
        priceLabel: "Na vyžiadanie",
      },
    ],
  },
  {
    id: "tepovanie",
    title: "Tepovanie",
    zameranie: "Detail, hĺbka a obnova materiálov.",
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    imageAlt: "Tepovanie kobercov a čalúnenia",
    items: [
      {
        name: "TepoPro (Profesionálne tepovanie)",
        description:
          "Hĺbkové extrakčné čistenie kobercov, sedačiek a čalúneného nábytku.",
        priceLabel: "Na vyžiadanie",
      },
    ],
  },
];
