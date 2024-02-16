routes disponibles:

http://localhost:4000/ ...

... api/auth/signup (post {email, password, ?name}, resp {message})
... api/auth/login (post {email, password}, resp {user, token})

... api/test/ (get, resp {message})
... api/test/ (post - need token {...any data}, resp {message, data})