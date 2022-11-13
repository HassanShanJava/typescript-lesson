type User = {
    name: string;
    email: string;
    isActive: boolean;
}

function createUser(user: User): User {
    console.log(user.name, user.email, user.isActive);
    return { name: user.name, email: user.email, isActive: user.isActive }
}

createUser({ name: "Hassan Shan", email: "hassanshan675@gmail.com", isActive: true })


type Point = {
    x: number;
    y: number;
};

// Exactly the same as the earlier example
function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });
export { };