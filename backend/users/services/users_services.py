from users.db.models.users import User
<<<<<<< HEAD
from users.db.schemas.users_schemas import user_schema
from users.db.schemas.client import db_client

# Referencia a la tabla Users
users_table = db_client.Table('Users')

def search_user(key):
    """
    Busca un usuario en la tabla Users.
    
    :param field: Nombre del campo (debe ser parte de la clave primaria o un índice secundario).
    :param key: Valor del campo a buscar.
    :return: Instancia de User si se encuentra, o un mensaje de error.
    """
    try:      
        response = users_table.get_item(Key={'user_id': key})
        user = response.get('Item')
        if user:
            return User(**user_schema(user))  # Transformar a modelo User
        else:
            return {"error": "No se ha encontrado usuario"}
        
    except Exception as e:
        return {"error": f"Error al buscar usuario: {str(e)}"}
=======
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
>>>>>>> 533f135b1f8dcdb7df1eac80f73faeb614e29110
