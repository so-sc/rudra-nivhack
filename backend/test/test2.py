import os
import csv
import random
from datetime import datetime, timedelta

# Constants
num_files = 10000
categories = ["Clothing", "Footwear", "Accessories"]
products = {
    "Clothing": ["Shirt", "Dress", "Trousers", "Sari", "Kurta"],
    "Footwear": ["Shoes", "Sandals", "Sneakers", "Boots"],
    "Accessories": ["Bags", "Hats", "Jewelry", "Belts"]
}

# Create a directory to store CSV files if it doesn't exist
if not os.path.exists('csv_files'):
    os.makedirs('csv_files')

# Write data to a CSV file
filename = f'csv_files/file.csv'
# Generate and save CSV files
for i in range(num_files):
    # Generate data for a CSV file
    pincode = random.randint(100000, 999999)
    festival_date = datetime(2023, 10, 1) + timedelta(days=random.randint(0, 60))
    category = random.choice(categories)
    product = random.choice(products[category])
    # Create CSV data
    data = [[pincode, festival_date.strftime('%Y-%m-%d'), category, product]]
    with open(filename, 'w', newline='') as file:
        csv_writer = csv.writer(file)
        csv_writer.writerow(['Pincode', 'Date', 'Category', 'Product'])
        csv_writer.writerows(data)
        file.close()
