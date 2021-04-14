from django.urls import path
from rest_framework import routers
from django.conf.urls import include
from .views import AlbumViewSet, ArtistViewSet, GenreViewSet, UserViewSet, current_user
# from .views import UserList   === for testing purposes ===

router = routers.DefaultRouter()
router.register('albums', AlbumViewSet)
router.register('artists', ArtistViewSet)
router.register('genres', GenreViewSet)
### testing users fetched data
router.register('users', UserViewSet)


urlpatterns = [
    path('', include(router.urls)),
    ## current_user out of router due to baseName/querySet requirement
    path('current_user/', current_user),
]


