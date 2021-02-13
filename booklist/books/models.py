from django.db import models
from django.utils.text import slugify
from django.utils.translation import gettext as _

class Book(models.Model):
    title = models.CharField(_("title"), max_length=100)
    author = models.CharField(_("author"), max_length=100)
    description = models.CharField(_("description"), max_length=400)
    slug = models.SlugField(max_length=50)

    def __str__(self):
        return self.title
    
    
