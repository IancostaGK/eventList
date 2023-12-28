import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

type Props = { name: string };

export function Participant({ name }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
