'''
Created on Jan 18, 2015

@author: Sarat Tallamraju
'''

from pynance.model import _Model

class Person(_Model):
    
    me = None
    
    def __init__(self, first, middle, last, income=0, me=False):
        super(Person, self).__init__();
        
        self.uid = "1"
        self.first_name = first
        self.middle_name = middle
        self.last_name = last
        self.income = income

        self.me = False
        if me:
            self.set_as_me()
            
    def set_as_me(self):
        if Person.me:
            Person.me.me = False
            
        Person.me = self
        self.me = True
        
    def get_middle_initial(self):
        return self.middle_name[:1]
        
    def __repr__(self, *args, **kwargs):
        return "[{} {}. {}]".format(self.first_name, self.get_middle_initial(), self.last_name)
