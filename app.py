from flask import Flask, request, jsonify
from firebase import firebase
from dog import Dog
import json
from flask_cors import CORS
from user import User

app = Flask(__name__)
firebase1 = firebase.FirebaseApplication('https://tinderdogs-998c1.firebaseio.com', authentication=None)
CORS(app)


@app.route("/create_user", methods=['POST'])
def create_user():
    response = {
        "code": 400,
        "type": 'create_user'
    }
    print request.get_data()
    user = User(json.loads(request.get_data()))

    if user:
        response['code'] = 200

    return str(response)


@app.route("/list_users")
def list_users():
    result = firebase1.get('/users', None)
    return str(result)


@app.route("/list_info_user/<id>")
def list_info_user(id):
    user = firebase1.get('/users/' + id, None)
    response = {
        "code": 400,
        "type": 'list_info_user' + id,
        "data": user
    }

    if user:
        response['code'] = 200

    return json.dumps(response)


@app.route("/list_info_dog/<id>")
def list_info_dog(id):
    user = firebase1.get('/users/' + id, None)
    response = {
        "code": 400,
        "type": 'list_info_user' + id,
        "data": user
    }

    if user:
        response['code'] = 200

    return json.dumps(response)


# @app.route("/list_my_dogs/<user_id>")
# def list_my_dogs(user_id):
#    User.list_my_dogs(user_id)

@app.route('/feed')
def feed():
    User.feed()
    return "ok"


@app.route("/list_dogs")
def list_dogs():
    response = {
        "code": "200",
        "type": "list_dogs",
        "data": User.find_dogs()
    }
    print response
    return jsonify(response)


@app.route("/create_dog", methods=['POST'])
def crete_dog():
    # print request.form.key
    dog = Dog(request)
    # firebase1.post("/dogs/", dog.__dict__)
    return str(dog.__dict__)


if __name__ == "__main__":
    app.run(host="0.0.0.0")
