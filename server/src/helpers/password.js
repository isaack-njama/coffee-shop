import { compare, hash, genSalt } from 'bcrypt';

export class Password {
    static async toHash(password) {
        const salt = await genSalt(10);
        return hash(password, salt);
    }

    static compare(storedPassword, suppliedPassword) {
        return compare(suppliedPassword, storedPassword);
    }

    static validate(password) {
        if (password.length < 6) {
            return {
                error: 'Password must be at least 6 characters',
            }
        }

        if (!/\d/.test(password)) {
            return {
                error: 'Password must contain a number',
            }
        }

        if (!/[A-Z]/.test(password)) {
            return {
                error: 'Password must contain an uppercase letter',
            }
        }

        return {
            error: null,
        }
    }
}