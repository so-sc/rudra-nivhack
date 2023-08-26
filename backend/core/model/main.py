import joblib
import pandas as pd

def iphone_bangalore(date1):
 """
 :param date1:you must pass date in yyyy-mm-dd (string)

 :return: print
 """
 model_filename = 'iphone_bangalore.pkl'
 loaded_model = joblib.load(model_filename)
 input_date = pd.to_datetime(date1)
 input_year = input_date.year
 input_month = input_date.month
 input_day = input_date.day
 input_data = pd.DataFrame({'Year': [input_year], 'Month': [input_month], 'Day': [input_day]})
 predicted_sales = loaded_model.predict(input_data)
 print(f"Predicted iPhone sales for {input_date}: {predicted_sales[0]}")
#yyyy-mm-dd
def iphone_mumbai(date1):
 """
 :param date1:you must pass date in yyyy-mm-dd (string)

 :return: print
 """
 model_filename = 'iphone_mumbai.pkl'
 loaded_model = joblib.load(model_filename)
 input_date = pd.to_datetime(date1)
 input_year = input_date.year
 input_month = input_date.month
 input_day = input_date.day
 input_data = pd.DataFrame({'Year': [input_year], 'Month': [input_month], 'Day': [input_day]})
 predicted_sales = loaded_model.predict(input_data)
 print(f"Predicted iPhone sales for {input_date}: {predicted_sales[0]}")

def kurtha_bangalore(date1):
 """
  :param date1:you must pass date in yyyy-mm-dd (string)

  :return: print
  """
 model_filename = 'kurtha_bangalore.pkl'
 loaded_model = joblib.load(model_filename)
 input_date = pd.to_datetime(date1)
 input_year = input_date.year
 input_month = input_date.month
 input_day = input_date.day
 input_data = pd.DataFrame({'Year': [input_year], 'Month': [input_month], 'Day': [input_day]})
 predicted_sales = loaded_model.predict(input_data)
 print(f"Predicted kurtha sales for {input_date}: {predicted_sales[0]}")

def kurtha_mumbai(date1):
 """
  :param date1:you must pass date in yyyy-mm-dd (string)

  :return: print
  """
 model_filename = 'kurtha_mumbai.pkl'
 loaded_model = joblib.load(model_filename)
 input_date = pd.to_datetime(date1)
 input_year = input_date.year
 input_month = input_date.month
 input_day = input_date.day
 input_data = pd.DataFrame({'Year': [input_year], 'Month': [input_month], 'Day': [input_day]})
 predicted_sales = loaded_model.predict(input_data)
 print(f"Predicted kurtha sales for {input_date}: {predicted_sales[0]}")


if __name__ == '__main__':

    place = input("Enter the region: ")
    date = input("Enter the date: ")

    if place == 'mumbai':
        kurtha_mumbai(date)
        iphone_mumbai(date)

    elif place == 'bangalore':
        kurtha_bangalore(date)
        iphone_bangalore(date)