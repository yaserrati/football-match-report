import React, { useState } from 'react';
import { format } from 'date-fns';
import { Calendar, MapPin, Users, Plus, Trash2 } from 'lucide-react';
import { translations } from '../translations';
import type { MatchReport, MatchEvent } from '../types';



interface Props {
  onSubmit: (report: MatchReport) => void;
  language: 'en' | 'ar';
}

export default function MatchReportForm({ onSubmit, language }: Props) {
  const t = translations[language];

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
          {t.matchDetails}
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
            <label className="block text-sm font-medium text-gray-700">{t.competition}</label>
            <select
              value={report.competition} // Update this line
              onChange={e => setReport(prev => ({ ...prev, competition: e.target.value }))} // Update this line
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="Honor 2">{t.honor2}</option>
              <option value="Honor 1">{t.honor1}</option>
              <option value="Excellent">{t.excelent}</option>
              <option value="Honor Feminist 2">{t.honorf2}</option>
              <option value="Honor Feminist 1">{t.honorf2}</option>
              <option value="Honor Feminist Excellent">{t.excelentf}</option>
            </select>
          </div>


          <div>
            <label className="block text-sm font-medium text-gray-700">{t.date}</label>
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
            <label className="block text-sm font-medium text-gray-700">{t.city}</label>
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
            <label className="block text-sm font-medium text-gray-700">{t.city}</label>
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
            <label className="block text-sm font-medium text-gray-700">{t.referee}</label>
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
            <label className="block text-sm font-medium text-gray-700">{t.referee1}</label>
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
            <label className="block text-sm font-medium text-gray-700">{t.referee2}</label>
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
            <label className="block text-sm font-medium text-gray-700">{t.delegate}</label>
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
            <label className="block text-sm font-medium text-gray-700">{t.homeTeam}</label>
            <input
              type="text"
              value={report.homeTeam}
              onChange={e => setReport(prev => ({ ...prev, homeTeam: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">{t.awayTeam}</label>
            <input
              type="text"
              value={report.awayTeam}
              onChange={e => setReport(prev => ({ ...prev, awayTeam: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">{t.homeScore}</label>
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
            <label className="block text-sm font-medium text-gray-700">{t.awayScore}</label>
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
        <h2 className="text-2xl font-bold text-gray-800">{t.matchEvents}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">{t.team}</label>
              <select
                value={newEvent.team}
                onChange={e => setNewEvent(prev => ({ ...prev, team: e.target.value  }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="Away Team">{t.awayTeam}</option>
                <option value="Home Team">{t.homeTeam}</option>
              </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">{t.PlayerNumber}</label>
            <input
              type="text"
              placeholder="e.g. 05"
              value={newEvent.PlayerNumber}
              onChange={e => setNewEvent(prev => ({ ...prev, PlayerNumber: parseInt(e.target.value) }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">{t.PlayerName}</label>
            <input
              type="text"
              placeholder="e.g. Yahya Jabrane"
              value={newEvent.PlayerName}
              onChange={e => setNewEvent(prev => ({ ...prev, PlayerName: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">{t.playerlicencenumber}</label>
            <input
              type="text"
              placeholder="e.g. L0000001M99"
              value={newEvent.PlayerLicenceNumber}
              onChange={e => setNewEvent(prev => ({ ...prev, PlayerLicenceNumber: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">{t.time}</label>
            <input
              type="text"
              placeholder="e.g. 23'"
              value={newEvent.time}
              onChange={e => setNewEvent(prev => ({ ...prev, time: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">{t.type}</label>
            <select
              value={newEvent.type}
              onChange={e => setNewEvent(prev => ({ ...prev, type: e.target.value as MatchEvent['type'] }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="goal">{t.goal}</option>
              <option value="yellow-card">{t.yellowcard}</option>
              <option value="red-card">{t.redcard}</option>
              {/* <option value="substitution">Substitution</option>
              <option value="injury">Injury</option>
              <option value="other">Other</option> */}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">{t.description}</label>
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
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{t.additionalNotes}</h2>
        <textarea
          value={report.additionalNotes}
          onChange={e => setReport(prev => ({ ...prev, additionalNotes: e.target.value }))}
          rows={4}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder={language === 'en' ? 'Any additional comments or observations...' : 'أي تعليقات أو ملاحظات إضافية...'}
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {t.generateReport}
        </button>
      </div>
    </form>
  );
}