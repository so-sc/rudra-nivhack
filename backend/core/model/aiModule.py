import joblib
import pandas as pd

def model(category: str, place: str, date1: str):
    """
    :param 
        category: iphone, kurtha
        place: mumbai, bangalore
        date1: Use date in yyyy-mm-dd (string) format
    :return: print
    """
    mod = f"./{category.lower()}_{place.lower()}.pkl"
    print(mod)
    loaded_model = joblib.load(mod)
    input_date = pd.to_datetime(date1)
    input_year = input_date.year
    input_month = input_date.month
    input_day = input_date.day
    input_data = pd.DataFrame({'Year': [input_year], 'Month': [input_month], 'Day': [input_day]})
    predicted_sales = loaded_model.predict(input_data)
    print(f"Predicted {category} sales for {input_date}: {round(predicted_sales[0])}")

# model("kurtha", "mumbai", "2023-08-27")
