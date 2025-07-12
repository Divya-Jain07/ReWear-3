from flask import Blueprint
views = Blueprint('views',__name__) #defining blueprint

@views.route('/')
def home():
    return "<h1>Hello, World!</h1>"     




