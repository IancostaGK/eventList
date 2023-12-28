import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Participant } from '../../components/participant';
import { styles } from './styles';

export function Home() {
  function handleParticipantAdd() {
    console.log('clicked');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2020</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.btn} onPress={handleParticipantAdd}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant name="Ian Santos" />
      <Participant name="Amanda Claro" />
      <Participant name="Julinho Claro" />
      <Participant name="Titi Santos" />
    </View>
  );
}
