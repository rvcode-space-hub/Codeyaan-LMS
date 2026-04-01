class UsernameGenerator {
    static generate(name , gmail) {

        const baseUsername = gmail.split('@')[0].toLowerCase();
        const randomSuffix = Math.floor(1000 + Math.random() * 9000);
        const namePart = name.split(' ')[0].toLowerCase().slice(0, 4); // Use the first 4 characters of the name, if it's longer than 4 characters
        const username = `${baseUsername}${randomSuffix}${namePart}`; // Generate a random 4-digit number
        return username;
    }
    
}

export default UsernameGenerator;
