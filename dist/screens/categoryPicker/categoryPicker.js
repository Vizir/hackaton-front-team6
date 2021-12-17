import React, { useEffect, useState } from 'react';
import { ScrollableContainer, BackButton, Container, ButtonText, CategoryItem, CategoryItemText, } from './categoryPicker.styles';
import { Text } from '@vizir-banking/banking-app-core/dist/layout';
import { api } from '../../api/api';
import { connect } from 'react-redux';
;
export const CategoryPicker = ({ setModalStatus, transactionId, accountID, }) => {
    const [selectedCategory, setSelectedCategory] = useState();
    const [categoriesList, setCategoriesList] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    useEffect(() => {
        fetchCategoriesList();
    }, []);
    const fetchCategoriesList = () => {
        setIsFetching(true);
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
        }, {
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
        });
    };
    const handleConfirmation = () => {
        selectedCategory && updateCategory();
        setModalStatus(false);
    };
    return (React.createElement(ScrollableContainer, null, isFetching ? (React.createElement(Text, null, "Carregando...")) : (React.createElement(Container, null,
        categoriesList.map((item) => (React.createElement(CategoryItem, { key: item.id, onPress: () => setSelectedCategory(item) },
            React.createElement(CategoryItemText, { selected: selectedCategory === item }, item.name)))),
        React.createElement(BackButton, { onPress: () => handleConfirmation() },
            React.createElement(ButtonText, null, "Confirmar"))))));
};
const mapStateToProps = ({ user }) => ({
    accountID: user?.currentUser.accountIds,
});
export const UpdateCategory = connect(mapStateToProps, null)(CategoryPicker);
