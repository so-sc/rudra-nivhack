
# Team Rudra - 2023 (c)

from fastapi import APIRouter, UploadFile, Request
from fastapi.responses import JSONResponse
from datetime import datetime, timedelta
from config import *

from core.model.aiModule import aiModel

router = APIRouter()


@router.post("/category-prediction")
async def catPridiction(city: str, date: str):
    # try:
        inp = "%d-%m-%Y"
        out = "%Y-%m-%d"
        date = (datetime.strptime(date, inp)).strftime(out)
        rs = {}
        for i in cat:
            rs[i] = await aiModel(i, city, date)
        rs['success'] = 1
        return JSONResponse(rs, status_code=200)
    # except Exception as e:
    #     return JSONResponse({'success': 0, 'error': str(e)}, status_code=404)

@router.post("/days-predictions")
async def rangeOfPridiction(city: str, dates: str, day: int):
    # try:
        if day > 30:
            return JSONResponse({'success': 0, 'error': "Unable to provide you data for more than 30 days."}, status_code=504)
    
        inp = "%d-%m-%Y"
        out = "%Y-%m-%d"
        date1 = datetime.strptime((datetime.strptime(dates, inp)).strftime(out), out)
        rs = {}
        for i in range(day):
            rs[(date1+timedelta(days=i)).strftime(out)] = {}
            for j in cat:
                rs[(date1+timedelta(days=i)).strftime(out)][j] = await aiModel(j, city, (date1+timedelta(days=i)).strftime(out))
            rs['success'] = 1
        return JSONResponse(rs, status_code=200)
    # except Exception as e:
    #     return JSONResponse({'success': 0, 'error': str(e)}, status_code=404)
    

