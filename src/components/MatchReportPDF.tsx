import { Page, Text, View, Document, StyleSheet, Font, Image } from '@react-pdf/renderer';
import { format } from 'date-fns';
import type { MatchReport } from '../types';

// Register fonts for better typography
Font.register({
  family: 'Helvetica',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Me5Q.ttf' },
    { 
      src: 'https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlvAw.ttf',
      fontWeight: 700 
    }
  ]
});

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
    fontSize: 12,
    position: 'relative'
  },
  headerContainer: {
    marginBottom: 20,
    alignItems: 'center'
  },
  federationText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a365d',
    marginBottom: 4,
    textAlign: 'center'
  },
  ligueText: {
    fontSize: 14,
    color: '#2d3748',
    marginBottom: 4,
    textAlign: 'center'
  },
  reportTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a365d',
    marginTop: 8,
    textAlign: 'center'
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
    alignSelf: 'center'
  },
  headerContent: {
    flex: 1
  },
  title: {
    fontSize: 24,
    marginBottom: 5,
    color: '#1a365d',
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 14,
    color: '#4a5568'
  },
  infoSection: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f7fafc',
    borderRadius: 4
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2d3748',
    marginBottom: 10,
    borderBottom: 1,
    borderBottomColor: '#e2e8f0',
    paddingBottom: 5
  },
  row: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'center'
  },
  label: {
    width: 120,
    fontWeight: 'bold',
    color: '#4a5568'
  },
  value: {
    flex: 1,
    color: '#2d3748'
  },
  scoreSection: {
    marginVertical: 20,
    padding: 15,
    backgroundColor: '#ebf8ff',
    borderRadius: 4
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  teamName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c5282',
    flex: 1,
    textAlign: 'center'
  },
  score: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2b6cb0',
    marginHorizontal: 20
  },
  eventsSection: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f7fafc',
    borderRadius: 4
  },
  teamEventsContainer: {
    marginTop: 10,
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 4,
    border: 1,
    borderColor: '#e2e8f0'
  },
  teamEventsTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2d3748',
    marginBottom: 8,
    backgroundColor: '#e2e8f0',
    padding: 5,
    borderRadius: 4,
    textTransform: 'uppercase'
  },
  eventsDivider: {
    borderBottom: 1,
    borderBottomColor: '#cbd5e0',
    marginVertical: 15
  },
  event: {
    marginBottom: 8,
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 4,
    borderLeftWidth: 4
  },
  eventRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4
  },
  eventTime: {
    width: 45,
    fontWeight: 'bold',
    color: '#4a5568',
    fontSize: 11
  },
  playerNumber: {
    width: 40,
    color: '#4a5568',
    fontSize: 11
  },
  eventType: {
    width: 80,
    fontWeight: 'bold',
    color: '#4a5568',
    fontSize: 11
  },
  playerName: {
    flex: 1,
    color: '#4a5568',
    fontSize: 11
  },
  licenseNumber: {
    width: 120,
    color: '#718096',
    fontSize: 10,
    textAlign: 'right'
  },
  eventDescription: {
    marginTop: 4,
    color: '#4a5568',
    fontSize: 11,
    paddingLeft: 165
  },
  notes: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f7fafc',
    borderRadius: 4
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: '#2d3748',
    fontSize: 12,
    fontWeight: 'bold',
    paddingTop: 10,
    borderTop: 1,
    borderTopColor: '#e2e8f0'
  },
  eventTypeContainer: {
    width: 80,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4
  },
  eventTypeBox: {
    width: 12,
    height: 12,
    marginRight: 4
  },
  eventTypeText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#4a5568'
  },
  yellowCard: {
    backgroundColor: '#ecc94b'
  },
  redCard: {
    backgroundColor: '#f56565'
  },
  goalIndicator: {
    backgroundColor: '#48bb78'
  },
  noEventsText: {
    color: '#718096',
    fontSize: 11,
    fontStyle: 'italic',
    textAlign: 'center',
    padding: 10
  }
});

interface Props {
  report: MatchReport;
}

