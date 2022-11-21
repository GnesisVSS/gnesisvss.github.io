from django.shortcuts import render

def main(request):
    return render(request, 'portafolio/main.html', {})

def tictactoe(request):
    return render(request,'portafolio/tic-tac-toe.html')

def elahorcado(request):
    return render(request,'portafolio/juego-del-colgado.html')

def quizzes(request):
    return render(request,'portafolio/quizzes.html')