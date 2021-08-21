import time
import requests
import os

dapr_port = os.getenv("DAPR_HTTP_PORT", 3500)
dapr_url = "http://localhost:{}/v1.0/invoke/myDapr/method/neworder".format(dapr_port)
print('################################################');
print('Python started');
print('################################################');

n = 0
while True:
    n+=1
    message = {"data": {"orderId": n}}

    try:
        response = requests.post(dapr_url, json=message, timeout=5)
        print(response)
    except Exception as e:
        print(e, flush=True)
    time.sleep(1)

