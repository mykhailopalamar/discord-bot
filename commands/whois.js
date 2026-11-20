const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('whois')
    .setDescription('Get info about a user')
    .addUserOption(option => option.setName('target').setDescription('User to get info about').setRequired(false)),
  async execute(interaction) {
    const target = interaction.options.getUser('target') || interaction.user;
    
    const embed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle(`👤 User Info: ${target.tag}`)
      .setThumbnail(target.displayAvatarURL({ dynamic: true }))
      .addFields(
        { name: 'ID', value: target.id, inline: true },
        { name: 'Created at', value: target.createdAt.toLocaleDateString(), inline: true },
        { name: 'Joined server', value: interaction.guild.members.cache.get(target.id)?.joinedAt?.toLocaleDateString() || 'N/A', inline: true }
      )
      .setTimestamp()
      .setFooter({ text: `Requested by ${interaction.user.tag}` });

    await interaction.reply({ embeds: [embed] });
  },
};