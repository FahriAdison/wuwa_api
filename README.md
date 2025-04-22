# Wuthering Waves API (JavaScript Version)

A comprehensive REST API for Wuthering Waves game data with an anime-themed UI interface, converted from [resonance-rest/api](https://github.com/resonance-rest/api) (Golang) to JavaScript for deployment on Vercel.

![Wuthering Waves API](./public/images/wuwa_background.jpeg)

## Features

- **Anime-themed UI Interface** - Beautiful landing page with anime background
- **Interactive Showcase** - Character cards with flip animations and detailed stats
- **Visitor Counter** - Track API usage statistics
- **WIB Time/Date Display** - Real-time Western Indonesian Time display
- **API Documentation** - Interactive documentation with examples
- **Hamburger Menu** - Easy access to all API features
- **Changelog** - Track updates and improvements
- **Complete Game Data** - Comprehensive data for Wuthering Waves version 2.2
- **Multiple Endpoints** - Characters, weapons, echoes, attributes, sonatas, stats, substats, and redemption codes
- **Vercel Compatible** - Optimized for Vercel Serverless Functions
- **Responsive Design** - Works on desktop and mobile devices

## Project Structure

```
wuthering-waves-api/
├── data/                  # JSON game data
├── public/                # Static assets
│   ├── css/               # Stylesheets
│   ├── js/                # JavaScript files
│   ├── images/            # Image assets
│   └── index.html         # Landing page
├── src/
│   ├── models/            # Data models
│   ├── routes/            # API routes
│   └── utils/             # Utility functions
├── index.js               # Entry point
├── package.json           # Dependencies
└── vercel.json            # Vercel configuration
```

## API Endpoints

All API endpoints are now prefixed with `/api` for better organization:

- `/api/characters` - Character information
- `/api/weapons` - Weapon information
- `/api/echoes` - Echo information
- `/api/attributes` - Attribute information
- `/api/sonatas` - Sonata (set) information
- `/api/stats` - Stat information
- `/api/substats` - Substat information
- `/api/codes` - Redemption codes
- `/api/version` - API version
- `/api/status` - API status
- `/api/info` - API information

## UI Pages

- `/` - Landing page with anime theme and API overview
- `/widgets` - Demonstration of available widgets
- `/api` - API documentation and interactive explorer

## Deployment to Vercel

1. Create a new GitHub repository
2. Upload all files from this project to the repository
3. Log in to [Vercel](https://vercel.com)
4. Click "New Project" and import the GitHub repository
5. Vercel will automatically detect the configuration and deploy the API

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. The application will be available at `http://localhost:3000`

## Updating Game Data

To update game data:
1. Edit JSON files in the `data/` folder
2. Commit and push changes to GitHub
3. Vercel will automatically redeploy the API with the latest data

## Customizing the UI

The UI components are organized in the `public` directory:
- `css/style.css` - Main stylesheet
- `css/showcase.css` - Showcase component styles
- `css/widgets.css` - Widget component styles
- `js/main.js` - Main JavaScript functionality
- `js/showcase.js` - Showcase component functionality
- `js/widgets.js` - Widget component functionality

## Changelog

### Version 2.2 (April 22, 2025)
- Added new UI interface with anime theme
- Improved showcase feature with interactive cards
- Added visitor counter and WIB time/date display
- Implemented hamburger menu with API features
- Updated documentation and README
- Refactored code for better organization

### Version 2.1 (March 15, 2025)
- Added new characters from latest game update
- Updated weapon stats and information
- Fixed bugs in character endpoint
- Improved API response time

### Version 2.0 (January 10, 2025)
- Converted from Golang to JavaScript
- Added new endpoints for sonatas and codes
- Improved error handling and documentation
- Optimized for Vercel deployment

## License

MIT License

## Credits

- Original API (Golang): [resonance-rest/api](https://github.com/resonance-rest/api)
- Converted to JavaScript for Vercel deployment
- UI improvements and feature updates by [FahriAdison](https://github.com/FahriAdison)
