# Sales Prediction Model

This model uses Random Forest Regression to predict sales based on previous year's data.

## Overview

Random Forest is an ensemble technique capable of performing both regression and classification tasks with the use of multiple decision trees and a technique called Bootstrap and Aggregation, commonly known as bagging[^1^][2]. In this model, we use Random Forest Regression to predict sales based on previous year's data.

## Requirements

- Python 3.x
- scikit-learn
- pandas
- numpy

## Usage

1. Install the required libraries by running `pip install scikit-learn pandas numpy`.
2. Load your data into a pandas DataFrame.
3. Split your data into training and testing sets.
4. Train the model using the `RandomForestRegressor` class from scikit-learn[^2^][1].
5. Use the trained model to make predictions on the testing set.
