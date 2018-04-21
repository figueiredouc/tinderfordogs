from config import fb

class Dog:
    def __init__(self, r):
        self.name = r.form.get('name')
        self.breeder = r.form.get('breeder')
        self.owner = r.form.get('owner')
        self.gender = r.form.get('gender')
        self.birth_date = r.form.get('birth_date')
        self.land_of_birth = r.form.get('land_of_birth')
        self.land_of_standing = r.form.get('land_of_standing')
        self.size = r.form.get('size')
        self.weight = r.form.get('weight')
        self.color = r.form.get('color')
        self.titles = r.form.get('titles')
        self.features = r.form.get('features')
        fb.post("/dogs/", self.__dict__)

