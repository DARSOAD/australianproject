from users.db.models.users import User
from users.db.schemas.users_schemas import user_schema,users_schema


def search_user(field:str,key):
    try:
        print(key)
        if key == 'diegoan@gmail.com':
            print('Es igual')
            user = {
                        "_id": "123abc",
                        "username": "john_doe",
                        "email": "john.doe@example.com"
                    }
        else:
            user='none'
        print(user)
        # user = db_client.users.find_one({field:key})
        return User(**user_schema(user))       
    
    except:
        return {"error":"No se ha encontrado usuario"} 