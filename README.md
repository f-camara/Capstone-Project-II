# Event Organiser

A full-stack front-end React application for managing personal events. Users can register an account, log in, and create, view, and edit their upcoming events from a centralised dashboard.

## Features

- **User Authentication** — Register a new account and log in.
- **Protected Routes** — Dashboard, Events, and Help pages are only accessible to logged in users.
- **Dashboard** — Personalised greeting and quick navigation to your events.
- **Event Management** — Create, view, and edit events with a simple modal interface.
- **Help / FAQ** — Built-in help page with frequently asked questions.

## How to install

```bash
# Clone the repository
git clone https://github.com/f-camara/Event-Organiser.git

# Navigate into the project directory
cd Event-Organiser

# Install dependencies
npm install
```

## Running the App

### Dev Server

Start the server:

```bash
npm run dev
```

Open the URL printed in the terminal (default: `http://localhost:5173`).

## Project Structure

```
Event-Organiser/
├── index.html                  # Entry HTML file
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── public/                     # Static assets
│   ├── favicon.svg
│   └── icons.svg
└── src/
    ├── main.jsx                # Application entry point
    ├── index.css               # Global styles
    ├── context/
    │   └── userContext.jsx      # Authentication & event state (React Context)
    ├── data/
    │   └── faq.js              # FAQ data
    └── components/
        ├── App/                # Root component with routing
        ├── Dashboard/          # User dashboard / landing page
        ├── Events/             # Create, display, and edit events
        ├── Footer/             # Footer component
        ├── Help/               # Help / FAQ page
        ├── Login/              # Login form
        ├── Navigation/         # Sidebar navigation & top navbar
        └── Registration/       # Registration form
```

## Usage

1. **Register** — Visit the registration page and create a new account.
2. **Log in** — Sign in with your credentials to access the app.
3. **Dashboard** — After logging in you will see a personalised greeting.
4. **Events** — Navigate to the Events page to create, view, or edit your events.
5. **Help** — Visit the Help page for answers to common questions.

## License

This project is for educational purposes as part of a capstone project.
