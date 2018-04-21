from flask import Flask, request
from firebase import firebase
import uuid
from dog import Dog
from user import User
import json


class Coordinates:
    longitude = 0
    latitude = 0


app = Flask(__name__)
firebase1 = firebase.FirebaseApplication('https://tinderdogs-998c1.firebaseio.com', authentication=None)


@app.route("/create_user", methods=['POST'])
def create_user():
    User(request)
    return "ok"


@app.route("/list_users")
def list_users():
    result = firebase1.get('/users', None)
    return str(result)


@app.route("/list_info_user/<id>")
def list_info_user(id):
    allusers = firebase1.get('/users', None)

    print type(allusers) is dict


@app.route("/list_my_dogs")
def list_my_dogs():
    User.find_my_dogs()
    return "ok"



@app.route("/create_dog", methods=['POST'])
def crete_dog():
    #print request.form.key
    dog = Dog(request)
    #firebase1.post("/dogs/", dog.__dict__)
    return str(dog.__dict__)


if __name__ == "__main__":
    app.run(host="0.0.0.0")
