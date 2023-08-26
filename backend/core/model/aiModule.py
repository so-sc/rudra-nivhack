import joblib, os
import pandas as pd

async def aiModel(category: str, place: str, date1: str):
    """
    :param 
        category: iphone, kurtha
        place: mumbai, bangalore
        date1: Use date in yyyy-mm-dd (string) format
    :return: print
    """
    mod = f"core/model/{category.lower()}_{place.lower()}.pkl"
    loaded_model = joblib.load(mod)
    input_date = pd.to_datetime(date1)
    input_year = input_date.year
    input_month = input_date.month
    input_day = input_date.day
    input_data = pd.DataFrame({'Year': [input_year], 'Month': [input_month], 'Day': [input_day]})
    return int(loaded_model.predict(input_data))

# model("kurtha", "mumbai", "2023-08-27")
