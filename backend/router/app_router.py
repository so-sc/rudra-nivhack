
# Team Rudra - 2023 (c)

from fastapi import APIRouter, UploadFile, Request
from fastapi.responses import JSONResponse
from datetime import datetime, timedelta
from config import *

from core.model.aiModule import aiModel

router = APIRouter()


@router.post("/category-prediction")
async def catPridiction(city: str, date: str):
    try:
        inp = "%d-%m-%Y"
        out = "%Y-%m-%d"
        date = (datetime.strptime(date, inp)).strftime(out)
        rs = {}
        rs['success'] = True
        rs['city'] = city
        rs["date"] = date
        rs["products"] = []
        for i in cat:
            rs["products"].append({
                "name": i,
                "quantity": await aiModel(i, city, date)
            })
        return JSONResponse(rs, status_code=200)
    except Exception as e:
        return JSONResponse({'success': False, 'error': str(e)}, status_code=404)

@router.post("/days-predictions")
async def rangeOfPridiction(city: str, date: str, days: int):
    try:
        if days > 30:
            return JSONResponse({'success': False, 'error': "Unable to provide you data for more than 30 days."}, status_code=504)
    
        inp = "%d-%m-%Y"
        out = "%Y-%m-%d"
        date1 = datetime.strptime((datetime.strptime(date, inp)).strftime(out), out)
        a = []
        for i in range(days):
            rs = {}
            rs["date"] = (date1+timedelta(days=i)).strftime(out)
            rs["products"] = []
            for j in cat:
                rs["products"].append({
                    "name": j,
                    "quantity": await aiModel(j, city, (date1+timedelta(days=i)).strftime(out))
                })
            a.append(rs)
        return JSONResponse({'success': True, 'city': city, 'data': a}, status_code=200)
    except Exception as e:
        return JSONResponse({'success': False, 'error': str(e)}, status_code=404)


