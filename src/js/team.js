export default class Team {
    constructor(name) {
        this.name = name;
        this.members = new Set();
    }

    add(member) {
        if (this.members.has(member)) {
            throw new Error('Такой персонаж уже есть');
        }
        this.members.add(member)
    }

    [Symbol.iterator]() {
        const team_array = Array.from(this.members);
        let сurrent_character = -1;
        return {
            next() {
                сurrent_character += 1;
                if (team_array[сurrent_character] === undefined) {
                    return {
                        done: true,
                    };
                }
                return {
                    value: teamArray[current],
                    done: false,
                };
            }
        }
    }
}
