import React from 'react';
import {Coin, Bill, PieChart, ChevronUp, Ticket, HelpCircle} from '@vizir-banking/design-system';

import {colorsByCategory} from '../../constants/categories';

interface DetailsItemIconProps {
  categoryName: string;
};

export const DetailsItemIcon: React.ComponentType<DetailsItemIconProps> = ({
  categoryName,
}) => {

  const icons: {[key: string]: JSX.Element} = {
    Salario: <Coin color={colorsByCategory[categoryName]} width="28" />,
    Investimentos: <PieChart color={colorsByCategory[categoryName]} width="28" />,
    Poupança: <ChevronUp color={colorsByCategory[categoryName]} width="28" />,
    Lazer: <Ticket color={colorsByCategory[categoryName]} width="28" />,
    Impostos: <Bill color={colorsByCategory[categoryName]} width="28" />,
    outros: <HelpCircle color="#411B71" width="28" />,
  }

  return icons[categoryName] || icons.outros;
};
