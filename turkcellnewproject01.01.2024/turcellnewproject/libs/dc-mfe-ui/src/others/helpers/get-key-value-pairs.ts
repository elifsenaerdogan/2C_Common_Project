export const stringToKeyValuePairs = (
  data: string,
  indexSeparator: string,
  keyValueSeparator: string
) => {
  const keyValuePairs = data
    ?.split(indexSeparator)
    ?.map((singleIndex) => singleIndex?.split(keyValueSeparator));
  return keyValuePairs;
};
