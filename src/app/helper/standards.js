class standards {

    static getReturnUser(user) {
        const data = {
            'id': user.id,
            'name': user.name,
            'email': user.email
        };

        return data;
    };
}

export default standards;