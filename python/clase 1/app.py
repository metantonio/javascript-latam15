#print("Hola mundo")

#Estructuras de Datos:
##numeros: enteros, flotantes
entero = 1
flotante = 1.5
#print(entero)
#print(flotante)

##strings
holaMundo = "Hola Mundo"
#print(holaMundo)

##arreglos (listas)
lista1 = [entero, flotante, holaMundo, "adiós"]
#print(lista1)

##tuplas
tupla1 = (entero, flotante, holaMundo, "adiós")
#print(tupla1)

##objetos (diccionarios en Python)
diccionario1 = {
    "nombre" : "Antonio",
    "edad": "70",
    "edad2": 70,
    "lista": [entero, flotante, holaMundo, "adiós"]
}
#print(diccionario1)

##booleanos
booleano1 = False
#print(booleano1)

##null (None en python)
none1 = None
#print(none1)

#Modificación de variables
entero = 2
holaMundo = "adiós Mundo!"
flotante = 3.1415

lista1[0]=5
lista1.append("Qué tal?") #es el equivalente del push
lista1.pop() #borra el último por default
lista1.pop(0)  #especifíco el índice a borrar
#print(entero, holaMundo, flotante)
#print(lista1)

#tupla1[0] = 35 #las tuplas son inmutables
##print(tupla1)
diccionario1["nombre"] = "David"
#print(diccionario1["nombre"], diccionario1["edad2"], diccionario1["lista"])

#Bucles
def bucleFor():
    for i in range(2,5):
        print(i)
    return i

lista1 = [entero, flotante, holaMundo, "adiós"]
def bucleLista1():
    print("Valor inicial lista1: ", lista1)
    print("qué es len(lista1): ", len(lista1))
    for i in range(len(lista1)):    ##### i<lista1.length
        print("dentro del for: ",  i, lista1[i])
    return

def bucleLista2():
    print("Valor inicial lista1: ", lista1)
    for item in lista1:
        print("dentro del for: ",  item)
    return

def bucleDiccionario():
    print("Valor inicial diccionario1: ", diccionario1)
    for key in diccionario1:
        print("keys: ",  key)
        print("value: ",  diccionario1[key])
    return

#resultado = bucleFor()
#print("resultado: ",resultado)
#bucleLista1()
#bucleLista2()
#bucleDiccionario()

#f-string (en javascript  `texto ${variable}` )
#print(f'Hola mundo, soy el valor entero: {entero}, y te muestro la lista: \n El valor de la lista: {lista1}')


print("""\n Menú Princial 
    Menú:

    1-. Ver reservaciones
    2-. Realizar Reservaciones
    3-. Borrar una reservación
    4-. Salir
 """)

opcionUsuario = int(input("\n Elige una opción del menú principal \n"))

while opcionUsuario<4:
    if(opcionUsuario==1):
        print("Se mostrará una lista para hacer reservaciones \n")
        opcionUsuario = int(input("\n Elige una opción del menú principal \n"))
    if(opcionUsuario>1 and opcionUsuario<4):
        print("Está entre las copiones 2 y 3")
        opcionUsuario = int(input("\n Elige una opción del menú principal \n"))
    if(opcionUsuario>=4):
        break