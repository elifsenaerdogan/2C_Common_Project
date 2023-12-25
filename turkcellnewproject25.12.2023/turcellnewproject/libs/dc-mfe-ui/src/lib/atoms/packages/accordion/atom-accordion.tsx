import styles from './atom-accordion.module.scss';
import { Collapse } from 'antd';
import { AccordionProps } from './types/accordion-interfaces';
import classnames from 'classnames';
import { IconsPlus, IconsMinus } from '@others/icons';

export function Accordion(props: AccordionProps) {
  const accordionWrapper = classnames([styles['a-trkclAppAccordion']]);
  return (
    <div className={accordionWrapper}>
      <Collapse
        expandIcon={({ isActive }) =>
          isActive ? <IconsMinus /> : <IconsPlus />
        }
        expandIconPosition="end"
        {...props}
      />
    </div>
  );
}

export default Accordion;
