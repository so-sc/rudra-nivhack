#

from twilio.rest import Client
from typing import Optional

# Your Twilio Account SID and Auth Token
account_sid = 'your_account_sid'
auth_token = 'your_auth_token'

class Notify:
    def __init__(self, ph: Optional[str]):
        self.ph = ph

    def sendSMS(self, number, msg):
        try:
            client = Client(account_sid, auth_token)

            # Details for sending SMS
            message_body = 'Hello from Twilio! This is a test message.'

            # Send the SMS
            message = client.messages.create(
                body=message_body,
                from_=self.ph,
                to=number
            )
            return True
        except Exception as e:
            print(f"Error: {e}")
            return False
        

### ======== Test ======== ###


nfy = Notify()