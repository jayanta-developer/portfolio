import axios from "axios";

const MailService = (senderName, senderEmail, subject, textPart) => {
  const apiKey =
    "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";
  const endpoint = "https://api.sendinblue.com/v3/smtp/email";

  const emailData = {
    sender: {
      name: senderName,
      email: senderEmail,
    },
    to: [
      {
        email: "jayantadey398@gmail.com",
        name: "Jayanta Dey",
      },
    ],
    subject,
    textPart,
    htmlContent: `<html><head></head><body><h2 style="text-align:center">Hello Jayanta</h2><h3 style="text-align:center">My name is ${senderName}</h3><h5 style="text-align:center">${subject}</h5><p>${textPart}</p></body></html>`,
  };

  axios
    .post(endpoint, emailData, {
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log("Email sent successfully:", response.data);
    })
    .catch((error) => {
      console.error("Failed to send email:", error);
    });
};

export default MailService;
