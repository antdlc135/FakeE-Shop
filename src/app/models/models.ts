export interface Beer {
  id: number;
  size: BeerSizeType;
  name: BeerNameType;
  price: number;
  url?: string;
}

export type BeerInfoArray = [
  ['id', number],
  ['size', BeerSizeType],
  ['name', BeerName],
  ['price', number],
  ['url', string]
];

export type urlType = ['url', string];
export type idType = ['id', number];

export enum BeerName {
  "Beck's",
  Moretti,
  Menabrea,
  Leffe,
  Heineken,
  Ichnusa,
  Peroni,
  Messina,
  "Tennent's",
  Lupulus,
}

export enum BeerSize {
  small,
  medium,
}

export type BeerNameType = keyof typeof BeerName;
export type BeerSizeType = keyof typeof BeerSize;
