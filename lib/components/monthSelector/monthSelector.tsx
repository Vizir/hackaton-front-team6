import React, {useState} from 'react';
import {Transitioning, Transition} from 'react-native-reanimated';

import {ChevronLeft, ChevronRight} from '@vizir-banking/design-system';

import {CustomTouchable, SelectorContainer, MonthName} from './styles';

const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

interface MonthSelectorProps {
  displayMonth: number;
  monthHandler: (month: number) => void;
}

const MonthSelector: React.ComponentType<MonthSelectorProps> = ({
  displayMonth,
  monthHandler,
}) => {
  const handleNextMonth = () => {
    if (displayMonth === 11) {
      monthHandler(0);
      return;
    }
    monthHandler(displayMonth + 1);
  };

  const handlePreviousMonth = () => {
    if (displayMonth === 0) {
      monthHandler(11);
      return;
    }
    monthHandler(displayMonth - 1);
  };

  return (
    <SelectorContainer>
      <CustomTouchable onPress={() => handlePreviousMonth()}>
        <ChevronLeft color="#411B71" width="28" />
      </CustomTouchable>
      <MonthName>{months[displayMonth]}</MonthName>
      <CustomTouchable onPress={() => handleNextMonth()}>
        <ChevronRight color="#411B71" width="28" />
      </CustomTouchable>
    </SelectorContainer>
  );
};

export {MonthSelector};
