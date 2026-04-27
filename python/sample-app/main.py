""" sample app using neuland hub sdk """

from fastapi import FastAPI
from routes import router

app = FastAPI(title="SDK Consumer")
app.include_router(router)
