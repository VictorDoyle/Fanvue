# base 
from django.http import HttpResponseRedirect
# rest framework
from rest_framework import permissions, status, viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
# import mods
from .models import Artist, Genre, Album
from django.contrib.auth.models import User
from .serializers import AlbumSerializer, ArtistSerializer, GenreSerializer, UserSerializer, UserSerializerWithToken

#######keep for testing 1st round to keep
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
#######


@api_view(['GET'])
def current_user(request):
    """
    Find current user via Token and return info for React
    """ 
    
    serializer = UserSerializer(request.user)
    return Response(serializer.data)

## verifying basics of data retrieval
class UserList(APIView):
    """
    Testing Register user outside of google for api quality/verifying tokens are set on signup
    """

    # AllowAny to enable users to register without need of login
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AlbumViewSet(viewsets.ModelViewSet):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer

class GenreViewSet(viewsets.ModelViewSet):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer

class ArtistViewSet(viewsets.ModelViewSet):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer
