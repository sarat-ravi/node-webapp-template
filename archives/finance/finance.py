#!/usr/bin/env Python
'''
Created on Jan 18, 2015

@author: Sarat Tallamraju
'''

from pynance import util
from pynance.shell import Shell

def main():
    shell = Shell()
    shell.start_session()
    print "done"

if __name__ == "__main__":
    main()
