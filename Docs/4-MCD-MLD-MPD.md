# 4 - MCD/MLD

## MCD

Le visuel du MCD a été réalisé sur le site [mocodo.net](https://www.mocodo.net/).
A noter que lors de la conception de la v1, il n'est pas prévu de création de compte pour les utilisateurs. La table `user` ne contiendra que le compte de l'admin.
Les `review` pourront être réalisées par les utilisateurs en remplissant un champ `name`, et n'auront donc pas de liens avec la table `user` (d'où la cardinalité 0,1) dans un premier temps.


```
:
write, 01 review, 0N user
user : userId, firstname, lastname, email, password
has, 11 user, 0N role
role : roleId, name

review: reviewId, name, date, content, rate
rate, 0N drink, 11 review
drink : drinkId, name, maker, infos, starsCounter, averageRate, stock, isAlcool, isAvailable
belongs, 11 drink, 0N category
category : categoryId, name
```

![MCD](images/MCD.png)

## MLD

```
category (_id_, name)
drink (_id_, name, maker, infos, starsCounter, averageRate ,stock, isAlcool, isAvailable, #category_id)
review (_id_, name, date, content, rate, #drink_id, #user_id)
role (_id_, name)
user (_id_, firstname, lastname, email, pwd, #role_id)
```

## MPD

```
%%mocodo
:::
user: userId, firstname, lastname, email, password, #roleId->role->roleId
:
role: roleId, name
:


:
review: reviewId, name, date, content, rate, #userId->user->userId, #drinkId->drink->drinkId
:
drink: drinkId, name, maker, infos, starsCounter, averageRate, stock, isAlcool, isAvailable, #categoryId->category->categoryId
:
category: categoryId, name
:
```

![MPD](images/MPD.png)

## Script

=> voir le fichier script : [dbCreateTables.sql](../scripts/dbCreateTables.sql)

[Précédent](3-Use-cases.md) | [Accueil](0-Sommaire.md) | [Suivant](5-Mood-Board.md)