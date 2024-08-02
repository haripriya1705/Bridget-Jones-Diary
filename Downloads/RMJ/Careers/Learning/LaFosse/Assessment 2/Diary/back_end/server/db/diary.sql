DROP TABLE IF EXISTS userResgistration;
DROP TABLE IF EXISTS userEntry;
DROP TABLE IF EXISTS userDetail;



CREATE TABLE userDetail ( 
    user_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_name VARCHAR (255) NOT NULL,     
    password VARCHAR (25) NOT NULL
);
CREATE TABLE userEntry ( 
    content_id INT GENERATED ALWAYS AS IDENTITY,
    date DATE NOT NULL,     
    contents VARCHAR (500),
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES userDetail(user_id) 
);
CREATE TABLE userResgistration ( 
    registration_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    email VARCHAR(255) NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    phone_number VARCHAR(15) CHECK (phone_number ~ '^[0-9]+$'),
    postcode VARCHAR(8) NOT NULL CHECK (postcode ~ '^[A-Z]{1,2}[0-9R][0-9A-Z]? ?[0-9][A-Z]{2}$'),
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES userDetail(user_id) 
);

INSERT INTO userDetail (user_name, password)
VALUES
  ('Archana', 'test123'),
  ('Reebu', 'test123');

INSERT INTO userEntry (date, contents,user_id)
VALUES
  ('2024-08-02', 'Life has been a swirl.I am having fun at the academy',1),
  ('2024-08-02', 'There is a lot of pressure but we are learning a lot',2);

INSERT INTO userResgistration (email, phone_number, postcode, user_id)
VALUES
  ('abc@gmail.com', '123456789', 'RG67AG', 1),
  ('def@gmail.com', '123456789', 'RG67AG',2);