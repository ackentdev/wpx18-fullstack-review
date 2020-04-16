## crApp: a review site for public restrooms

</hr>

MVP
- users have personal accounts
- multiple listings, and multiple review for those listings
- bathrooms stored in db
- users can add new bathrooms to our db
- bathroom listings have pictures, addresses, and reviews
- users can leave comments
- users can edit comments/ratings
- users can remove comments

ICEBOX
- incorporate google maps API for restrooms
- users can save their favorite list of restrooms
- people who own restrooms can pay us money to falsify their reviews

### **DB**

- Tables (Schema)
    - users
    - bathrooms
    - reviews

```SQL
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username TEXT,
    hashed_password TEXT,
    email VARCHAR(32)
);
```

```SQL
CREATE TABLE bathrooms (
    bathroom_id SERIAL PRIMARY KEY,
    title TEXT,
    address TEXT,
    img TEXT
);
```

```SQL
CREATE TABLE reviews (
    review_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    bathroom_id INT REFERENCES bathrooms(bathroom_id),
    body TEXT,
    rating INT,
    img TEXT
);
```

### **Server**
dependencies:
- massive
- express
- dotenv
- express-session
- bcrypt

endpoints:

- authCtrl:
    - login: /auth/login
    - register: /auth/register
    - logout: /auth/logout
    - userSession: /auth/user_session

- bathroomCtrl:
    - (app.get) getBathrooms: /api/get_bathrooms
    - (app.post) postBathroom: /api/add_bathroom
    - (app.delete) deleteReview: /api/delete_review/:id
    - (app.put) editReview: /api/edit_review/:id
    - (app.post) addReview: /api/add_review

### **Client**
dependencies:
- axios
- redux
- react-redux
- redux-promise-middleware
- react-router-dom

file structure:
- src/
    - App.js
    - App.css
    - reset.css
    - index.js
    - components
        - Header.js/.css
        - Card.js/.css
        - ReviewForm.js/.css
        - Login.js/.css
        - Main.js/.css
    - redux
        - store
        - reducer

routes: 
- main: /
- login: /login
- bathroom: /bathroom/:id
- form: /form