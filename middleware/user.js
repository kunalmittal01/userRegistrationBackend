export const validateUser = (req, res, next) => {
    const { firstName, lastName, password, email, mobile } = req.body;
    if(!firstName || !lastName || !password || !email || !mobile) {
        return res.status(400).json({ message: 'All fields are required'});
    }
    if(firstName[0] >= 'a' && firstName[0] <='z') {
        return res.status(400).json({ message: 'first letter should be capital of first name.'}); 
    }
    if(lastName[0] >= 'a' && lastName[0] <='z') {
        return res.status(400).json({ message: 'first letter should be capital of last name.'}); 
    }
    if(password.length < 8) {
        return res.status(400).json({ message: 'Password should be at least 8 characters long.'});
    }
    if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
        return res.status(400).json({ message: 'Password should contain at least one uppercase letter, one lowercase letter, one number, and one special character.'});
    }
    if(!/^[0-9]{10}$/.test(mobile)) {
        return res.status(400).json({ message: 'Invalid mobile number format.'});
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!regex.test(email)) {
        return res.status(400).json({ message: 'Invalid email format.'});
    }
    next();
}