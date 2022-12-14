BEGIN;

INSERT INTO role (name) VALUES
    ('admin'),  --1
    ('member'); --2
INSERT INTO category (name) VALUES
    ('divers'),     --1
    ('soft'),       --2
    ('biere'),      --3
    ('vin'),        --4
    ('coktail'),    --5
    ('spiritueux'); --6

INSERT INTO drink (name, maker, infos, isalcool, category_id) VALUES
    -- Bières
    ('Kronenbourg', 'Brasserie Kronenbourg', 'Bière juste bonne pour le picon', true, 3),              --1
    ('Desperados', 'Brasserie Heineken', 'Bière aromatisé Tequila', true, 3),                          --2
    ('Triple Karmeliet', 'Brasserie Boosteels', 'Bière belge, une des meilleures', true, 3),           --3
    ('Meteor Blanche', 'Brasserie Meteor', 'Bière blanche alsacienne', true, 3),                       --4
    ('Queen Of Langstross', 'Brasserie Bendorf', 'Bière de strasbourg, une des meilleures', true, 3),  --5
    ('Picon', 'Moët Henessy Diageo', 'Le fameux Picon bière de chez nous', true, 3),                   --6
    ('Amer Mandarine', 'Wolfberger', 'Une bonne alternative au Picon', true, 3),                       --7
    -- Softs
    ('Ice Tea', 'Ice Tea', 'Soda Gout pêche', false, 2),                                               --8
    ('Eau', 'Colmarienne des eaux', 'Si t''es gentil on te la passe au filtre', false, 2),             --9
    ('Sirops', 'La maison Guiot', 'mûre/cassis, violette, menthe, fruits de la passion', false, 2),    --10
    -- Rhums
    ('Demon''s Share', 'Demon''s Share', 'Provenance Panama', true, 6),                                --11
    ('Dictador', 'Dictador', 'Provenance Colombie', true, 6),                                          --12
    -- Gin
    ('Gin classic', 'Edinburgh Gin', 'Provenance Edimbourg', true, 6),                                 --13
    ('Gin Rhubarb/Ginger', 'Edinburgh Gin', 'Provenance Edimbourg', true, 6),                          --14
    -- Spiritueux divers
    ('Liqueur Mangue/Ananas/Coco', 'Clement', 'Liqueur aux fruits', true, 6),                          --15
    ('Baileys', 'Baileys and Co', 'Crême de whisky', true, 6),                                         --16
    ('Baileys Caramel', 'Baileys and Co', 'Crême de whisky aromatisé caramel', true, 6),               --17
    ('Vodka', 'Absolut', 'Vodka classique', true, 6),                                                  --18
    ('Get27', 'Bacardi-Martini', 'Liqueur de menthe', true, 6),                                        --19
    ('Jack Daniels', 'Jack Daniels', 'Whisky juste bon à tremper dans du coca', true, 6),              --20
    -- Coctails
    ('Gin tonic', 'Edinburgh Gin', 'Gin au choix', true, 5),                                           --21
    -- Divers
    ('Pastis', 'Meyer''s', 'Pastis Alsacien', true, 1),                                                --22
    ('Kir pain d''épice', 'Meyer''s', 'Avec vin blanc ou champagne', true, 1);                         --23

INSERT INTO review (name, date, content, rate, drink_id) VALUES
    ('Francois', '2022-12-12', 'A vos risques et perils', 1, 1),
    ('Francois', '2022-12-12', 'Un incontournable depuis qu''on a 15 ans', 3, 2),
    ('Francois', '2022-12-12', 'Certainement une des meilleurs bières au monde', 5, 3),
    ('Karen', '2022-12-14', 'On a rien inventé de meilleur', 5, 9),
    ('Karen', '2022-12-14', 'Trop sucré', 1, 8),
    ('Karen', '2022-12-14', 'bon mais un peu écœurant à la longue', 3, 2),
    ('Karen', '2022-12-14', 'très bonne bière pour ceux qui aiment la bière avec un goût prononcé', 4, 3),
    ('Karen', '2022-12-14', 'Goût sympa pour donner un peu de pep’s à la bière mais un peu trop sucré', 3, 6),
    ('Morgane', '2022-12-14', 'Glou glou', 4, 9),
    ('Morgane', '2022-12-14', 'Glou glou premium', 5, 10),
    ('Morgane', '2022-12-14', 'Top pour un apéro bien frais', 4, 2),
    ('Morgane', '2022-12-14', 'Ice Ice Baby', 3, 8),
    ('Zed', '2022-12-14', 'l''eau, c’est la vie, il n’y a pas d’autre boisson qui l''égale', 5, 8),
    ('Zed', '2022-12-14', 'j''aime bien le sirop de Grenadine avec de l’eau gazeuse, mais il ne faut pas abuser trop sucré', 3, 10),
    ('Zed', '2022-12-14', 'les ados en raffole, mais c’est sucré et contient des additifs', 2, 8),
    ('Floriane', '2022-12-14', 'Rien de mieux !', 5, 9),
    ('Floriane', '2022-12-14', 'Beaucoup de sucre, pas beaucoup de thé, pas super', 2, 8),
    ('Floriane', '2022-12-14', 'Grande préférence pour le mûre/cassis  Rafraichissant bien que sucré, donne du peps à l''eau', 4, 10),
    ('Floriane', '2022-12-14', 'Une de temps en temps. Devient vite écœurant !', 3, 2),
    ('Floriane', '2022-12-14', 'Ca c''est une vrai bière  !', 4, 3),
    ('Marwane', '2022-12-14', 'meilleure boisson du monde :-P', 5, 9),
    ('Marwane', '2022-12-14', 'Bon ,mais trop sucré...', 3, 8),
    ('Ronald', '2022-12-14', 'On y pense rarement et pourtant tellement important', 5, 9),
    ('Ronald', '2022-12-14', 'Gout menthe : Après une bonne balade sous 35 degré, rien de mieux', 4, 10),
    ('Ronald', '2022-12-14', 'fruit de la passion oui, mais pas en sirop', 3, 10),
    ('Ronald', '2022-12-14', 'Trop de sucre, et trompeur', 3, 8),
    ('Ronald', '2022-12-14', 'si jamais goûté, alors pas ouf ahah', 1, 6)
    -- Ajouter des commentaires
    ;

COMMIT;