DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS bathrooms;
DROP TABLE IF EXISTS users;

-- user table
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username TEXT,
    hashed_password TEXT,
    email VARCHAR(32)
);

INSERT INTO users (username, email)
VALUES
('RestroomRaxa', 'g2g@aol.com'),
('BidetBob', 'no_tp@hotmail.com'),
('WetWipeWilly', 'clogged_toilet@outlook.net');

-- bathrooms
CREATE TABLE bathrooms (
    bathroom_id SERIAL PRIMARY KEY,
    title TEXT,
    address TEXT,
    img TEXT
);

INSERT INTO bathrooms (title, address, img)
VALUES
('Tacobell on Main St', '123 W Main St, Disneyland, USA', 'https://i1.wp.com/www.disneytouristblog.com/wp-content/uploads/2016/08/disneyland-restrooms-bathrooms-bricker-010.jpg?ssl=1'),
('Poopsicle', '4545 S Sunset Blvd, Los Angeles, CA, 90245', 'https://live.staticflickr.com/3013/3040727422_a9c134bd13_b.jpg');

-- Reviews
CREATE TABLE reviews (
    review_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    bathroom_id INT REFERENCES bathrooms(bathroom_id),
    body TEXT,
    rating INT,
    img TEXT
);

INSERT INTO reviews (user_id, bathroom_id, body, rating)
VALUES
(1, 1, 'not bad. they gave me hot sauce at the door', 4),
(1, 2, 'if you are looking for adventure... this is the place', 0),
(3, 2, 'this is where I contracted hepatitis B', 5),
(2, 2, 'I also hapatitis here!', 2);