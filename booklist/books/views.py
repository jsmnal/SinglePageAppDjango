from django.shortcuts import render
from .models import Book
from .forms import BookForm
from django.urls import reverse_lazy
from django.views.generic import CreateView, UpdateView, DeleteView

def index(request):
    book_list = Book.objects.order_by("title")
    context = {
        "book_list": book_list,
    }
    return render(request, "index.html", context)

class CreateBookForm(CreateView):
    model = Book
    form_class = BookForm
    template_name = "create.html"
    success_url = reverse_lazy("index")

class UpdateBookForm(UpdateView):
    model = Book
    form_class = BookForm
    template_name = "update.html"
    success_url = reverse_lazy("index")

class DeleteBookForm(DeleteView):
    model = Book
    form_class = BookForm
    template_name = "delete.html"
    success_url = reverse_lazy("index")
