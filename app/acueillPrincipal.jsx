import { StyleSheet, Text, View } from 'react-native';
import acceuil from '../components/acceuil';

export default function acceuilPrincipal() {
  return (
    <View >
      <acceuil/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
