// Middleware to check if user is admin
export function isAdmin(req, res, next) {
    // Assuming you have a session-based authentication system
    if (req.session && req.session.user && req.session.user.isAdmin) {
        // User is admin, allow access
        next();
    } else {
        // User is not admin, redirect or send unauthorized error
        res.status(403).send('Unauthorized');
    }
}

// Middleware to check if user is logged in
 export  function isAuthenticated(req, res, next) {
    // Assuming you have a session-based authentication system
    if (req.session && req.session.user) {
        // User is logged in, allow access
        next();
    } else {
        // User is not logged in, redirect to login page or send unauthorized error
        res.status(401).send('Unauthorized');
    }
}


