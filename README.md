# Discord Bot - Portfolio Project

A simple Discord bot built with **Node.js** and **discord.js** for demonstrating bot development skills.

## Features
- 👋 **Welcome messages** - Greets new members when they join
- 🤖 **Bot detection** - Detects and logs bot accounts joining the server
- 🏓 **Ping command** - Simple slash command to check latency
- ❓ **Help command** - Lists available commands
- 📊 **Logging** - Logs bot activity to designated channels

## Project Structure
```
discord-bot/
├── bot.js              # Main bot file (loads commands + events)
├── package.json        # Dependencies and scripts
├── .env              # Bot token (DO NOT SHARE)
├── .gitignore          # Ignores node_modules, .env, etc.
├── commands/           # Slash command modules
│   ├── ping.js
│   └── help.js
├── events/             # Event handlers
│   └── guildMemberAdd.js
└── config/             # Configuration files
    └── greeting.js
```

## Getting Started

### Prerequisites
1. Install [Node.js](https://nodejs.org/) (v18+ recommended)
2. Create a Discord bot application:
   - Go to [Discord Developer Portal](https://discord.com/developers/applications)
   - Create a new application → Bot tab → "Add Bot"
   - Copy the token and add it to `.env`
   - Enable **Privileged Gateway Intents** (Server Members, Message Content)
   - Invite the bot to your server with appropriate permissions

### Installation
```bash
npm install
npm start
```

### Running
```bash
node bot.js
```

### Configuration
Edit `config/greeting.js` to customize:
- `welcomeChannel`: Name of the channel for welcome messages
- `logsChannel`: Name of the channel for bot logs
- `greetingEmbedColor`: Color of welcome embeds

## License
MIT