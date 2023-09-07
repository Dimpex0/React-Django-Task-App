from django.urls import path
from .views import TaskListAPI, TaskCreateAPI, TaskUpdateAPI, TaskDeleteAPI


urlpatterns = [
    path("", TaskListAPI.as_view()),
    path("create/", TaskCreateAPI.as_view()),
    path("update/<int:pk>/", TaskUpdateAPI.as_view()),
    path("delete/<int:pk>/", TaskDeleteAPI.as_view()),
]
