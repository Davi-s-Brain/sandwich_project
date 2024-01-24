# Escolhe um sanduíche automáticamente

import os
from random import choice, randint

listaPaes = ['3 Queijos', 'Parmesão E orégano', '9 grãos', 'Italiano Branco']
listaQueijos = ['Cheddar', 'Suíço', 'Queijo Mussarela Ralada']
listaVegetais = ['Azeitonas', 'Picles', 'Pepinos',
                 'Pimentão', 'Alface', 'Cebola Roxa', 'Tomate', 'Rúcula']
listaMolhos = ['Cebola Agridoce', 'Chipotle', 'Barbecue',
               'Parmesão', 'Maionese Temperada', 'Mostarda E Mel', 'Supreme']

# Escolher a quantidade que quer no molho, ou deixar padrão

todasAsLista = listaPaes + listaQueijos + listaVegetais + listaMolhos


def remove_ingredientes():
    lista_temporaria = todasAsLista.copy()
    print(lista_temporaria, '\n')
    continuar = str(input("Deseja remover algum item? (S/N)"))
    itens_remover = ''

    if (continuar == 'S'):
        while continuar == 'S':
            itens_remover = str(input('Escolha 1 ingrediente para remover:'))
            contido = itens_remover in lista_temporaria

            if contido:
                lista_temporaria.remove(itens_remover)
            else:
                print("Este item não existe na lista")

            os.system("cls")
            os.system("clear")
            print(lista_temporaria)
            continuar = str(input('Deseja remover mais um? (S/N)'))

            if continuar == 'N':
                break

        return (os.system("cls"), os.system("clear"))

    else:
        return (os.system("cls"), os.system("clear"))


def escolhe_pao():
    pao = choice(listaPaes)
    return print(pao)


def escolhe_queijo():
    queijo = choice(listaQueijos)
    return print(queijo)


def escolhe_vegetais():
    vegetais = []

    seletorVegetias = str(
        input("Deseja escolher a quantidade de vegetais? (S/N) "))
    if seletorVegetias == 'S':
        quantidadeVegetais = int(input("Quantos vegetais você deseja? (1/4) "))
        for _ in range(quantidadeVegetais):
            escolhido = choice(listaVegetais)
            index_lista = listaVegetais.index(escolhido)
            vegetais.append(escolhido)
            listaVegetais.pop(index_lista)
    else:
        i = randint(2, 4)
        for _ in range(i):
            escolhido = choice(listaVegetais)
            index_lista = listaVegetais.index(escolhido)
            vegetais.append(escolhido)
            listaVegetais.pop(index_lista)

    return print(vegetais)


def escolhe_molhos():
    i = randint(2, 3)
    molho = []
    for _ in range(i):
        escolhido = choice(listaMolhos)
        index_lista = listaMolhos.index(escolhido)
        molho.append(escolhido)
        listaMolhos.pop(index_lista)

    return print(molho)


def monta_sanduba():
    escolhe_pao()
    escolhe_queijo()
    print('Recheio à vontade')
    escolhe_vegetais()
    escolhe_molhos()


remove_ingredientes()
monta_sanduba()
