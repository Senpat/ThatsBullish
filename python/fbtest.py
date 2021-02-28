import firebase_admin

from firebase_admin import db

import json

cred_obj = firebase_admin.credentials.Certificate('thatsbullish-15d47-firebase-adminsdk-a0q0p-09492f9905.json')
default_app = firebase_admin.initialize_app(cred_obj,{
    'databaseURL':'https://thatsbullish-15d47-default-rtdb.firebaseio.com'
})

ref = db.reference("stocks")

with open("addtest.json","r") as f:
    addtest = json.load(f)
ref.set(addtest)
