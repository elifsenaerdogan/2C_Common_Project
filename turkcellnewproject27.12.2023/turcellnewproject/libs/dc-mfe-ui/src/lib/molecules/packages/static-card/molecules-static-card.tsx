import { MoleculesStaticCardProps } from './types/static-interfaces';
import BigCard from './cards/big/big-card';
import BigCard1 from './cards/big/big-card1';
import FlatCard from './cards/flat/flat-card';
import FlatCard1 from './cards/flat/flat-card1';
import ListCard from './cards/list/list-card';
import ListCard1 from './cards/list/list-card1';
import ListMCard from './cards/listM/listM-card';
import ListMCard1 from './cards/listM/listM-card1';

export function MoleculesStaticCard(props: MoleculesStaticCardProps) {
  const { cardType, onClick, select, staticObject } = props;
  let selectedCard: any;

  switch (cardType) {
    case 'big':
      selectedCard =
        select === '1' ? (
          <BigCard
            staticObject={{
              filterText: staticObject?.filterText,
              welcomeText: staticObject?.welcomeText,
              monthlyTitle: staticObject?.monthlyTitle,
              price: staticObject?.price,
              priceText: staticObject?.priceText,
              gb: staticObject?.gb,
              gbText: staticObject?.gbText,
              gbText1: staticObject?.gbText1,
              btnText: staticObject?.btnText,
            }}
            onClick={onClick}
          />
        ) : select === '2' ? (
          <BigCard1
            staticObject={{
              filterText: staticObject?.filterText,
              welcomeText: staticObject?.welcomeText,
              monthlyTitle: staticObject?.monthlyTitle,
              price: staticObject?.price,
              priceText: staticObject?.priceText,
              gb: staticObject?.gb,
              gbText: staticObject?.gbText,
              gbText1: staticObject?.gbText1,
              btnText: staticObject?.btnText,
            }}
            onClick={onClick}
          />
        ) : null;
      break;
    case 'flat':
      selectedCard =
        select === '1' ? (
          <FlatCard
            staticObject={{
              filterText: staticObject?.filterText,
              welcomeText: staticObject?.welcomeText,
              monthlyTitle: staticObject?.monthlyTitle,
              price: staticObject?.price,
              priceText: staticObject?.priceText,
              gb: staticObject?.gb,
              gbText: staticObject?.gbText,
              gbText1: staticObject?.gbText1,
              btnText: staticObject?.btnText,
            }}
            onClick={onClick}
          />
        ) : select === '2' ? (
          <FlatCard1
            staticObject={{
              filterText: staticObject?.filterText,
              welcomeText: staticObject?.welcomeText,
              monthlyTitle: staticObject?.monthlyTitle,
              price: staticObject?.price,
              priceText: staticObject?.priceText,
              gb: staticObject?.gb,
              gbText: staticObject?.gbText,
              gbText1: staticObject?.gbText1,
              btnText: staticObject?.btnText,
            }}
            onClick={onClick}
          />
        ) : null;
      break;
    case 'list':
      selectedCard =
        select === '1' ? (
          <ListCard
            staticObject={{
              filterText: staticObject?.filterText,
              welcomeText: staticObject?.welcomeText,
              monthlyTitle: staticObject?.monthlyTitle,
              price: staticObject?.price,
              priceText: staticObject?.priceText,
              gb: staticObject?.gb,
              gbText: staticObject?.gbText,
              gbText1: staticObject?.gbText1,
              btnText: staticObject?.btnText,
            }}
            onClick={onClick}
          />
        ) : select === '2' ? (
          <ListCard1
            staticObject={{
              filterText: staticObject?.filterText,
              welcomeText: staticObject?.welcomeText,
              monthlyTitle: staticObject?.monthlyTitle,
              price: staticObject?.price,
              priceText: staticObject?.priceText,
              gb: staticObject?.gb,
              gbText: staticObject?.gbText,
              gbText1: staticObject?.gbText1,
              btnText: staticObject?.btnText,
            }}
            onClick={onClick}
          />
        ) : null;
      break;
    case 'listM':
      selectedCard =
        select === '1' ? (
          <ListMCard
            staticObject={{
              filterText: staticObject?.filterText,
              welcomeText: staticObject?.welcomeText,
              monthlyTitle: staticObject?.monthlyTitle,
              price: staticObject?.price,
              priceText: staticObject?.priceText,
              gb: staticObject?.gb,
              gbText: staticObject?.gbText,
              gbText1: staticObject?.gbText1,
              btnText: staticObject?.btnText,
            }}
            onClick={onClick}
          />
        ) : select === '2' ? (
          <ListMCard1
            staticObject={{
              filterText: staticObject?.filterText,
              welcomeText: staticObject?.welcomeText,
              monthlyTitle: staticObject?.monthlyTitle,
              price: staticObject?.price,
              priceText: staticObject?.priceText,
              gb: staticObject?.gb,
              gbText: staticObject?.gbText,
              gbText1: staticObject?.gbText1,
              btnText: staticObject?.btnText,
            }}
            onClick={onClick}
          />
        ) : null;
      break;
    default:
      selectedCard = (
        <BigCard
          staticObject={{
            filterText: staticObject?.filterText,
            welcomeText: staticObject?.welcomeText,
            monthlyTitle: staticObject?.monthlyTitle,
            price: staticObject?.price,
            priceText: staticObject?.priceText,
            gb: staticObject?.gb,
            gbText: staticObject?.gbText,
            gbText1: staticObject?.gbText1,
            btnText: staticObject?.btnText,
          }}
          onClick={onClick}
        />
      );
  }
  return selectedCard;
}

export default MoleculesStaticCard;
