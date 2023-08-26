


from fastapi import APIRouter, WebSocket, WebSocketDisconnect
from config import *
from core.utils.webSoc import CManagerNotify
router = APIRouter()

manager = CManagerNotify()

@router.websocket("/")
async def postfuc(websocket: WebSocket):
    await manager.connect(websocket)
    try:
        while True:
            # data = await websocket.receive_text()
            try:
                pass
                # value = int(data)
                # await manager.calculate_sum(value)
            except ValueError:
                await websocket.send_text("Invalid input.")
    except WebSocketDisconnect:
        manager.disconnect(websocket)
        await manager.update_sum_to_clients()
