from django.shortcuts import render

def main(request):
    return render(request, 'portafolio/main.html', {})

def recetas(request):
    return render(request,'portafolio/recetas.html')

def elahorcado(request):
    return render(request,'portafolio/juego-del-colgado.html')

def quizzes(request):
    return render(request,'portafolio/quizzes.html')