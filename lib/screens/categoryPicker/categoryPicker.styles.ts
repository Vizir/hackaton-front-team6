import styled from 'styled-components/native';

export const ScrollableContainer = styled.ScrollView`
  flex: 1;
  height: 100%;
  background-color: #fff;
`;

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;
export const ButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;
export const BackButton = styled.TouchableOpacity`
  background-color: #000099;
  color: #fff;
  width: 200px
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const CategoryItem = styled.TouchableOpacity`
  padding-bottom: 4px;
  padding-top: 4px;
  margin: 6px 24px;
`;

type Props = {
  selected: boolean;
};

export const CategoryItemText = styled.Text`
  font-size: 20px;
  color: ${({selected}: Props) => selected ? '#000' : '#888'};
  font-weight: ${({selected}: Props) => selected ? 'bold' : 'normal'};
`;
