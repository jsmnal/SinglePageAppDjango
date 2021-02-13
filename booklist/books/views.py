from django.shortcuts import render
from .models import Book

def index(request):
    book_list = Book.objects.order_by("title")
    context = {
        "book_list": book_list,
    }
    return render(request, "index.html", context)
