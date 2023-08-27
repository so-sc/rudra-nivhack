import joblib
import pandas as pd


model_filename = 'Put your model file here'
loaded_model = joblib.load(model_filename)


input_date = pd.to_datetime('YYYY-MM-DD')
input_year = input_date.year
input_month = input_date.month
input_day = input_date.day

input_data = pd.DataFrame({'Year': [input_year], 'Month': [input_month], 'Day': [input_day]})


predicted_sales = loaded_model.predict(input_data)

print(f"Predicted  sales for {input_date}: {predicted_sales[0]}")