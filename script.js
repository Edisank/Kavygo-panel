body {
    font-family: sans-serif;
    margin: 0;
    background-color: #f4f4f4;
    color: #333;
}

.dashboard-container {
    max-width: 1200px;
    margin: 20px auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

header {
    text-align: center;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
    margin-bottom: 20px;
}

nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;
}

nav ul li a {
    display: block;
    padding: 10px 15px;
    text-decoration: none;
    background-color: #007bff;
    color: white;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

nav ul li a:hover {
    background-color: #0056b3;
}

main section {
    margin-bottom: 30px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f9f9f9;
}

h2 {
    color: #333;
    margin-top: 0;
    border-bottom: 2px solid #ccc;
    padding-bottom: 10px;
    margin-bottom: 15px;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    padding: 10px;
    border-bottom: 1px solid #eee;
    text-align: left;
}

th {
    background-color: #f0f0f0;
}

button {
    padding: 8px 12px;
    margin-right: 5px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.editar-btn {
    background-color: #28a745;
    color: white;
}

.editar-btn:hover {
    background-color: #1e7e34;
}

.eliminar-btn {
    background-color: #dc3545;
    color: white;
}

.eliminar-btn:hover {
    background-color: #c82333;
}

#form-add-tecnico div, #form-editar-tecnico div {
    margin-bottom: 10px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

input[type="text"],
input[type="email"],
input[type="password"] {
    width: calc(100% - 12px);
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-bottom: 10px;
}

#form-add-tecnico button[type="submit"],
#form-editar-tecnico button[type="submit"] {
    background-color: #007bff;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    transition: background-color 0.3s ease;
}

#form-add-tecnico button[type="submit"]:hover,
#form-editar-tecnico button[type="submit"]:hover {
    background-color: #0056b3;
}

.back-button {
    display: inline-block;
    padding: 8px 12px;
    text-decoration: none;
    background-color: #6c757d;
    color: white;
    border-radius: 5px;
    margin-bottom: 15px;
    transition: background-color 0.3s ease;
}

.back-button:hover {
    background-color: #545b62;
}

.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

.modal-content {
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
    border-radius: 8px;
    position: relative;
}

.close-button {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close-button:hover,
.close-button:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

footer {
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid #eee;
    margin-top: 20px;
    color: #777;
}