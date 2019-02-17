import os
from sanic import Sanic
from sanic.response import json

app = Sanic()

@app.route("/")
async def test(request):
    return json({"hello": "world 22"})

if __name__ == "__main__":                
    debug_mode =  os.getenv('API_MODE', '') == 'dev'   

    app.run(
        host='0.0.0.0',
        port=8000,
        debug=debug_mode, 
        access_log=debug_mode, 
        auto_reload=debug_mode
    )