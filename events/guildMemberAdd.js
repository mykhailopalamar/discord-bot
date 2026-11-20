const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'guildMemberAdd',
  once: false,
  async execute(member) {
    // Check if the new member is a bot
    if (member.user.bot) {
      console.log(`[${new Date().toISOString()}] Bot joined: ${member.user.tag}`);
      // Log to a logs channel - you can customize this
      try {
        const logsChannel = member.guild.channels.cache.find(
          ch => ch.name === 'bot-logs' && ch.isTextBased()
        );
        if (logsChannel) {
          await logsChannel.send(`⚠️ Bot joined the server: ${member.user.tag} (${member.user.id})`);
        }
      } catch (err) {
        console.error('Failed to send bot log:', err);
      }
      return; // Don't greet bots
    }

    // Greet real members
    const welcomeChannel = member.guild.channels.cache.find(
      ch => ch.name === 'welcome' && ch.isTextBased()
    );

    if (welcomeChannel) {
      const embed = new EmbedBuilder()
        .setColor(0x0099ff)
        .setTitle('👋 Welcome!')
        .setDescription(`Welcome to the server, ${member.user}!`)
        .setTimestamp()
        .setFooter({ text: 'Enjoy your stay!' });

      await welcomeChannel.send({ embeds: [embed] });
    } else {
      // Fallback: send a simple message
      await welcomeChannel.send(`Welcome to the server, ${member.user}!`);
    }

    console.log(`[${new Date().toISOString()}] New member joined: ${member.user.tag}`);
  },
};