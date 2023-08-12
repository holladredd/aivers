from django.urls import path

from . import views

urlpatterns = [
        #Leave as empty string for base url
	path('', views.homepage, name="homepage"),
	path('cart/', views.cart, name="cart"),
	path('checkout/', views.checkout, name="checkout"),
    path('index/', views.index, name="index"),
	path('details/', views.details, name="details"),
    path('login/', views.login, name="login"),
	path('signup/', views.signup, name="signup"),
	path('aicart/', views.aicart, name="aicart"),


]