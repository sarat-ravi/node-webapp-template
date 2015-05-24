'''
Created on Jan 18, 2015

@author: Sarat Tallamraju
'''

from pynance import util
import IPython

class Shell(object):
    
    def __init__(self):
        super(Shell, self).__init__()
        self._me = util.deserialize_me()
        self._session_started = False
        
    def start_session(self):
        if self._session_started:
            print "already in session"
            return
        
        print "starting session"
        self._session_started = True
        
        # state
        me = self._me
        save = self._save
        
        IPython.embed()

        print "session complete"
        self._session_started = False

    def _save(self):
        print "saving session ..."
        util.serialize_person(self._me)
        print "done saving session"