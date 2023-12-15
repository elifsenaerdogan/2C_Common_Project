import { contentService } from '../base/services';

export const MenuService = async (methodName: string) => {
  const res = await contentService.get(
    `/v1/sharepoint?methodName=${methodName}`
  );
  return res.data.data;
};
