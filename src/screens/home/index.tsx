import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Participant } from '../../components/participant';
import { styles } from './styles';

export function Home() {
  const participants = [
    'Ian',
    'Amanda',
    'Bruno',
    'Titi',
    'Julinho',
    'Yuri',
    'Gabriel',
    'Titi 2',
    'Julinho 2',
    'Yuri 2',
    'Gabriel 2',
  ];

  function handleParticipantAdd() {
    if (participants.includes('Ian')) {
      return Alert.alert('Participante ja foi registrado');
    }
    console.log('clicked');
  }

  function handleParticipantRemove(name: string) {
    Alert.alert(
      'Remover participante',
      `Deseja realmente remover o participante ${name}?`,
      [
        { text: 'Sim', style: 'destructive' },
        { text: 'Não', style: 'cancel' },
      ]
    );
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

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguem chegou no evento ainda? Adicione participantes a sua lista
            de presença
          </Text>
        )}
      />
    </View>
  );
}
