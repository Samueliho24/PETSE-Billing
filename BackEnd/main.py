from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from BackEnd.db import engine, Base

app = FastAPI(title="MediBill API", description="Sistema de Facturación para PETSE")

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods
    allow_headers=["*"],  # Allow all headers
)

# Create tables
Base.metadata.create_all(bind=engine)



@app.get("/")
def health_check():
    return {"message": "Welcome to the Petse Billing API!", "status": "Backend online", "version": "1.0.0"}