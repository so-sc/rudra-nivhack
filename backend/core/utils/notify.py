#

from twilio.rest import Client
from typing import Optional
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

from config import *

class Notify:
    def __init__(self, ph: Optional[str]):
        self.ph = ph

    def sendMail(self, mail, msg):
        try:
            sender_email = "your_email@gmail.com"
            sender_password = "your_password"
            recipient_email = "recipient@example.com"
            subject = "Subject of the Email"
            message = "This is the body of the email."
            msg = MIMEMultipart()
            msg['From'] = sender_email
            msg['To'] = recipient_email
            msg['Subject'] = subject
            msg.attach(MIMEText(message, 'plain'))
            server = smtplib.SMTP('smtp.gmail.com', 587)
            server.starttls()
            server.login(sender_email, sender_password)
            server.sendmail(sender_email, recipient_email, msg.as_string())
            server.quit()

            print("Email sent successfully")
            return True
        except Exception:
            return False

    def sendSMS(self, number, msg):
        try:
            client = Client(SID, AToken)
            # Send the SMS
            message = client.messages.create(
                body=msg,
                from_=self.ph,
                to=number
            )
            return True
        except Exception as e:
            print(f"Error: {e}")
            return False
        

### ======== Test ======== ###


nfy = Notify()