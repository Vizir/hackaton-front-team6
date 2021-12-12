import React, {useState} from 'react';
import {View} from '@vizir-banking/banking-app-core/dist/layout';
import {MonthSelector} from '~/components/monthSelector/monthSelector';

interface DetailsProps {
  monthHandler: (month: number) => void;
  displayMonth: number;
}

const Details: React.ComponentType<DetailsProps> = ({
  monthHandler,
  displayMonth,
}) => {
  return (
    <View>
      <MonthSelector displayMonth={displayMonth} monthHandler={monthHandler} />
    </View>
  );
};

export {Details};
