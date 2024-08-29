from django.db import models

class User(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    cpf = models.CharField(max_length=14)
    address = models.CharField(max_length=100)
    status = models.BooleanField()
    creation_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name