const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('List of available commands'),
  async execute(interaction) {
    const commands = [
      { name: '/ping', description: 'Replies with Pong!' },
      { name: '/help', description: 'List of available commands' },
      { name: '/whois', description: 'Get info about a user' },
    ];

    const embed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle('📖 Help')
      .setDescription('Available commands:')
      .addFields(commands)
      .setTimestamp();

    await interaction.reply({ embeds: [embed], ephemeral: true });
  },
};