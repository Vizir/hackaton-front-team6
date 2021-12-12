import React, {useState} from 'react';
import {View} from '@vizir-banking/banking-app-core/dist/layout';
import {MonthSelector} from '~/components/monthSelector/monthSelector';

interface DashboardProps {
  monthHandler: (month: number) => void;
  displayMonth: number;
}

const Dashboard: React.ComponentType<DashboardProps> = ({
  monthHandler,
  displayMonth,
}) => {
  return (
    <View>
      <MonthSelector displayMonth={displayMonth} monthHandler={monthHandler} />
    </View>
  );
};

export {Dashboard};
