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
  cardType: 'big' | 'flat' | 'list' | 'listM';
  select: string;
  staticObject: StaticCardObject;
  onClick: () => void;
}
