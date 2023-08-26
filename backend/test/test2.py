import os
import csv
import random
from datetime import datetime, timedelta

# Define constants
num_files = 10000
start_date = datetime(2022, 1, 1)
categories = ["Men's Fashion", "Women's Fashion", "Kid's Fashion"]
products = ["T-shirt", "Jeans", "Dress", "Saree", "Kurta", "Shoes", "Sweater", "Accessories"]

if not os.path.exists("./backend/test/dataset"):
    os.makedirs("backend/test/dataset")

filename = f"backend/test/dataset/data.csv"
for i in range(num_files):
    
    with open(filename, mode='w', newline='') as file:
        writer = csv.writer(file)
        
        # Write header
        writer.writerow(['Pincode', 'Date', 'Category', 'Product', 'No product'])
        i = 0
        current_date = start_date
        while i< num_files:
            pincode = random.randint(560001, 591346)
            category = random.choice(categories)
            product = random.choice(products)
            nproducts = random.randint(0, 1000) + (random.randint(0, 200) if current_date.month in [1, 11, 12] else 0)
            writer.writerow([pincode, current_date.strftime('%Y-%m-%d'), category, product, nproducts])
            i+=1
            current_date += timedelta(days=random.randint(1, 365))

print("CSV files generated successfully.")
