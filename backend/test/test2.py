import os
import csv
import random
from datetime import datetime, timedelta

# Define constants
num_files = 20000
start_date = datetime(2022, 1, 1)
categories = ["Men's Fashion", "Women's Fashion", "Kid's Fashion"]
products = ["T-shirt", "Jeans", "Dress", "Saree", "Kurta", "Shoes", "Sweater", "Accessories"]

# Create a directory to store the CSV files
if not os.path.exists("./backend/test/dataset"):
    os.makedirs("backend/test/dataset")

filename = f"backend/test/dataset/data.csv"
# Generate CSV files
for i in range(num_files):
    
    with open(filename, mode='w', newline='') as file:
        writer = csv.writer(file)
        
        # Write header
        writer.writerow(['Pincode', 'Date', 'Category', 'Product'])
        i = 0
        while i< num_files:
            # Generate random data for each day in the year
            current_date = start_date
            pincode = random.randint(560001, 591346)
            category = random.choice(categories)
            product = random.choice(products)

            writer.writerow([pincode, current_date.strftime('%Y-%m-%d'), category, product])
            i+=1
            current_date += timedelta(days=random.randint(1, 365))

print("CSV files generated successfully.")
