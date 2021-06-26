let handler = async m => m.reply(`
 *GIT DE ESTE BOT*
https://github.com/ModerWarfer/DivaSBot

MY GIT:

https://github.com/ModerWarfer
😴                                       
`.trim()) 
handler.help = ['git']
handler.tags = ['info']
handler.command = /^git$/i

module.exports = handler

