from config import fb


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
