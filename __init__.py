from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from os import path
from flask_login import LoginManager

db= SQLAlchemy()
DB_NAME="database.db"


def create_app():
    app=Flask(__name__)
    app.config['SECRET_KEY']='hjshjhdjah kjshkjdhjs'

    from .views import views
    from .auth import auth

    app.register_blueprint(views,url_prefix='/')
    app.register_blueprint(auth,url_prefix='/')
    
    return app