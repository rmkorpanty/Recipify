from flask import Flask, json,  jsonify,request
from flask_cors import CORS, cross_origin

import parsing

app = Flask(__name__)
CORS(app) #different origins

@app.route("/")
def hello():
    print('made hello request!')
    print('returning', json.dumps('helloo') )



@app.route('/syn', methods = ['POST'])
def synthesis():
    return parsing.parsing(request.get_json(force=True))

if __name__ == "__main__":
    app.run(debug=True)
