import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error, r2_score
import matplotlib.pyplot as plt


def trainer(file_name: str):
    try:
        data = pd.read_csv(file_name)
        data['Date'] = pd.to_datetime(data['Date'])
        data['Year'] = data['Date'].dt.year
        data['Month'] = data['Date'].dt.month
        data['Day'] = data['Date'].dt.day

        X = data[['Year', 'Month', 'Day']]
        y = data['Sales']

        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

        model = RandomForestRegressor(random_state=42)
        model.fit(X_train, y_train)
        y_pred = model.predict(X_test)
        rmse = np.sqrt(mean_squared_error(y_test, y_pred))
        r2 = r2_score(y_test, y_pred)

        print(f'Root Mean Squared Error (RMSE): {rmse}')
        print(f'R-squared (R2): {r2}')
        return True
    except Exception:
        return False

    # subset = 100  # Change this value as needed
    # plt.figure(figsize=(12, 6))
    # plt.plot(data.index[:subset], y[:subset], label='Actual', marker='o')
    # plt.plot(data.index[:subset], model.predict(X)[:subset], label='Predicted', linestyle='--', color='red', marker='o')
    # plt.title('Actual vs. PredictedSales')
    # plt.xlabel('Date Index')
    # plt.ylabel('Sales')
    # plt.legend()
    # plt.grid(True)
    # plt.show()