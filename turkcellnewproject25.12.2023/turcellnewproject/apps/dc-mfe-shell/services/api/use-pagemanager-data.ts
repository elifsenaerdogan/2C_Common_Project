import { contentService } from '../base/services';

export const PagemanagerService = async (pageManagerName: string) => {
  const res = await contentService.get(`v1/pagemanager/${pageManagerName}`);
  return res.data.labelDTOList;
};
