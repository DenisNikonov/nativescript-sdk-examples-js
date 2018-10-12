"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var timer_1 = require("tns-core-modules/timer");
var color = ["green", "yellow", "red"];
var id;
var status = true;
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("buttonText", "Disable color change");
    vm.set("buttoncolor", "gray");
    id = timer_1.setInterval(function () {
        var randNumber = Math.floor(Math.random() * (color.length));
        vm.set("buttoncolor", color[randNumber]);
    }, 1000);
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function onButtonTap(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    if (status) {
        timer_1.clearInterval(id);
        vm.set("buttonText", "Enable color change");
    }
    else {
        id = timer_1.setInterval(function () {
            var randNumber = Math.floor(Math.random() * (color.length));
            vm.set("buttoncolor", color[randNumber]);
        }, 1000);
        vm.set("buttonText", "Disable color change");
    }
    status = !status;
}
exports.onButtonTap = onButtonTap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJ2YWwtdHMtcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImludGVydmFsLXRzLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrREFBOEQ7QUFHOUQsZ0RBQW9FO0FBRXBFLElBQU0sS0FBSyxHQUFHLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUN6QyxJQUFJLEVBQUUsQ0FBQztBQUNQLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztBQUVsQix3QkFBK0IsSUFBSTtJQUMvQixJQUFNLElBQUksR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JDLElBQU0sRUFBRSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0lBRTVCLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLHNCQUFzQixDQUFDLENBQUM7SUFDN0MsRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFFOUIsRUFBRSxHQUFHLG1CQUFXLENBQUM7UUFDYixJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzlELEVBQUUsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVULElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO0FBQzdCLENBQUM7QUFiRCx3Q0FhQztBQUVELHFCQUE0QixJQUFJO0lBQzVCLElBQU0sSUFBSSxHQUFlLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQzFDLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDL0IsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUVULHFCQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFbEIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUscUJBQXFCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDSixFQUFFLEdBQUcsbUJBQVcsQ0FBQztZQUNiLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDOUQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBQ0QsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDO0FBQ3JCLENBQUM7QUFqQkQsa0NBaUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbi8vID4+IGltcG9ydC10aW1lclxuaW1wb3J0IHsgc2V0SW50ZXJ2YWwsIGNsZWFySW50ZXJ2YWwgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy90aW1lclwiO1xuLy8gPDwgaW1wb3J0LXRpbWVyXG5jb25zdCBjb2xvciA9IFtcImdyZWVuXCIsIFwieWVsbG93XCIsIFwicmVkXCJdO1xubGV0IGlkO1xubGV0IHN0YXR1cyA9IHRydWU7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzKSB7XG4gICAgY29uc3QgcGFnZTogUGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIGNvbnN0IHZtID0gbmV3IE9ic2VydmFibGUoKTtcblxuICAgIHZtLnNldChcImJ1dHRvblRleHRcIiwgXCJEaXNhYmxlIGNvbG9yIGNoYW5nZVwiKTtcbiAgICB2bS5zZXQoXCJidXR0b25jb2xvclwiLCBcImdyYXlcIik7XG4gICAgLy8gPj4gc2V0LWludGVydmFsLWV4YW1wbGUtdHNcbiAgICBpZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgY29uc3QgcmFuZE51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChjb2xvci5sZW5ndGgpKTtcbiAgICAgICAgdm0uc2V0KFwiYnV0dG9uY29sb3JcIiwgY29sb3JbcmFuZE51bWJlcl0pO1xuICAgIH0sIDEwMDApO1xuICAgIC8vIDw8IHNldC1pbnRlcnZhbC1leGFtcGxlLXRzXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHZtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25CdXR0b25UYXAoYXJncykge1xuICAgIGNvbnN0IHBhZ2U6IFBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdC5wYWdlO1xuICAgIGNvbnN0IHZtID0gcGFnZS5iaW5kaW5nQ29udGV4dDtcbiAgICBpZiAoc3RhdHVzKSB7XG4gICAgICAgIC8vID4+IGNsZWFyLWludGVydmFsLWV4YW1wbGUtdHNcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpZCk7XG4gICAgICAgIC8vIDw8IGNsZWFyLWludGVydmFsLWV4YW1wbGUtdHNcbiAgICAgICAgdm0uc2V0KFwiYnV0dG9uVGV4dFwiLCBcIkVuYWJsZSBjb2xvciBjaGFuZ2VcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByYW5kTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGNvbG9yLmxlbmd0aCkpO1xuICAgICAgICAgICAgdm0uc2V0KFwiYnV0dG9uY29sb3JcIiwgY29sb3JbcmFuZE51bWJlcl0pO1xuICAgICAgICB9LCAxMDAwKTtcblxuICAgICAgICB2bS5zZXQoXCJidXR0b25UZXh0XCIsIFwiRGlzYWJsZSBjb2xvciBjaGFuZ2VcIik7XG4gICAgfVxuICAgIHN0YXR1cyA9ICFzdGF0dXM7XG59XG4iXX0=