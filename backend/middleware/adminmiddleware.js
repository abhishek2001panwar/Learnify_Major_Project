
export function isAuthenticated(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    next();
}
// authMiddleware.js
export function isAdmin(req, res, next) {
    // Check if user is authenticated and is admin
    if (!req.isAuthenticated() || !req.user.isAdmin) {
        return res.status(403).json({ message: "Forbidden" });
    }
    next();
}
