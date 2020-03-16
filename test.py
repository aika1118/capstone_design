import requests
import time
import random
for i in range(10):
    value = random.randint(10,100)
    requests.get("https://api.thingspeak.com/update?api_key=UBVHB7HESWEUFLMW&field1=" + str(value))
    time.sleep(20)
