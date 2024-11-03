"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.UserController = void 0;
var common_1 = require("@nestjs/common");
var auth_guard_1 = require("../common/guards/auth.guard");
var role_guard_1 = require("src/common/guards/role.guard");
var roles_decorator_1 = require("src/common/decorators/roles.decorator");
var role_enum_1 = require("src/common/enums/role.enum");
var platform_express_1 = require("@nestjs/platform-express");
var UserController = /** @class */ (function () {
    function UserController(userService) {
        this.userService = userService;
    }
    UserController.prototype.createUser = function (createUserDto) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.createUser(createUserDto)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserController.prototype.resetPassword = function (id, resetPasswordDto) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.changePassword(id, resetPasswordDto)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserController.prototype.getUsersByDepartment = function (id, page, limit, firstName, lastName, departmentId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.getAllUsersByDepartmentId(page, limit, firstName, lastName, departmentId)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserController.prototype.getUserForChat = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.getUserForChat()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserController.prototype.getUserById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.findOne(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserController.prototype.updateUser = function (id, updateUserDto) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Update user', updateUserDto);
                        return [4 /*yield*/, this.userService.updateUser(id, updateUserDto)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserController.prototype.deleteUser = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Delete user', id);
                        return [4 /*yield*/, this.userService.deleteUser(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserController.prototype.uploadImage = function (id, file) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.userService.uploadImage(file, id)];
            });
        });
    };
    __decorate([
        common_1.Post(),
        roles_decorator_1.Roles(role_enum_1.Role.ADMINISTRATOR),
        __param(0, common_1.Body())
    ], UserController.prototype, "createUser");
    __decorate([
        roles_decorator_1.Roles(role_enum_1.Role.ADMINISTRATOR, role_enum_1.Role.EMPLOYEE),
        common_1.Post('/reset-password/:id'),
        __param(0, common_1.Param('id')),
        __param(1, common_1.Body())
    ], UserController.prototype, "resetPassword");
    __decorate([
        common_1.Get(),
        roles_decorator_1.Roles(role_enum_1.Role.ADMINISTRATOR),
        __param(0, common_1.Param('id')),
        __param(1, common_1.Query('page')),
        __param(2, common_1.Query('limit')),
        __param(3, common_1.Query('firstName')),
        __param(4, common_1.Query('lastName')),
        __param(5, common_1.Query('departmentId'))
    ], UserController.prototype, "getUsersByDepartment");
    __decorate([
        common_1.Get('chat'),
        roles_decorator_1.Roles(role_enum_1.Role.ADMINISTRATOR, role_enum_1.Role.EMPLOYEE)
    ], UserController.prototype, "getUserForChat");
    __decorate([
        common_1.Get(':id'),
        roles_decorator_1.Roles(role_enum_1.Role.ADMINISTRATOR, role_enum_1.Role.EMPLOYEE),
        __param(0, common_1.Param('id'))
    ], UserController.prototype, "getUserById");
    __decorate([
        common_1.Patch(':id'),
        roles_decorator_1.Roles(role_enum_1.Role.ADMINISTRATOR, role_enum_1.Role.EMPLOYEE),
        __param(0, common_1.Param('id')), __param(1, common_1.Body())
    ], UserController.prototype, "updateUser");
    __decorate([
        common_1.Delete(':id'),
        roles_decorator_1.Roles(role_enum_1.Role.ADMINISTRATOR),
        __param(0, common_1.Param('id'))
    ], UserController.prototype, "deleteUser");
    __decorate([
        common_1.Post('upload-image/:id'),
        roles_decorator_1.Roles(role_enum_1.Role.ADMINISTRATOR, role_enum_1.Role.EMPLOYEE),
        common_1.UseInterceptors(platform_express_1.FileInterceptor('file')),
        __param(0, common_1.Param('id')),
        __param(1, common_1.UploadedFile())
    ], UserController.prototype, "uploadImage");
    UserController = __decorate([
        common_1.Controller('user'),
        common_1.UseGuards(auth_guard_1.AuthGuard, role_guard_1.RolesGuard)
    ], UserController);
    return UserController;
}());
exports.UserController = UserController;
