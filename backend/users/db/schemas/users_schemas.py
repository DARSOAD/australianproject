<<<<<<< HEAD
import json

def user_schema(user) -> dict:
    return {
        "id": user["user_id"],  # Clave primaria (Partition Key)
        "preferences": json.loads(user["preferences"]) if "preferences" in user else None,
        "custom_attributes": json.loads(user["custom_attributes"]) if "custom_attributes" in user else None,
        "last_login": user["last_login"] if "last_login" in user else None
    }
=======
def user_schema(user) -> dict:
    return {"id":str(user["_id"]),
            "username":user["username"],
            "email":user["email"]}

def users_schema(users) -> dict:
    return [user_schema(user) for user in users]
>>>>>>> 533f135b1f8dcdb7df1eac80f73faeb614e29110
