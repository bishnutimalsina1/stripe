"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var CustomFormComponent = (function () {
    function CustomFormComponent(_zone) {
        this._zone = _zone;
    }
    CustomFormComponent.prototype.getToken = function () {
        var _this = this;
        this.message = 'Loading...';
        window.Stripe.card.createToken({
            number: this.cardNumber,
            exp_month: this.expiryMonth,
            exp_year: this.expiryYear,
            cvc: this.cvc
        }, function (status, response) {
            _this._zone.run(function () {
                if (status === 200) {
                    _this.message = "Success! Card token " + response.card.id + ".";
                }
                else {
                    _this.message = response.error.message;
                }
            });
        });
    };
    CustomFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-custom-form',
            templateUrl: 'custom-form.component.html',
            styleUrls: ['custom-form.component.css'],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [core_1.NgZone])
    ], CustomFormComponent);
    return CustomFormComponent;
}());
exports.CustomFormComponent = CustomFormComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rY3VzdG9tLWZvcm0vY3VzdG9tLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsc0JBQXlDLGdCQUFnQixDQUFDLENBQUE7QUFTMUQ7SUFRRSw2QkFBb0IsS0FBYTtRQUFiLFVBQUssR0FBTCxLQUFLLENBQVE7SUFBRyxDQUFDO0lBRXJDLHNDQUFRLEdBQVI7UUFBQSxpQkFtQkM7UUFsQkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7UUFFdEIsTUFBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3BDLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVTtZQUN2QixTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDM0IsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3pCLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztTQUNkLEVBQUUsVUFBQyxNQUFjLEVBQUUsUUFBYTtZQUcvQixLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztnQkFDYixFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDbkIsS0FBSSxDQUFDLE9BQU8sR0FBRyx5QkFBdUIsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQUcsQ0FBQztnQkFDNUQsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixLQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO2dCQUN4QyxDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFwQ0g7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztZQUN4QyxVQUFVLEVBQUUsQ0FBQyxnQ0FBd0IsQ0FBQztTQUN2QyxDQUFDOzsyQkFBQTtJQStCRiwwQkFBQztBQUFELENBOUJBLEFBOEJDLElBQUE7QUE5QlksMkJBQW1CLHNCQThCL0IsQ0FBQSIsImZpbGUiOiJhcHAvK2N1c3RvbS1mb3JtL2N1c3RvbS1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLWN1c3RvbS1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICdjdXN0b20tZm9ybS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjdXN0b20tZm9ybS5jb21wb25lbnQuY3NzJ10sXG4gIGRpcmVjdGl2ZXM6IFtSRUFDVElWRV9GT1JNX0RJUkVDVElWRVNdXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbUZvcm1Db21wb25lbnQge1xuICBjYXJkTnVtYmVyOiBzdHJpbmc7XG4gIGV4cGlyeU1vbnRoOiBzdHJpbmc7XG4gIGV4cGlyeVllYXI6IHN0cmluZztcbiAgY3ZjOiBzdHJpbmc7XG5cbiAgbWVzc2FnZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3pvbmU6IE5nWm9uZSkge31cblxuICBnZXRUb2tlbigpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSAnTG9hZGluZy4uLic7XG5cbiAgICAoPGFueT53aW5kb3cpLlN0cmlwZS5jYXJkLmNyZWF0ZVRva2VuKHtcbiAgICAgIG51bWJlcjogdGhpcy5jYXJkTnVtYmVyLFxuICAgICAgZXhwX21vbnRoOiB0aGlzLmV4cGlyeU1vbnRoLFxuICAgICAgZXhwX3llYXI6IHRoaXMuZXhwaXJ5WWVhcixcbiAgICAgIGN2YzogdGhpcy5jdmNcbiAgICB9LCAoc3RhdHVzOiBudW1iZXIsIHJlc3BvbnNlOiBhbnkpID0+IHtcblxuICAgICAgLy8gV3JhcHBpbmcgaW5zaWRlIHRoZSBBbmd1bGFyIHpvbmVcbiAgICAgIHRoaXMuX3pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgdGhpcy5tZXNzYWdlID0gYFN1Y2Nlc3MhIENhcmQgdG9rZW4gJHtyZXNwb25zZS5jYXJkLmlkfS5gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubWVzc2FnZSA9IHJlc3BvbnNlLmVycm9yLm1lc3NhZ2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbiJdfQ==
