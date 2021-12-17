import React, {useState} from 'react';
import {
  ScrollableContainer,
  BackButton,
  Container,
  ButtonText,
} from './categoryPicker.styles';
import {Text} from '@vizir-banking/banking-app-core/dist/layout';

const list = [
  {categoryName: 'Salario', categoryId: 0},
  {categoryName: 'Investimentos', categoryId: 1},
  {categoryName: 'Poupança', categoryId: 2},
  {categoryName: 'Lazer', categoryId: 3},
  {categoryName: 'Impostos', categoryId: 4},
];
interface CategoryPickerProps {
  setModalStatus: (status: boolean) => void;
}

export const CategoryPicker: React.ComponentType<CategoryPickerProps> = ({
  setModalStatus,
}) => {
  return (
    <ScrollableContainer>
      <Container>
        <BackButton onPress={() => setModalStatus(false)}>
          <ButtonText>Confirmar</ButtonText>
        </BackButton>
      </Container>
    </ScrollableContainer>
  );
};
