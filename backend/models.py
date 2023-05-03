import uuid
from pydantic import BaseModel,Field

class Blog(BaseModel): 
    id: str = Field(default_factory=uuid.uuid4, alias="_id")
    title: str = Field(...)
    author: str = Field(...)
    body: str = Field(...)
    
    class Config:
        allow_population_by_field_name = True
        schema_extra = {
            "example": {
                "_id": "066de609-b04a-4b30-b46c-32537c7f1f6e",
                "title": "Introduction to FastAPI",
                "author": "Joe Paul",
                "body": "..."
            }
        }

class BlogUpdate(BaseModel):
    title : str | None
    author : str | None
    body : str | None

    class Config: 
        scheme_extra = {
            "example" : {
                "title" : "Introduction to FastAPI",
                "author": "Joe Paul",
                "body": "..."
            }
        }
