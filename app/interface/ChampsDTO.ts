interface ChampDTO {
  blurb: string;
  id: string;
  image: ImageChampsDTO;
  info: InfoChampDTO;
  key: string;
  name: string;
  partype: string;
  stats: StatChampDTO;
  tags: Array<string>;
  title: string;
  version: string;
}
interface ImageChampsDTO {
  full: string;
  group: string;
  h: number;
  sprite: string;
  w: number;
  x: number;
  y: number;
}
interface InfoChampDTO {
  attack: number;
  defense: number;
  difficulty: number;
  magic: number;
}

interface StatChampDTO {
  armor: number;
  armorperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackrange: number;
  attackspeed: number;
  attackspeedperlevel: number;
  crit: number;
  critperlevel: number;
  hp: number;
  hpperlevel: number;
  hpregen: number;
  hpregenperlevel: number;
  movespeed: number;
  mp: number;
  mpperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
}
