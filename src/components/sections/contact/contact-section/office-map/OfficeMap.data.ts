import type { Office } from "./types";

export const offices: Office[] = [
  {
    id: "kathmandu",
    title: "Kathmandu Office",
    officeType: "Head Office",
    address: "Baluwatar, Kalikamarg",
    city: "Kathmandu, Nepal",

    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Baluwatar+Kalikamarg+Kathmandu",

    x: "38%",
    y: "42%",
  },

  {
    id: "birtamode",

    title: "Birtamode Office",

    officeType: "Branch Office",

    address: "Shanischare Road",

    city: "Jhapa, Nepal",

    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Shanischare+Road+Birtamode",

    x: "73%",

    y: "32%",
  },
];
