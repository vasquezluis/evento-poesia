
import { MdOutlineDateRange } from 'react-icons/md'

import {
  // Image,
  Page,
  Text,
  View,
  Document,
  StyleSheet
} from '@react-pdf/renderer'

function ResultPDF ({ nombre, carnet, generoPoesia, fechaInscripcion, fechaDeclamacion }) {
  return (
    <Document>
      <Page>
        <View style={styles.container}>

          <View style={styles.icon}>
            <MdOutlineDateRange name='date-range' size={36} color='black' />
          </View>

          <Text style={styles.title}>Registro - poesía</Text>

          <Text style={styles.text}>Nombre - Carnet:</Text>
          <Text style={styles.data}>
            {nombre} - {carnet}
          </Text>

          <Text style={styles.text}>Género de poesía:</Text>
          <Text style={styles.data}>
            {generoPoesia}
          </Text>

          <Text style={styles.text}>Fecha de inscripción:</Text>
          <Text style={styles.data}>
            {fechaInscripcion}
          </Text>

          <Text style={styles.text}>Fecha de declamación:</Text>
          <Text style={styles.data}>
            {fechaDeclamacion}
          </Text>

        </View>
      </Page>
    </Document>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    margin: 10
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  text: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 5
  },
  data: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  }
})

export default ResultPDF
