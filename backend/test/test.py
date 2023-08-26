
# from fastapi import APIRouter
# from config import *

# router = APIRouter()


# @router.post()
# async def postfuc():
#     pass

import asyncio, uvicorn
from fastapi import FastAPI, WebSocket, WebSocketDisconnect

app = FastAPI()

class ConnectionManager:
    def __init__(self):
        self.active_connections = []
        self.sum_value = 0

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)

    async def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)

    async def calculate_sum(self, value: int):
        self.sum_value += value
        await self.update_sum_to_clients()

    async def update_sum_to_clients(self):
        for connection in self.active_connections:
            await connection.send_text(f"Sum: {self.sum_value}")

manager = ConnectionManager()

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await manager.connect(websocket)
    try:
        while True:
            data = await websocket.receive_text()
            try:
                value = int(data)
                await manager.calculate_sum(value)
            except ValueError:
                await websocket.send_text("Invalid input. Please send an integer.")
    except WebSocketDisconnect:
        manager.disconnect(websocket)
        await manager.update_sum_to_clients()


if __name__ == "__main__":
    uvicorn.run("test:app", host="0.0.0.0", port=8000, reload=True)