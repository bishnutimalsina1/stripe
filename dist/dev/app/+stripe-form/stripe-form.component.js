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
var StripeFormComponent = (function () {
    function StripeFormComponent(renderer) {
        this.renderer = renderer;
    }
    StripeFormComponent.prototype.openCheckout = function () {
        var handler = window.StripeCheckout.configure({
            key: 'pk_test_oi0sKPJYLGjdvOXOM8tE8cMa',
            locale: 'auto',
            token: function (token) {
            }
        });
        handler.open({
            name: 'Demo Site',
            description: '2 widgets',
            amount: 2000
        });
        this.globalListener = this.renderer.listenGlobal('window', 'popstate', function () {
            handler.close();
        });
    };
    StripeFormComponent.prototype.ngOnDestroy = function () {
        this.globalListener();
    };
    StripeFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-stripe-form',
            templateUrl: 'stripe-form.component.html',
            styleUrls: ['stripe-form.component.css']
        }), 
        __metadata('design:paramtypes', [core_1.Renderer])
    ], StripeFormComponent);
    return StripeFormComponent;
}());
exports.StripeFormComponent = StripeFormComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rc3RyaXBlLWZvcm0vc3RyaXBlLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBb0MsZUFBZSxDQUFDLENBQUE7QUFRcEQ7SUFHRSw2QkFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUFHLENBQUM7SUFFMUMsMENBQVksR0FBWjtRQUNFLElBQUksT0FBTyxHQUFTLE1BQU8sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO1lBQ25ELEdBQUcsRUFBRSxrQ0FBa0M7WUFDdkMsTUFBTSxFQUFFLE1BQU07WUFDZCxLQUFLLEVBQUUsVUFBVSxLQUFVO1lBRzNCLENBQUM7U0FDRixDQUFDLENBQUM7UUFFSCxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQ1gsSUFBSSxFQUFFLFdBQVc7WUFDakIsV0FBVyxFQUFFLFdBQVc7WUFDeEIsTUFBTSxFQUFFLElBQUk7U0FDYixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUU7WUFDckUsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHlDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQWxDSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQ3pDLENBQUM7OzJCQUFBO0lBOEJGLDBCQUFDO0FBQUQsQ0E3QkEsQUE2QkMsSUFBQTtBQTdCWSwyQkFBbUIsc0JBNkIvQixDQUFBIiwiZmlsZSI6ImFwcC8rc3RyaXBlLWZvcm0vc3RyaXBlLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBSZW5kZXJlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC1zdHJpcGUtZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnc3RyaXBlLWZvcm0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc3RyaXBlLWZvcm0uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN0cmlwZUZvcm1Db21wb25lbnQge1xuICBnbG9iYWxMaXN0ZW5lcjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7fVxuXG4gIG9wZW5DaGVja291dCgpIHtcbiAgICB2YXIgaGFuZGxlciA9ICg8YW55PndpbmRvdykuU3RyaXBlQ2hlY2tvdXQuY29uZmlndXJlKHtcbiAgICAgIGtleTogJ3BrX3Rlc3Rfb2kwc0tQSllMR2pkdk9YT004dEU4Y01hJyxcbiAgICAgIGxvY2FsZTogJ2F1dG8nLFxuICAgICAgdG9rZW46IGZ1bmN0aW9uICh0b2tlbjogYW55KSB7XG4gICAgICAgIC8vIFlvdSBjYW4gYWNjZXNzIHRoZSB0b2tlbiBJRCB3aXRoIGB0b2tlbi5pZGAuXG4gICAgICAgIC8vIEdldCB0aGUgdG9rZW4gSUQgdG8geW91ciBzZXJ2ZXItc2lkZSBjb2RlIGZvciB1c2UuXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBoYW5kbGVyLm9wZW4oe1xuICAgICAgbmFtZTogJ0RlbW8gU2l0ZScsXG4gICAgICBkZXNjcmlwdGlvbjogJzIgd2lkZ2V0cycsXG4gICAgICBhbW91bnQ6IDIwMDBcbiAgICB9KTtcblxuICAgIHRoaXMuZ2xvYmFsTGlzdGVuZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3Rlbkdsb2JhbCgnd2luZG93JywgJ3BvcHN0YXRlJywgKCkgPT4ge1xuICAgICAgaGFuZGxlci5jbG9zZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5nbG9iYWxMaXN0ZW5lcigpO1xuICB9XG59XG5cbiJdfQ==
