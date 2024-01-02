export interface TransactionObject {
  text?: string;
}
export interface contracts {
  contractTypes: string;
}
export interface TransactionDetail {
  transactionSummary: string;
  packageName: string;
  packageNameDetail: string;
  packageIncluded: string;
  packageContentDetail: string;
  packageAmount: string;
  packageAmountDetail: string;
  packageCampaign: string;
  packageCampaignDetail: string;
  buttonText: string;
}
export interface ContractText {
  distanceSelling: string;
  preliminaryInformation: string;
  inform: string;
}
export interface TransactionSummaryProps {
  contractContent: TransactionObject[];
  contracts: contracts[];
  onClick: () => void;
  handleContractTypes: (index: number) => void;
  className?: string;
  transactionObj: TransactionDetail;
  contractText: ContractText;
}
