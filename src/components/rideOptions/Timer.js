import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { InterRegular, white } from '../../constants/Index';
import Heading from '../Heading';

const Timer = () => {
  const [endTime, setEndTime] = useState(moment().add(5, 'minutes'));
  const [timeLeft, setTimeLeft] = useState(endTime.diff(moment(), 'seconds'));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(endTime.diff(moment(), 'seconds'));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = seconds => {
    const duration = moment.duration(seconds, 'seconds');
    const minutes = duration.minutes();
    const formattedSeconds = duration.seconds().toString().padStart(2, '0');
    return `${minutes}:${formattedSeconds}`;
  };

  return (
    <View>
      <Heading
        text={formatTime(timeLeft)}
        fontSize={moderateScale(14)}
        fontFamily={InterRegular}
        color={white}
        textAlign="center"
      />
    </View>
  );
};
export default Timer;
