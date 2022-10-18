const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('fun')
        .setDescription('For Fun!'),
    async execute(interaction) {
        const user = interaction.options.getUser('285800092441772043');
        await interaction.reply(`Hi, ${user},ngotax dong 2`);
        await interaction.followUp(`Hi, <@${user.id}>,ngotax dong`);
    },
};