# React Module Management App

A simple React application for managing academic modules and filières with routing and JSON server backend.

## Features

- 📚 Browse and search modules by filière
- 🔍 Search functionality to filter modules
- ❌ Delete modules
- 📄 View module details
- 🎨 Responsive design with Bootstrap

## Tech Stack

- **Frontend**: React 19, React Router DOM
- **Styling**: Bootstrap 5
- **Build Tool**: Vite
- **Backend**: JSON Server (for development)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the JSON server:
```bash
npm run server
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/        # React components
│   ├── Navbar.jsx
│   ├── Acceuil.jsx
│   ├── FormRecherche.jsx
│   ├── Liste_Module.jsx
│   ├── DetailsModule.jsx
│   ├── Filiere.jsx
│   └── Ligne.jsx
├── App.jsx           # Main app component
├── main.jsx          # Entry point
└── styles/
```

## License

MIT


