from flask import Flask, request
from firebase import firebase
import uuid
from dog import Dog
import json


class Coordinates:
    longitude = 0
    latitude = 0


app = Flask(__name__)
firebase1 = firebase.FirebaseApplication('https://tinderdogs-998c1.firebaseio.com', authentication=None)


@app.route("/create_user", methods=['POST'])
def create_user():
    data = {'name': request.form.get('name'),
            'city': request.form.get('city'),
            'address': request.form.get('address'),
            'contact': request.form.get('contact'),
            'isBreeder': request.form.get('isBreeder'),
            'latitude': request.form.get('latitude'),
            'longitude': request.form.get('longitude')}

    firebase1.post("/users/", data)

    return str(uuid.uuid1())


@app.route("/list_users")
def list_users():
    result = firebase1.get('/users', None)
    return str(result)


@app.route("/list_info_user")
def list_info_user():
    pass


@app.route("/create_dog", methods=['POST'])
def crete_dog():
    dog = Dog("teste")
    firebase1.post("/dogs/", dog.__dict__)
    return dog.name


if __name__ == "__main__":
    app.run(host="0.0.0.0")
