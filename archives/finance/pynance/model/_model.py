'''
Created on Jan 18, 2015

@author: Sarat Tallamraju
'''

class _Model(object):
    def __init__(self):
        print "initializing model {}".format(self._get_name())
        
    def _get_name(self):
        return self.__class__.__name__
    