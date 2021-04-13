from rest_framework import serializers
from .models import Album, Genre, Artist
#unsure to keep
from django.contrib.auth.models import User

##### keep for first rounds of testing
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','username', 'password')
        extra_kwargs = {'password': {'write_only': True, 'required': True}}
#####

class ArtistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artist
        fields = ('id', 'name_of_artist', 'bio', 'artist_image') 

class AlbumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Album
        fields = ('id', 'nameOfArtist', 'idOfArtist', 'title', 'genreId', 'genreOfAlbum') 


class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = ('id', 'title', 'description') 

