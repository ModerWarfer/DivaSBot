let handler = function (m) {
  // this.sendContact(m.chat, '5492634358865', 'ModerWarfer66', m)
  this.sendContact(m.chat, '5492634358865', '👑ModerWarfer👑', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
