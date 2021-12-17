import React, {useEffect, useState} from 'react';
import {
  ScrollableContainer,
  BackButton,
  Container,
  ButtonText,
  CategoryItem,
  CategoryItemText,
} from './categoryPicker.styles';
import {Text} from '@vizir-banking/banking-app-core/dist/layout';
import {api} from '~/api/api';
import {connect} from 'react-redux';
import {UserState} from '@vizir-banking/banking-app-core/dist/redux/user/types';

// const list = [
//   {categoryName: 'Salario', categoryId: 0},
//   {categoryName: 'Investimentos', categoryId: 1},
//   {categoryName: 'Poupança', categoryId: 2},
//   {categoryName: 'Lazer', categoryId: 3},
//   {categoryName: 'Impostos', categoryId: 4},
// ];

interface CategoryPickerProps {
  setModalStatus: (status: boolean) => void;
  transactionId: string;
}

type CategoryPickerPropsRedux = ReturnType<typeof mapStateToProps> & CategoryPickerProps;

interface Category {
  name: string;
  id: number;
};

export const CategoryPicker: React.ComponentType<CategoryPickerPropsRedux> = ({
  setModalStatus,
  transactionId,
  accountID,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const [categoriesList, setCategoriesList] = useState<Category[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    fetchCategoriesList()
  }, []);

  const fetchCategoriesList = () => {
    setIsFetching(true)
    api
      .get('/v1/account/category/list', {
        headers: {
          mocked: true,
        }
      })
      .then((response) => {
        setCategoriesList(response.data.categories);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  const updateCategory = () => {
    api
      .put('/v1/account/transaction', {
        transactionId,
        categoryId: selectedCategory?.id,
      },
        {
          headers: {
            accountId: accountID && accountID[0],
            'Content-Type': 'application/json',
          }
        })
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((e) => {
        console.log(e);
      })
  }

  const handleConfirmation = () => {
    selectedCategory && updateCategory();
    setModalStatus(false);
  }

  return (
    <ScrollableContainer>
      {isFetching ? (
        <Text>Carregando...</Text>
      ) : (
        <Container>
          {categoriesList.map((item) => (
            <CategoryItem
              key={item.id}
              onPress={() => setSelectedCategory(item)}
            >
              <CategoryItemText
                selected={selectedCategory === item}
              >
                {item.name}
              </CategoryItemText>
            </CategoryItem>
          ))}
          <BackButton onPress={() => handleConfirmation()}>
            <ButtonText>Confirmar</ButtonText>
          </BackButton>
        </Container>
      )}
    </ScrollableContainer>
  );
};

type State = {
  accountID?: number[] | undefined;
};

const mapStateToProps = ({user}: {user?: UserState}): State => ({
  accountID: user?.currentUser.accountIds,
});

export const UpdateCategory = connect(mapStateToProps, null)(CategoryPicker);
