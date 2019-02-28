const fs = require('fs');
const config = require('../../config/database.json');
const UserClass = require('../domain/User');

module.exports = class UserService{

    getAll(){
        let users = [];
        const lines = fs.readFileSync(config.databaseFilePath).toString();
        lines.split('\n').map((line) => {
            const userName = line.trim();
            if(userName){
                const user = new UserClass(line.trim());
                users.push(user);
            }
        });

        return users;
    }

    create(user){
        if( !(user instanceof UserClass) )
            throw 'UserService@create: Invalid User class';

        if(!user.name)
            throw 'UserService@create: Invalid user field name';

        fs.appendFileSync(config.databaseFilePath, user.name + '\n');

        return true;        
    }
}