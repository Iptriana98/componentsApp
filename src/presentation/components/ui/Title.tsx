import React from 'react';
import { Text } from 'react-native';
import { colors ,globalStyles } from '../../../config/theme/Theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
    text: string;
    safe?: boolean;
    white?: boolean;
}

export const Title = ({ text, safe, white }: Props) => {
  const { top } = useSafeAreaInsets();
  return (
    <Text style={{
        ...globalStyles.title,
        marginTop: safe ? top : 0,
        marginBottom: 10,
        colors: white ? 'white' : colors.text,
    }}
    >{text}</Text>
  );
};
