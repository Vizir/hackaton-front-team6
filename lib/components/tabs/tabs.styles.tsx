import {View, Text} from '@vizir-banking/banking-app-core/dist/layout';
import {
  useTheme,
  ifStyle,
} from '@vizir-banking/banking-app-core/dist/styles/style-functions';
import {Platform, Dimensions} from 'react-native';
import styled from 'styled-components/native';

const isSelected = ifStyle('isSelected');

const {width} = Dimensions.get('window');

type LabelProps = {
  isSelected: boolean;
  children: Element;
};

export const Wrapper = styled(View)`
  flex-direction: row;
  justify-content: space-evenly;
  padding-right: 39px;
  padding-left: 39px;
`;

export const Label = styled(Text)<LabelProps>`
  color: ${isSelected(
    ({colors}) => colors.label.selected,
    ({colors}) => colors.label.primary,
  )};
  font-size: ${useTheme(({sizes}) => sizes.text.default)}px;
  font-family: ${isSelected(
    ({fonts}) => fonts.primary.weight.bold,
    ({fonts}) => fonts.primary.weight.normal,
  )};
  line-height: 20px;
`;

export const Separator = styled(View)`
  height: 1px;
  background-color: ${useTheme(({colors}) => colors.border.primary)};
  width: ${width};
  position: absolute;
  top: ${Platform.OS === 'ios' ? '32px' : '27px'};
  z-index: -1;
`;

export const ActiveIndicator = styled(View)`
  height: 5px;
  width: 100%;
  background-color: ${useTheme(
    ({colors}) => colors.activeIndicator.backgroundSecondary,
  )};
  margin-top: 5px;
  border-radius: ${useTheme(({sizes}) => sizes.tabs.tabsRadius)}px;
`;

export const Container = styled(View)`
  position: relative;
`;
