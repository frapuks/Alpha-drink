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

review: reviewId, name, date, content
rate, 0N drink, 11 review
drink : drinkId, name, maker, infos, starsCounter, isAlcool, isAvailable
belongs, 11 drink, 0N category
category : categoryId, name
```

![MCD](3-MCD.png)

## MLD

```
category (_id_, name)
drink (_id_, name, maker, infos, starsCounter, isAlcool, isAvailable, #category_id)
review (_id_, name, date, content, #drink_id, #user_id)
role (_id_, name)
user (_id_, firstname, lastname, email, password, #role_id)
```

[=> code MLD](../scripts/dbCreate.sql)

## MPD

Ajouté depuis la création MCD/MLD :
- averageRate : Note moyenne des commentaires

=> voir le fichier script : [dbCreateTables.sql](../scripts/dbCreateTables.sql)

[Précédent](3-Use-cases.md) | [Accueil](0-Sommaire.md) | [Suivant](5-Mood-Board.md)