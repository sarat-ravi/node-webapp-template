'''
Created on Jan 20, 2015

@author: Sarat Tallamraju
'''
from peewee import *

"""
Fields:
-----------------------
CharField
TextField
DateTimeField
IntegerField   
BooleanField   
FloatField
DoubleField
BigIntegerField
DecimalField   
PrimaryKeyField
ForeignKeyField
DateField
TimeField
BlobField
"""

DB = SqliteDatabase('finance.sqlite')

class _Model(Model):
    class Meta:
        database = DB

class Person(_Model):
    first_name = CharField()
    income = IntegerField()

class Institution(_Model):
    pass

class Account(_Model):
    balance = FloatField()
        
class Security(_Model):
    market_value = FloatField()
    quantity = IntegerField()
        
class DebtSecurity(Security):
    pass

class Bond(DebtSecurity):
    coupon = FloatField()
    maturity = IntegerField()

class EquitySecurity(Security):
    pass
        
class PublicCommonShares(EquitySecurity):
    symbol = CharField()

class Action(_Model):
    pass

class SecurityTransaction(Action):
    """
        self.security = security
        self.value = value
        self.buyer_account = buyer_account
        self.seller_account = seller_account
    """
    security = ForeignKeyField(Security, related_name="security_transactions")

















    