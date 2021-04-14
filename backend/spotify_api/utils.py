from main_app.serializers import UserSerializer


def jwt_res_handler(token, user=None, request=None):
    return {
        'token': token,
        'user': UserSerializer(user, context={'request': request}).data
    }