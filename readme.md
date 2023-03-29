Telegram Bot with PostgreSQL
This is a simple Telegram bot that sends random messages from a PostgreSQL database to a specified chat on a schedule. It was built using Node.js and the node-telegram-bot-api and pg libraries.

Installation
To install and set up the project, follow these steps:

Clone the repository to your local machine.
Install the dependencies by running the command npm install.
Create a .env file in the root directory of the project and add your Telegram Bot token and PostgreSQL credentials. You can use the .env.example file as a template.
Set up the PostgreSQL database using the schema.sql file in the db directory.
Run the command npm start to start the bot.
Usage
To use the bot, add it to a Telegram chat and send messages to the chat. The bot will respond with the chat ID and send random messages from the PostgreSQL database on a schedule.

Contributing
If you would like to contribute to the project, please follow these guidelines:

Fork the repository and create a new branch for your feature or bug fix.
Make your changes and write tests for them.
Submit a pull request to the main branch of the original repository.
Wait for feedback from the maintainers and make any necessary changes.
License
This project is released under the MIT License. See the LICENSE file for more information.