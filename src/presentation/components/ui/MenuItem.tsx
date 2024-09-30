import React from 'react';
import { Text } from 'react-native';
import { Pressable, StyleSheet, View } from 'react-native';
import { colors } from '../../../config/theme/Theme';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

interface Props {
  name: string;
  icon: string;
  component: string;
}

export const MenuItem = ({ name, icon, component }: Props) => {
  const navigation = useNavigation<any>();

  return (
    <Pressable
      onPress={() => {navigation.navigate(component)}}
      style={({ pressed }) => [
        styles.container,
        { backgroundColor: pressed ? colors.cardBackgroundPressed : colors.cardBackground },  // Cambiar color en 'press'
      ]}
      accessibilityLabel={`Navigate to ${component}`}
    >
      <View style={styles.content}>
        <Icon name={icon} size={30} style={styles.iconLeft} color={colors.primary} />
        <Text style={styles.text}>{name}</Text>
        <Icon name='chevron-forward-outline' size={30} style={styles.iconRight} color={colors.primary} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8, // Añadir un borde redondeado
    marginVertical: 5, // Añadir margen entre elementos
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1, // Asegurarse de que los iconos estén espaciados correctamente
  },
  iconLeft: {
    marginRight: 10,
  },
  iconRight: {
    marginLeft: 'auto', // Empujar el ícono hacia la derecha
  },
  text: {
    flex: 1, // Ocupa el espacio restante
    fontSize: 16,
    color: colors.text,
  },
});