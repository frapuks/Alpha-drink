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
    ('Dictador', 'Dictador', 'Provenance Colombie', true, 6)                                           --12
    -- Ajouter le reste des boissons
    ;

INSERT INTO review (name, date, content, rate, drink_id) VALUES
    ('Francois', '2022-12-12', 'A vos risques et perils', 1, 1),
    ('Francois', '2022-12-12', 'Un incontournable depuis qu''on a 15 ans', 3, 2),
    ('Francois', '2022-12-12', 'Certainement une des meilleurs bières au monde', 5, 3)
    -- Ajouter des commentaires
    ;

INSERT INTO "user" (firstname, lastname, email, pwd, role_id) VALUES
    ('Francois', 'GRUNERT', 'francoisgrunert@gmail.com', 'pwd a définir', 1);

COMMIT;