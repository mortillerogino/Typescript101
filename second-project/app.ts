enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR
}

const person = {
    name: 'Gino',
    age: 34,
    hobbies: ['Sports', 'Cooking'],
    role: Role.READ_ONLY
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

console.log(person.role);