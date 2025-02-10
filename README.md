# Referee Match Report Generator

A professional web application designed to help football referees generate detailed match reports efficiently. This tool streamlines the post-match documentation process by providing an intuitive interface for recording match details, events, and generating standardized PDF reports.

![Referee Match Report Generator](https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=1200)

## Features

- 📝 **Comprehensive Match Details**
  - Competition information
  - Team details and scores
  - Venue and date tracking
  - Referee information

- ⚽ **Event Management**
  - Real-time event recording
  - Support for multiple event types:
    - Goals
    - Yellow cards
    - Red cards
    - Substitutions
    - Injuries
    - Other match events
  - Chronological event timeline

- 📄 **Professional PDF Generation**
  - Clean, organized layout
  - Automatic formatting
  - Standardized report structure
  - Instant download capability

- 💻 **Modern User Interface**
  - Responsive design
  - Intuitive form layout
  - Real-time validation
  - Mobile-friendly

## Technology Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React-PDF
- Date-fns
- Lucide Icons

## Getting Started

### Prerequisites

- Node.js 16.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/referee-match-report.git
   ```

2. Navigate to the project directory:
   ```bash
   cd referee-match-report
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Usage

1. **Fill Match Details**
   - Enter competition name
   - Select match date
   - Input venue information
   - Add team names and scores
   - Provide referee details

2. **Record Match Events**
   - Click the "+" button to add new events
   - Enter the event time (e.g., "23'")
   - Select event type
   - Add event description
   - Events are automatically organized chronologically

3. **Additional Notes**
   - Use the notes section for any extra observations
   - Include important match context or special circumstances

4. **Generate Report**
   - Click "Generate Report" to create the PDF
   - Download the PDF using the "Download PDF" button
   - Create new reports as needed

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Icons provided by [Lucide](https://lucide.dev/)
- PDF generation powered by [React-PDF](https://react-pdf.org/)
- Date formatting by [date-fns](https://date-fns.org/)
