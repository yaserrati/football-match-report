import { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { ClipboardList } from 'lucide-react';
import MatchReportForm from './components/MatchReportForm';
import MatchReportPDF from './components/MatchReportPDF';
import type { MatchReport } from './types';

function App() {
  const [report, setReport] = useState<MatchReport | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white py-6 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <ClipboardList className="w-8 h-8" />
          <div>
            <h1 className="text-2xl font-bold">LIGUE REGIONALE MARRAKECH-SAFI</h1>
            <p className="text-blue-100">Generate professional match reports efficiently</p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4">
        {report ? (
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Report Generated!</h2>
            <p className="text-gray-600">Your match report has been generated successfully.</p>
            
            <div className="flex justify-center gap-4">
              <PDFDownloadLink
                document={<MatchReportPDF report={report} />}
                fileName={`match-report-${report.homeTeam}-vs-${report.awayTeam}.pdf`}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Download PDF
              </PDFDownloadLink>

              <button
                onClick={() => setReport(null)}
                className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Create New Report
              </button>
            </div>
          </div>
        ) : (
          <MatchReportForm onSubmit={setReport} />
        )}
      </main>
    </div>
  );
}

export default App;