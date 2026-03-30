from sqlalchemy import Column, Integer, String, Float, ForeignKey, DateTime, Numeric
from sqlalchemy.orm import relationship
from BackEnd import Base
import datetime

class ChangeHistory(Base):
    __tablename__ = "changehistory"

    id = Column(String, primary_key=True, index=True, nullable=False)
    userId = Column(String, ForeignKey("users.id"))
    comment = Column(String)
    dateChanged = Column(DateTime, default=datetime.datetime.utcnow)

    change_users = relationship("Users", back_populates="user_changes")

class Invoices(Base):
    __tablename__ = "invoices"

    id = Column(String, primary_key=True, index=True, nullable=False)
    userId = Column(String, ForeignKey("users.id"))
    studentId = Column(String, ForeignKey("students.id"))
    amount = Column(Numeric(20, 4))
    description = Column(String)
    dateInvoice = Column(DateTime, default=datetime.datetime.utcnow)
    status = Column(String, default="Deuda")

    invoice_students = relationship("Students", back_populates="student_invoices")
    invoice_users = relationship("Users", back_populates="user_invoices")
    invoice_payments = relationship("Payments", back_populates="payment_invoices")

class Payments(Base):

    __tablename__ = "payments"

    id = Column(String, primary_key=True, index=True, nullable=False)
    invoiceId = Column(String, ForeignKey("invoices.id"))
    paymentMethod = Column(String, nullable=False)
    exchangeRate = Column(Numeric(10, 4), nullable=False)
    amountUsd = Column(Numeric(20, 4))
    amountBs = Column(Numeric(20, 4), nullable=False)
    bankReference = Column(String)
    datePayment = Column(DateTime, default=datetime.datetime.utcnow, nullable=False)
    note = Column(String)

    payment_invoices = relationship("Invoices", back_populates="invoice_payments")

class Students(Base):
    __tablename__ = "students"

    id = Column(String, primary_key=True, index=True, nullable=False)
    name = Column(String)
    lastname = Column(String)
    identification = Column(Integer, unique=True)
    phone = Column(Integer)
    email = Column(String)
    address = Column(String)
    status = Column(String, default="Activo")
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    student_invoices = relationship("Invoices", back_populates="invoice_students")

class Users(Base):
    __tablename__ = "users"

    id = Column(String, primary_key=True, index=True, nullable=False)
    username = Column(String, unique=True)
    email = Column(String)
    password = Column(String)
    name = Column(String)
    identification = Column(Integer, unique=True)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    status = Column(String, default="Activo")

    user_invoices = relationship("Invoices", back_populates="invoice_users")
    user_changes = relationship("ChangeHistory", back_populates="change_users")
