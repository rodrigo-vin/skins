from django.urls import path
from .views import UserRegistrationAPIView

urlpatterns = [
    # Outras URLs
    path('register/', UserRegistrationAPIView.as_view(), name='user-registration'),
]