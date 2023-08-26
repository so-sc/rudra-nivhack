# Team Rudra - NivHack2023
# 


import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from config import *
import router.app_router as app_router
import router.sckt as sckt_router

app = FastAPI(
    title="Rudra",
    description="This project focuses on Logistics Management - Demand Forecasting and Inventory Management. We addressed it through our AI model.",
    version="0.0.1",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(app_router)
app.include_router(sckt_router, prefix="/")
if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)