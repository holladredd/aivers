from django.shortcuts import render


# Create your views here.
def homepage(request):
      context = {}
      return render(request, 'store/homepage.html', context)

def index(request):

     context = {}
     return render(request, 'store/index.html', context)

def cart(request):
     context = {}
     return render(request, 'store/cart.html', context)

def checkout(request):
      context = {}
      return render(request, 'store/checkout.html', context)

def details(request):
      context = {}
      return render(request, 'store/details.html', context)

def aicart(request):
      context = {}
      return render(request, 'store/aicart.html', context)

def login(request):
      context = {}
      return render(request, 'store/login.html', context)

def signup(request):
      context = {}
      return render(request, 'store/signup.html', context)

      
