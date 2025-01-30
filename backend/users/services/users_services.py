from users.db.models.users import User
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
