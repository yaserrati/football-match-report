import React, { useState } from 'react';
import { format } from 'date-fns';
import { Calendar, MapPin, Users, Plus, Trash2 } from 'lucide-react';
import type { MatchReport, MatchEvent } from '../types';

interface Props {
  onSubmit: (report: MatchReport) => void;
}

export default function MatchReportForm({ onSubmit }: Props) {
  const [report, setReport] = useState<MatchReport>({
    competition: '',
    date: format(new Date(), 'yyyy-MM-dd'),
    stadium: '',
    city : '',
    homeTeam: '',
    awayTeam: '',
    homeScore: 0,
    awayScore: 0,
    referee: '',
    refereea1: '',
    refereea2:'',
    delegate:'',
    events: [],
    additionalNotes: ''
  });

  const [newEvent, setNewEvent] = useState<MatchEvent>({
    time: '',
    description: '',
    type: 'goal'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(report);
  };

  const addEvent = () => {
    if (newEvent.time && newEvent.description) {
      setReport(prev => ({
        ...prev,
        events: [...prev.events, newEvent]
      }));
      // setNewEvent({
      //   time: '',
      //   description: '',
      //   type: 'goal'
      // });
      // .
    }
  };

  const removeEvent = (index: number) => {
    setReport(prev => ({
      ...prev,
      events: prev.events.filter((_, i) => i !== index)
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          {/* <Whistle className="w-6 h-6" /> */}
          Match Details
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* <div>
            <label className="block text-sm font-medium text-gray-700">Competition</label>
            <select
                value={newEvent.type}
                onChange={e => setNewEvent(prev => ({ ...prev, type: e.target.value as MatchEvent['type'] }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="Away Team">Honor 2</option>
                <option value="Home Team">Honor 1</option>
                <option value="Away Team">Excellent</option>
                <option value="Home Team">Honor Feminist 2</option>
                <option value="Home Team">Honor Feminist 1</option>
                <option value="Home Team">Honor Feminist Excellent</option>

              </select>
          </div> */}

          <div>
            <label className="block text-sm font-medium text-gray-700">Competition</label>
            <select
              value={report.competition} // Update this line
              onChange={e => setReport(prev => ({ ...prev, competition: e.target.value }))} // Update this line
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="Honor 2">Honor 2</option>
              <option value="Honor 1">Honor 1</option>
              <option value="Excellent">Excellent</option>
              <option value="Honor Feminist 2">Honor Feminist 2</option>
              <option value="Honor Feminist 1">Honor Feminist 1</option>
              <option value="Honor Feminist Excellent">Honor Feminist Excellent</option>
            </select>
          </div>


          <div>
            <label className="block text-sm font-medium text-gray-700">Date</label>
            <div className="mt-1 relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="datetime-local"
                value={report.date}
                onChange={e => setReport(prev => ({ ...prev, date: e.target.value }))}
                className="block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Stadium</label>
            <div className="mt-1 relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={report.stadium}
                onChange={e => setReport(prev => ({ ...prev, stadium: e.target.value }))}
                className="block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">City</label>
            <div className="mt-1 relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={report.city}
                onChange={e => setReport(prev => ({ ...prev, city: e.target.value }))}
                className="block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Referee Name</label>
            <div className="mt-1 relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={report.referee}
                onChange={e => setReport(prev => ({ ...prev, referee: e.target.value }))}
                className="block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Referee Assistant 1 Name</label>
            <div className="mt-1 relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={report.refereea1}
                onChange={e => setReport(prev => ({ ...prev, refereea1: e.target.value }))}
                className="block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
          </div>


          <div>
            <label className="block text-sm font-medium text-gray-700">Referee Assistant 2 Name</label>
            <div className="mt-1 relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={report.refereea2}
                onChange={e => setReport(prev => ({ ...prev, refereea2: e.target.value }))}
                className="block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
          </div>


          <div>
            <label className="block text-sm font-medium text-gray-700">Delegate Name</label>
            <div className="mt-1 relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={report.delegate}
                onChange={e => setReport(prev => ({ ...prev, delegate: e.target.value }))}
                className="block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Home Team</label>
            <input
              type="text"
              value={report.homeTeam}
              onChange={e => setReport(prev => ({ ...prev, homeTeam: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Away Team</label>
            <input
              type="text"
              value={report.awayTeam}
              onChange={e => setReport(prev => ({ ...prev, awayTeam: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Home Score</label>
            <input
              type="number"
              min="0"
              value={report.homeScore}
              onChange={e => setReport(prev => ({ ...prev, homeScore: parseInt(e.target.value) }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Away Score</label>
            <input
              type="number"
              min="0"
              value={report.awayScore}
              onChange={e => setReport(prev => ({ ...prev, awayScore: parseInt(e.target.value) }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
        </div>
      </div>


      <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Match Events</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Team</label>
              <select
                value={newEvent.team}
                onChange={e => setNewEvent(prev => ({ ...prev, team: e.target.value  }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="Away Team">Away Team</option>
                <option value="Home Team">Home Team</option>
              </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Player Number</label>
            <input
              type="text"
              placeholder="e.g. 05"
              value={newEvent.PlayerNumber}
              onChange={e => setNewEvent(prev => ({ ...prev, PlayerNumber: parseInt(e.target.value) }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Player Name</label>
            <input
              type="text"
              placeholder="e.g. Yahya Jabrane"
              value={newEvent.PlayerName}
              onChange={e => setNewEvent(prev => ({ ...prev, PlayerName: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Player Licence Number</label>
            <input
              type="text"
              placeholder="e.g. L0000001M99"
              value={newEvent.PlayerLicenceNumber}
              onChange={e => setNewEvent(prev => ({ ...prev, PlayerLicenceNumber: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Time</label>
            <input
              type="text"
              placeholder="e.g. 23'"
              value={newEvent.time}
              onChange={e => setNewEvent(prev => ({ ...prev, time: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Type</label>
            <select
              value={newEvent.type}
              onChange={e => setNewEvent(prev => ({ ...prev, type: e.target.value as MatchEvent['type'] }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="goal">Goal</option>
              <option value="yellow-card">Yellow Card</option>
              <option value="red-card">Red Card</option>
              {/* <option value="substitution">Substitution</option>
              <option value="injury">Injury</option>
              <option value="other">Other</option> */}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <div className="mt-1 flex gap-2">
              <input
                type="text"
                value={newEvent.description}
                onChange={e => setNewEvent(prev => ({ ...prev, description: e.target.value }))}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={addEvent}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4">
          {report.events.map((event, index) => (
            <div key={index} className="flex items-center gap-4 py-2 border-b">
              <span className="font-medium w-16">{event.time}</span>
              <span className="px-2 py-1 rounded text-sm font-medium" style={{
                backgroundColor: {
                  'goal': 'rgb(34 197 94)',
                  'yellow-card': 'rgb(234 179 8)',
                  'red-card': 'rgb(239 68 68)',
                  'substitution': 'rgb(59 130 246)',
                  'injury': 'rgb(249 115 22)',
                  'other': 'rgb(107 114 128)'
                }[event.type],
                color: 'white'
              }}>
                {event.type.replace('-', ' ')}
              </span>
              <span className="flex-1">{event.description}</span>
              <button
                type="button"
                onClick={() => removeEvent(index)}
                className="text-red-600 hover:text-red-800"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Additional Notes</h2>
        <textarea
          value={report.additionalNotes}
          onChange={e => setReport(prev => ({ ...prev, additionalNotes: e.target.value }))}
          rows={4}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Any additional comments or observations..."
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Generate Report
        </button>
      </div>
    </form>
  );
}