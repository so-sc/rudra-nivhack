#

from twilio.rest import Client
from typing import Optional
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

from config import *

class Notify:
    def __init__(self):
        pass

    def sendMail(self, mail, subject, body):
        try:
            msg = MIMEMultipart()
            msg['From'] = EMAIL
            msg['To'] = mail
            msg['Subject'] = subject
            msg.attach(MIMEText(body, 'plain'))
            server = smtplib.SMTP('smtp.gmail.com', 587)
            server.starttls()
            server.login(EMAIL, PASS)
            server.sendmail(EMAIL, mail, msg.as_string())
            server.quit()
            print("Email sent successfully")
            return True
        except Exception:
            return False

    def sendSMS(self, ph, number, msg):
        try:
            client = Client(SID, AToken)
            # Send the SMS
            message = client.messages.create(
                body=msg,
                from_=ph,
                to=number
            )
            print(message, message.sid)
            return True
        except Exception as e:
            print(f"Error: {e}")
            return False
        

### ======== Test ======== ###


nfy = Notify()