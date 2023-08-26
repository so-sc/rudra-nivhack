

from fastapi import WebSocket
from .notify import Notify
# from model import *

class CManagerNotify:
    def __init__(self):
        self.active_connections = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)

    async def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)

    # async def (self):
    #     self.