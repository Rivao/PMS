INSERT INTO [User](FirstName, LastName, Phone, [Password], Age, Country, Email, CreatedAt)
Values ('Raivo', 'Kokarevičs', 26247720, 'root', 22, 'Latvia', 'raivokok@inbox.lv', '2018-03-04');
INSERT INTO [User](FirstName, LastName, Phone, [Password], Age, Country, Email, CreatedAt)
Values ('Janis', 'Berzins', 23456545, 'root', 21, 'Latvia', 'jb@inbox.lv', '2018-03-04');
INSERT INTO [User](FirstName, LastName, Phone, [Password], Age, Country, Email, CreatedAt)
Values ('Karlis', 'Marx', 22222222, 'root', 53, 'Germany', 'km@inbox.lv', '2018-03-04');

INSERT INTO Company([Name], Subscription, MemberCount)
Values ('RKCorp', 3, 2);
INSERT INTO Company([Name], Subscription, MemberCount)
Values ('Communists', 0, 1);

INSERT INTO CompanyMember(UserID, CompanyID, [Role])
Values ('0', '0', 2);
INSERT INTO CompanyMember(UserID, CompanyID, [Role])
Values ('1', '0', 0);
INSERT INTO CompanyMember(UserID, CompanyID, [Role])
Values ('2', '1', 2);