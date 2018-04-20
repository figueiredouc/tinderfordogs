from flask import Flask

app = Flask(__name__)


@app.route("/create_user/<name>")
def hello(name):
    # create user
    # insert na bd
    # retun json
    return "o utilizador " + name + " foi criado"


if __name__ == "__main__":
    app.run(host="0.0.0.0")
