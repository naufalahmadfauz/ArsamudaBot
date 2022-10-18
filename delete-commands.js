const { REST, SlashCommandBuilder, Routes } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const dotenv = require('dotenv')
dotenv.config()

const clientId = process.env.clientId;
const guildId = process.env.guildId;
const token = process.env.token;

const commands = [];
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(token);


// for guild-based commands
rest.delete(Routes.applicationGuildCommand(clientId, guildId, '1031858276805132309'))
    .then(() => console.log('Successfully deleted guild command'))
    .catch(console.error);

// for global commands
// rest.delete(Routes.applicationCommand(clientId, '1030869336803516448'))
//     .then(() => console.log('Successfully deleted application command'))
//     .catch(console.error);
