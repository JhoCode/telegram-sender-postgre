# Telegram Sender Bot

This bot sends a random message from a PostgreSQL database to a specified Telegram chat at regular intervals. The message is chosen randomly from a table of messages in the database.

## Installation

1. Clone the repository
2. Install the dependencies with `npm install`
3. Copy the example environment file with `cp .env.example .env`
4. Edit the `.env` file and fill in your Telegram Bot token and PostgreSQL database details
5. Run the bot with `npm start`

## Usage

To start using the bot, add it to a Telegram group chat and type `/start`. The bot will then start sending messages to the specified chat at the specified interval.

## Configuration

The following environment variables are used to configure the bot:

- `TOKEN` - Your Telegram Bot token
- `DB_HOST` - The hostname of your PostgreSQL database server
- `DB_PORT` - The port number of your PostgreSQL database server
- `DB_USER` - The username for your PostgreSQL database
- `DB_PASSWORD` - The password for your PostgreSQL database
- `DB_NAME` - The name of your PostgreSQL database
- `PARTNER_CHAT_ID` - The chat ID of the chat to send messages to

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.


