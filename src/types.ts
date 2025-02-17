export interface MatchEvent {

  time: string;
  description: string;
  type: 'goal' | 'yellow-card' | 'red-card' | 'substitution' | 'injury' | 'other';
  player?: string;
  PlayerNumber?: number;
  team?: string;
  reason?: string;
  PlayerLicenceNumber?: string;
  PlayerName?: string;
  
}

export interface MatchReport {
  
  competition: string;
  date: string;
  stadium: string;
  city: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  referee: string;
  referee4: string;
  refereea1: string ;
  refereea2: string ;
  delegate: string ;
  events: MatchEvent[];
  additionalNotes: string;
}