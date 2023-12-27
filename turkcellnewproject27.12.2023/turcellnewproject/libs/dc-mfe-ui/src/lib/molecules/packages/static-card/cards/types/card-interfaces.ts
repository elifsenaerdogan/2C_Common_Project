export interface StaticCardObject {
  filterText: string;
  welcomeText: string;
  monthlyTitle?: string;
  price?: string;
  priceText?: string;
  gb: string;
  gbText?: string;
  gbText1?: string;
  btnText: string;
}

export interface MoleculesStaticCardProps {
  staticObject: StaticCardObject;
  onClick: () => void;
}
