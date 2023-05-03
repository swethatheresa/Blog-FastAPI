from fastapi import APIRouter, Body, Request, Response, HTTPException, status
from fastapi.encoders import jsonable_encoder

from models import Blog, BlogUpdate

router = APIRouter()

@router.post('/',response_description='Create a new blog',status_code=status.HTTP_201_CREATED,response_model=Blog)
def create_blog(request : Request,blog : Blog = Body(...)):
    blog = jsonable_encoder(blog)
    new_blog = request.app.database["blogs"].insert_one(blog)
    created_blog = request.app.database["blogs"].find_one(
        { "_id": new_blog.inserted_id}
    )
    return created_blog

@router.get("/", response_description="List all blogs", response_model=list[Blog])
def list_blogs(request: Request):
    all_blogs = list(request.app.database["blogs"].find())
    return all_blogs

@router.get("/{id}", response_description="Get a single blog by id", response_model=Blog)
def find_blog(id: str, request: Request):
    if (blog := request.app.database["blogs"].find_one({"_id": id})) is not None:
        return blog

    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Blog with ID {id} not found")

@router.put("/{id}", response_description="Update a blog", response_model=Blog)
def update_blog(id: str, request: Request, blog: BlogUpdate = Body(...)):
    blog = {k: v for k, v in blog.dict().items() if v is not None}

    if len(blog) >= 1:
        update_result = request.app.database["blogs"].update_one(
            {"_id": id}, {"$set": blog}
        )

        if update_result.modified_count == 0:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Blog with ID {id} not found")

    if (
        existing_blog := request.app.database["blogs"].find_one({"_id": id})
    ) is not None:
        return existing_blog

    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Blog with ID {id} not found")

@router.delete("/{id}", response_description="Delete a blog")
def delete_blog(id: str, request: Request, response: Response):
    delete_result = request.app.database["blogs"].delete_one({"_id": id})

    if delete_result.deleted_count == 1:
        response.status_code = status.HTTP_204_NO_CONTENT
        return response

    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Blog with ID {id} not found")
