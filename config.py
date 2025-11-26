import os


class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'apple-supply-chain-secret'
    SQLALCHEMY_DATABASE_URI = 'sqlite:///supplychain.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
