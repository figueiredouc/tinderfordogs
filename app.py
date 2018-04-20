from flask import Flask, request
from firebase import firebase
from flask_sqlalchemy import SQLAlchemy
import uuid
import json

app = Flask(__name__)
db = SQLAlchemy(app)
firebase1 = firebase.FirebaseApplication('https://tinderdogs-998c1.firebaseio.com', authentication=None)


@app.route("/create_user", methods=['POST'])
def create_user():

    data = {'name': request.form.get('name'), 'city': request.form.get('city')}
    firebase1.post("/users/", data)

    return str(uuid.uuid1())

@app.route("/list_users")
def list_users():

    result = firebase1.get('/users',None)
    return str(result.keys())


if __name__ == "__main__":
    app.run(host="0.0.0.0")
