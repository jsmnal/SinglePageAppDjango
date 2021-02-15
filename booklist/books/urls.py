from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"), 
    path("create/", views.CreateBookForm.as_view(), name="add_book"),
    path("update/<pk>/", views.UpdateBookForm.as_view(), name="update_book"),
    path("delete/<pk>/", views.DeleteBookForm.as_view(), name="delete_book"),
    ]