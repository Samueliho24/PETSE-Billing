from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from .. import controller, schemas, getDb

router = APIRouter()

@router.post("/login")
def login(user: schemas.UserLogin, db: Session = Depends(getDb)):
    return controller.loginUser(db, user)

@router.post("/")
def create(user: schemas.UserCreate, db: Session = Depends(getDb)):
    return controller.createUser(db, user)

@router.patch("/status")
def status_change(user: schemas.UserStatusChange, db: Session = Depends(getDb)):
    return controller.statusChangeUser(db, user)

@router.get("/search")
def search(data: schemas.UserSearch, db: Session = Depends(getDb)):
    return controller.getUser(db, data)

@router.get("/")
def get_all(db: Session = Depends(getDb)):
    return controller.getUsers(db)