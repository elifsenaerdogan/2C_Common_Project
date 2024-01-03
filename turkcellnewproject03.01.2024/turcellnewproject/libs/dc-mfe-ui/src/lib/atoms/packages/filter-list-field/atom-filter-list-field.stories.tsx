import type { Meta } from '@storybook/react';
import { AtomFilterListField } from './atom-filter-list-field';

const Story: Meta<typeof AtomFilterListField> = {
  component: AtomFilterListField,
  title: 'Atoms/FilterListField',
};
export default Story;

export const Primary = () => {
  return (
    <AtomFilterListField
      mobileText="Filtrele"
      onClick={() => console.log('first')}
      selectedFilterText="Seçili Filtreler;"
      filterText={[{ text: 'Faturasız Hat' }, { text: 'Faturalı Hat' }]}
      cleanFilterText="Filtreleri Temizle"
    />
  );
};
