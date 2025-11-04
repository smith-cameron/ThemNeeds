import time
from flask import Flask

app = Flask(__name__)

@app.route('/nudge/time')
def get_current_time():
    timestamp = time.time()
    # formatted = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(time.time()))
    return {'time': timestamp}
