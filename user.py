from config import fb


class User:
    def __init__(self, r):
        self.name = r.form.get('name')
        self.latitude = r.form.get('latitude')
        self.latitude = r.form.get('latitude')
        self.city = r.form.get('city')
        self.contact = r.form.get('contact')
        self.isBreeder = r.form.get('isBreeder')
        fb.post("/users/", self.__dict__)

    @staticmethod
    def find_my_dogs():
        dogs = fb.get('/dogs', {"a": "a"})
        print dogs
        #for dog in dogs:
        #    print dogs[dog]