export default function MatchReportPDF({ report }: Props) {
  const homeTeamEvents = report.events.filter(
    event => event.team?.toLowerCase() === 'home team'
  );
  const awayTeamEvents = report.events.filter(
    event => event.team?.toLowerCase() === 'away team'
  );

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* New Header */}
        <View style={styles.headerContainer}>
          <Image
            style={styles.logo}
            src="/src/logo.png"
          />
          <Text style={styles.federationText}>FEDERATION ROYALE MAROCAINE DE FOOTBALL</Text>
          <Text style={styles.ligueText}>LIGUE REGIONALE MARRAKECH-SAFI</Text>
          <Text style={styles.reportTitle}>Rapport de Match</Text>
        </View>

        {/* Match Information */}
        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>Match Information</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Stadium:</Text>
            <Text style={styles.value}>{report.stadium}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>City:</Text>
            <Text style={styles.value}>{report.city}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Date:</Text>
            <Text style={styles.value}>{format(new Date(report.date), 'MMMM do, yyyy')}</Text>
          </View>
        </View>

        {/* Officials */}
        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>Match Officials</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Referee:</Text>
            <Text style={styles.value}>{report.referee}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Assistant 1:</Text>
            <Text style={styles.value}>{report.refereea1}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Assistant 2:</Text>
            <Text style={styles.value}>{report.refereea2}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Delegate:</Text>
            <Text style={styles.value}>{report.delegate}</Text>
          </View>
        </View>

        {/* Score Section */}
        <View style={styles.scoreSection}>
          <View style={styles.scoreContainer}>
            <Text style={styles.teamName}>{report.homeTeam}</Text>
            <Text style={styles.score}>{report.homeScore} - {report.awayScore}</Text>
            <Text style={styles.teamName}>{report.awayTeam}</Text>
          </View>
        </View>

        {/* Match Events */}
        <View style={styles.eventsSection}>
          <Text style={styles.sectionTitle}>Match Events</Text>
          
          {/* Home Team Events */}
          <View style={styles.teamEventsContainer}>
            <Text style={styles.teamEventsTitle}>{report.homeTeam} Events</Text>
            {homeTeamEvents.length > 0 ? (
              homeTeamEvents.map((event, index) => (
                <View key={index} style={[styles.event, { 
                  borderLeftColor: 
                    event.type === 'goal' ? '#48bb78' :
                    event.type === 'yellow-card' ? '#ecc94b' :
                    event.type === 'red-card' ? '#f56565' :
                    '#4299e1'
                }]}>
                  <View style={styles.eventRow}>
                    <Text style={styles.eventTime}>{event.time}"</Text>
                    <Text style={styles.playerNumber}>N° {event.PlayerNumber}</Text>
                    <View style={styles.eventTypeContainer}>
                      <View style={[
                        styles.eventTypeBox,
                        event.type === 'goal' && styles.goalIndicator,
                        event.type === 'yellow-card' && styles.yellowCard,
                        event.type === 'red-card' && styles.redCard
                      ]} />
                      <Text style={styles.eventTypeText}>
                        {event.type === 'goal' && 'Goal'}
                        {event.type === 'yellow-card' && 'Yellow'}
                        {event.type === 'red-card' && 'Red'}
                      </Text>
                    </View>
                    <Text style={styles.playerName}>{event.PlayerName}</Text>
                    <Text style={styles.licenseNumber}>
                      ({event.PlayerLicenceNumber})
                    </Text>
                  </View>
                  {event.description && (
                    <Text style={styles.eventDescription}>{event.description}</Text>
                  )}
                </View>
              ))
            ) : (
              <Text style={styles.noEventsText}>No events recorded for {report.homeTeam}</Text>
            )}
          </View>

          <View style={styles.eventsDivider} />

          {/* Away Team Events */}
          <View style={styles.teamEventsContainer}>
            <Text style={styles.teamEventsTitle}>{report.awayTeam} Events</Text>
            {awayTeamEvents.length > 0 ? (
              awayTeamEvents.map((event, index) => (
                <View key={index} style={[styles.event, { 
                  borderLeftColor: 
                    event.type === 'goal' ? '#48bb78' :
                    event.type === 'yellow-card' ? '#ecc94b' :
                    event.type === 'red-card' ? '#f56565' :
                    '#4299e1'
                }]}>
                  <View style={styles.eventRow}>
                    <Text style={styles.eventTime}>{event.time}"</Text>
                    <Text style={styles.playerNumber}>N° {event.PlayerNumber}</Text>
                    <View style={styles.eventTypeContainer}>
                      <View style={[
                        styles.eventTypeBox,
                        event.type === 'goal' && styles.goalIndicator,
                        event.type === 'yellow-card' && styles.yellowCard,
                        event.type === 'red-card' && styles.redCard
                      ]} />
                      <Text style={styles.eventTypeText}>
                        {event.type === 'goal' && 'Goal'}
                        {event.type === 'yellow-card' && 'Yellow'}
                        {event.type === 'red-card' && 'Red'}
                      </Text>
                    </View>
                    <Text style={styles.playerName}>{event.PlayerName}</Text>
                    <Text style={styles.licenseNumber}>
                      ({event.PlayerLicenceNumber})
                    </Text>
                  </View>
                  {event.description && (
                    <Text style={styles.eventDescription}>{event.description}</Text>
                  )}
                </View>
              ))
            ) : (
              <Text style={styles.noEventsText}>No events recorded for {report.awayTeam}</Text>
            )}
          </View>
        </View>

        {/* Additional Notes */}
        {report.additionalNotes && (
          <View style={styles.notes}>
            <Text style={styles.sectionTitle}>Additional Notes</Text>
            <Text>{report.additionalNotes}</Text>
          </View>
        )}

        {/* New Footer */}
        <Text style={styles.footer}>LIGUE REGIONALE MARRAKECH-SAFI</Text>
      </Page>
    </Document>
  );
}