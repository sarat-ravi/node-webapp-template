'''
Created on Jan 18, 2015

@author: Sarat Tallamraju
'''

import jsonpickle
import os

PEOPLE_DIR = "people"
ME_FILENAME = "me.json"

def serialize_person(person):
    print "serializing {} ...".format(person)
    if person.me:
        filename = ME_FILENAME
    else:
        filename = "{}_{}.json".format(person.first_name.lower(), person.uid)
    _serialize_object_to_json(person, filename)
    

def deserialize_me():
    print "deserializing me"
    return _deserialize_object_from_json(ME_FILENAME)


def _deserialize_object_from_json(filename):
    filepath = os.path.join(PEOPLE_DIR, filename)
    with open(filepath, "r") as f:
        json_str = f.read()
        return jsonpickle.decode(json_str)
    
    
def _serialize_object_to_json(obj, filename):
    jsonpickle.set_encoder_options("json", sort_keys=True, indent=4)
    filepath = os.path.join(PEOPLE_DIR, filename)
    with open(filepath, "w") as f:
        json_obj = jsonpickle.encode(obj)
        f.write(json_obj)