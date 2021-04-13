from django.db import models
# Create your models here.


class Artist(models.Model):
  name_of_artist = models.CharField(max_length=40)
  bio = models.TextField(max_length=300)
  artist_image = models.CharField(max_length=250)

  class Meta:
    def __init__(self, name_of_artist, bio, artist_image):
        self.name_of_artist = name_of_artist
        self.bio = bio
        self.artist_image = artist_image
    
    def __str__(self):
        return self.name_of_artist


    
class Genre(models.Model):
    title = models.CharField(max_length=20)
    description = models.TextField(max_length=300)

class Album(models.Model):
    title = models.CharField(max_length=30)
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE)
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE)
    album_image = models.CharField(max_length=250)

    def genreId(self):
        return self.genre.id

    def genreOfAlbum(self):
        return self.genre.title

    def nameOfArtist(self):
        return self.artist.name_of_artist

    def idOfArtist(self):
        return self.artist.id


