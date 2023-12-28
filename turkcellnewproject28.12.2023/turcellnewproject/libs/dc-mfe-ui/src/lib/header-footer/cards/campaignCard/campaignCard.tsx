import styles from './campaign.module.scss';
import Card from '../template/card';
import { CardProps } from '@others/interfaces';

interface CampaignCardProps extends CardProps {
  campaignData: {
    title: string;
    desc: string;
    image: string;
  };
  header?: React.ReactNode;
  body?: React.ReactNode;
}

const CampaignCard = (props: CampaignCardProps) => {
  const { campaignData, header, body, wrapperClassName } = props;
  return (
    <div
      className={`${styles.trkclAppCampaignCardWrapper} ${wrapperClassName}`}
    >
      <Card bodyStyle={{ padding: 0 }} {...props}>
        {header ? (
          header
        ) : (
          <div
            className={styles.trkclAppCampaignCardHeader}
            style={{ backgroundImage: `url(${campaignData?.image})` }}
          ></div>
        )}
        {body ? (
          body
        ) : (
          <div className={styles.trkclAppCampaignCardBody}>
            <h3
              className={`text-body-bold ${styles.trkclAppCampaignCardTitle}`}
            >
              {campaignData?.title}
            </h3>
            <p className="text-body-small">{campaignData?.desc}</p>
          </div>
        )}
      </Card>
    </div>
  );
};

export default CampaignCard;
