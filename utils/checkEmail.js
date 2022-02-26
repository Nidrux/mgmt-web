// TODO: Change this unsecure way later to an API GET-Request
export default function checkEmail(emailToCheck) {
  const allowedEmails = ["jackob.dev@gmail.com", "system@mezomnmt.com"];
  let emailsMatch = false;
  
  for (let i = 0; i < allowedEmails.length; i++) {
    if (emailToCheck === allowedEmails[i]) {
      emailsMatch = true;
    }
  }

  return emailsMatch;
}