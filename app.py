from flask import Flask, request
from firebase import firebase
import uuid
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

    result = firebase1.get('/users',None)
    return str(result)

@app.route("/list_info_user/<id>")
def list_info_user(id):

	allusers = firebase1.get('/users', None)

	print type(allusers) is dict


@app.route("/create_dog")
def crete_dog():
    return "ok"


if __name__ == "__main__":
    app.run(host="0.0.0.0")
