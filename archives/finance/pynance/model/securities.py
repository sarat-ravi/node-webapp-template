'''
Created on Jan 18, 2015

@author: Sarat Tallamraju
'''

from money import Money

class Institution(object):
    '''
    Should be in pynance
    '''
    def __init__(self):
        super(Institution, self).__init__()


class Account(object):
    '''
    Should be in pynance.
    '''
    def __init__(self, owner, institution, value=0.0):
        super(Account, self).__init__()
        self.value = value
        
    def deposit(self, value):
        self.value += value
        
    def withdraw(self, value):
        if (value > self.value):
            raise Exception("can't withdraw more money")
        self.value -= value
        
class Action(object):
    def __init__(self):
        super(Action, self).__init__()

class SecurityTransaction(Action):
    '''
    Should be in pynance.action
    '''
    def __init__(self, security, value, buyer_account, seller_account):
        super(SecurityTransaction, self).__init__()

        self.security = security
        self.value = value
        self.buyer_account = buyer_account
        self.seller_account = seller_account
        
    def __repr__(self, *args, **kwargs):
        return "{} --> {} + {} --> {}".format(self.seller_account, self.value, self.security, self.buyer_account)
        
    
class Security(object):
    def __init__(self, market_value, quantity):
        super(Security, self).__init__()
        self.market_value = market_value
        self.quantity = quantity
        
class DebtSecurity(Security):
    def __init__(self, market_value, quantity):
        super(DebtSecurity, self).__init__(market_value, quantity)
        
class Bond(DebtSecurity):
    def __init__(self, market_value, coupon, maturity, quantity):
        super(DebtSecurity, self).__init__(market_value, quantity)
        self.coupon = coupon
        self.maturity = maturity

class EquitySecurity(Security):
    def __init__(self, market_value, quantity):
        super(EquitySecurity, self).__init__(market_value, quantity)
        
class PublicCommonShares(EquitySecurity):
    def __init__(self, symbol, quantity, market_value=0.0):
        super(PublicCommonShares, self).__init__(market_value, quantity)
        self.symbol = symbol