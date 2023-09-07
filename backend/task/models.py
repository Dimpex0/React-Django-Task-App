from django.db import models

class Task(models.Model):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=2000)
    complete = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
