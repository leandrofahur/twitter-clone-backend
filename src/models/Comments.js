"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var uuid_1 = require("uuid");
var Post_1 = require("./Post");
var User_1 = require("./User");
var Comments = /** @class */ (function (_super) {
    __extends(Comments, _super);
    function Comments() {
        var _this = _super.call(this) || this;
        if (!_this.id) {
            _this.id = uuid_1.v4();
        }
        return _this;
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Comments.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Comments.prototype, "content", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Comments.prototype, "user_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return User_1.User; }, function (user) { return user.posts; }),
        typeorm_1.JoinColumn({ name: "user_id" }),
        __metadata("design:type", User_1.User)
    ], Comments.prototype, "user", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Comments.prototype, "post_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Post_1.Post; }, function (post) { return post.comments; }),
        typeorm_1.JoinColumn({ name: "post_id" }),
        __metadata("design:type", Post_1.Post)
    ], Comments.prototype, "post", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Comments.prototype, "createdAt", void 0);
    Comments = __decorate([
        typeorm_1.Entity("comments"),
        __metadata("design:paramtypes", [])
    ], Comments);
    return Comments;
}(typeorm_1.BaseEntity));
exports.Comments = Comments;
