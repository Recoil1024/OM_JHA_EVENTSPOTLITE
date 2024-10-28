EventSpot Lite
A modern, responsive React application for event management and discovery. EventSpot Lite allows users to browse events, add them to their calendar, and create memories of attended events.
Features

    Event Discovery: Browse through various events with detailed information
    Real-time Search: Search events by name and location
    Calendar Management: Add events to personal calendar with notes
    Memory Creation: Create and store memories from attended events with notes and images
    Event Creation: Add new events with comprehensive details
    Responsive Design: Works seamlessly across desktop and mobile devices

Technologies Used

    React.js
    CSS3 with CSS Variables
    FontAwesome Icons
    Local Storage for data persistence
    Modern JavaScript (ES6+)

Installation

    Clone the repository:

bash

git clone this repository

    Navigate to the project directory:

bash

cd eventspot-lite

    Install dependencies:

bash

npm install

    Start the development server:

bash

npm start

Usage
Event Browsing

    View all events in a responsive grid layout
    Click on any event card to view detailed information
    Search events using the search bar

Calendar Features

    Add events to your calendar
    Add optional notes when adding events
    Remove events from calendar as needed

Memory Creation

    Create memories for events you've attended
    Add notes and upload images
    View all memories in a dedicated section

Adding Events

    Create new events with detailed information
    Add event images via URL
    Specify activities and timings

Project Structure
text

eventspot-lite/
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Sidebar.js
│   │   ├── EventGrid.js
│   │   ├── EventModal.js
│   │   ├── CalendarSection.js
│   │   ├── MemoriesSection.js
│   │   └── AddEventSection.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── public/
│   └── index.html
├── package.json
└── README.md

Contributing

    Fork the repository
    Create your feature branch (git checkout -b feature/AmazingFeature)
    Commit your changes (git commit -m 'Add some AmazingFeature')
    Push to the branch (git push origin feature/AmazingFeature)
    Open a Pull Request

License
This project is licensed under the MIT License - see the LICENSE file for details.

Future Enhancements

    User authentication and personal profiles
    Event categories and filtering
    Social sharing features
    Event reminders and notifications
    Integration with external calendar services
    
