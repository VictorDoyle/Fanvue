# rest framework
from rest_framework import views, viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
# import mods
from .models import Artist, Genre, Album
from django.contrib.auth.models import User
from .serializers import AlbumSerializer, ArtistSerializer, GenreSerializer, UserSerializer

#######keep for testing 1st round to keep
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
#######

class AlbumViewSet(viewsets.ModelViewSet):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer

class GenreViewSet(viewsets.ModelViewSet):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer

class ArtistViewSet(viewsets.ModelViewSet):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer
