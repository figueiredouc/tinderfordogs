from config import fb
import json
from flask import Flask, request, jsonify



class User:
    def __init__(self, msg):
        self.name = msg['name']
        self.username = msg['username']
        self.contact = msg['contact']
        self.address = msg['address']
        self.isBreeder = msg['isBreeder']
        self.latitude = msg['latitude']
        self.longitude = msg['longitude']
        print self.__dict__
        fb.post("/users/", self.__dict__)


    @staticmethod
    def find_dogs():
        dogs = fb.get('/dogs', None)
        return dogs
        # for dog in dogs:
        #    print dogs[dog]

    @staticmethod
    def list_my_dogs(user_id):
        dogs = User.find_dogs()

        response = {
        	"code": 400,
        	"type":'list_my_dogs/' + user_id,
        	"data": []
        }

        # {dog_id : dict for all the attributes}
        for dog in dogs:
        	
        	if dogs[dog]['owner'] == user_id:
        		response['data'].append(dogs[dog])

        if response['data']:
        	response['code'] = 200
        	
      	return jsonify(response)