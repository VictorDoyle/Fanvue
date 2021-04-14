from rest_framework import serializers
from .models import Album, Genre, Artist
#base user for jwt/api
from django.contrib.auth.models import User
# jwt set
from rest_framework_jwt.settings import api_settings

##### keep for first rounds of testing
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','username')
#####

#### User Serializer DIFFERENT from Base User --- this one contains JWT Info
class UserSerializerWithToken(serializers.ModelSerializer):

    token = serializers.SerializerMethodField()
    password = serializers.CharField(write_only=True)

    def get_token(self, obj):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(obj)
        token = jwt_encode_handler(payload)
        return token

    ## for signup if not using google (if asked for)
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    class Meta:
        model = User
        fields = ('token', 'username', 'password')

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

