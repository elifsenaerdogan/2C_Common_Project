import styles from './showMoreBtn.module.scss';
import { IconsArrowLarge } from '@others/icons';
import { SetStateAction, Dispatch } from 'react';

interface PropTypes {
  isShowMore: boolean;
  setIsShowMore: Dispatch<SetStateAction<boolean>>;
}

const ShowMoreBtn = ({ isShowMore, setIsShowMore }: PropTypes) => {
  return (
    <button
      onClick={() =>
        setIsShowMore((prevIsShowMore: boolean) => !prevIsShowMore)
      }
      className={`${styles.trkcllAppShowMoreBtn} ${
        isShowMore ? styles.collapsable : ''
      }`}
    >
      {isShowMore ? (
        <div>
          Daha Az
          <br />
          Göster
        </div>
      ) : (
        <div>
          Tümünü
          <br />
          Gör
        </div>
      )}
      <IconsArrowLarge
        width="24"
        height="24"
        className={`${styles.trkcllAppDownIcon} ${
          isShowMore ? styles.collapsable : ''
        }`}
      />
    </button>
  );
};

export default ShowMoreBtn;
