import translate from '@vizir-banking/banking-app-core/dist/i18n/translate';
import {Touchable} from '@vizir-banking/banking-app-core/dist/layout';
import React, {ReactElement} from 'react';

import {
  Wrapper,
  Label,
  Separator,
  ActiveIndicator,
  Container,
} from '~/components/tabs/tabs.styles';

type Props = {
  handleTabPress: (id: number) => () => void;
  selectedTabIndex: number;
};

export const Tabs = ({
  selectedTabIndex,
  handleTabPress,
}: Props): ReactElement => {
  const tabs = [
    {
      label: 'Resumo',
      id: 0,
    },
    {
      label: 'Detalhes',
      id: 1,
    },
  ];

  return (
    <Container>
      <Wrapper>
        {tabs.map((item, index: Number) => (
          <Touchable onPress={handleTabPress(item.id)} key={item.id}>
            <Label isSelected={index === selectedTabIndex}>{item.label}</Label>
            {index === selectedTabIndex && <ActiveIndicator />}
          </Touchable>
        ))}
      </Wrapper>
      <Separator />
    </Container>
  );
};
