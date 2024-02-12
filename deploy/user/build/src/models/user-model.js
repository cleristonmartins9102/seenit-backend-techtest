"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.CreateUserModel = void 0;
class CreateUserModel {
    constructor() {
        this.permissions = [];
    }
}
exports.CreateUserModel = CreateUserModel;
class UserModel extends CreateUserModel {
    constructor(data) {
        super();
        this.id = data.id;
        this.firstName = data.firstName;
        this.surname = data.surname;
        this.email = data.email;
        this.avatarUrl = data.avatarUrl;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }
}
exports.UserModel = UserModel;
