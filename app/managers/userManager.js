import * as MailComposer from 'expo-mail-composer'
export const sendMessage = async (name, email, message) => {
  const isAvailable = await MailComposer.isAvailableAsync()
  if (isAvailable) {
    await MailComposer.composeAsync({
      recipients: ['gamelands.studios@gmail.com'],
      subject: '🦷',
      body: `
      <strong>Message:</strong> "${message}" 
      <i>from ${name}, 
      ${email}</i>`,
      isHtml: true,
    })
  }
}
