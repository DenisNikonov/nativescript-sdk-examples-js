"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var html_view_1 = require("tns-core-modules/ui/html-view");
function onPageLoaded(args) {
    var page = args.object;
    var container = page.getViewById("container");
    var vm = new observable_1.Observable();
    var myHtmlString = "<span>\n        <h1><font color=\"blue\">NativeScript HtmlView</font></h1></br>\n        <h3>This component accept simple HTML strings</h3>\n    </span>";
    vm.set("htmlString", myHtmlString);
    page.bindingContext = vm;
    container.removeChildren();
    container.addChild(createHtmlView());
}
exports.onPageLoaded = onPageLoaded;
function createHtmlView() {
    var myHtmlView = new html_view_1.HtmlView();
    myHtmlView.html = "<span>\n        <h1><font color=\"blue\">NativeScript HtmlView</font></h1></br>\n        <h3>This component accept simple HTML strings</h3>\n    </span>";
    return myHtmlView;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWNzLXRzLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYXNpY3MtdHMtcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtEQUF5RTtBQUl6RSwyREFBeUQ7QUFHekQsc0JBQXNCLElBQWU7SUFDakMsSUFBTSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUMvQixJQUFNLFNBQVMsR0FBZ0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3RCxJQUFNLEVBQUUsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztJQUM1QixJQUFNLFlBQVksR0FBRywwSkFHYixDQUFDO0lBRVQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDbkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7SUFFekIsU0FBUyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzNCLFNBQVMsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztBQUN6QyxDQUFDO0FBQ0QsT0FBTyxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7QUFFcEM7SUFFSSxJQUFNLFVBQVUsR0FBRyxJQUFJLG9CQUFRLEVBQUUsQ0FBQztJQUVsQyxVQUFVLENBQUMsSUFBSSxHQUFHLDBKQUdWLENBQUM7SUFHVCxNQUFNLENBQUMsVUFBVSxDQUFDO0FBQ3RCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudERhdGEsIE9ic2VydmFibGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG4vLyA+PiBodG1sLXZpZXctcmVxdWlyZS10c1xuaW1wb3J0IHsgSHRtbFZpZXcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9odG1sLXZpZXdcIjtcbi8vIDw8IGh0bWwtdmlldy1yZXF1aXJlLXRzXG5cbmZ1bmN0aW9uIG9uUGFnZUxvYWRlZChhcmdzOiBFdmVudERhdGEpIHtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgY29uc3QgY29udGFpbmVyID0gPFN0YWNrTGF5b3V0PnBhZ2UuZ2V0Vmlld0J5SWQoXCJjb250YWluZXJcIik7XG4gICAgY29uc3Qgdm0gPSBuZXcgT2JzZXJ2YWJsZSgpO1xuICAgIGNvbnN0IG15SHRtbFN0cmluZyA9IGA8c3Bhbj5cbiAgICAgICAgPGgxPjxmb250IGNvbG9yPVxcXCJibHVlXFxcIj5OYXRpdmVTY3JpcHQgSHRtbFZpZXc8L2ZvbnQ+PC9oMT48L2JyPlxuICAgICAgICA8aDM+VGhpcyBjb21wb25lbnQgYWNjZXB0IHNpbXBsZSBIVE1MIHN0cmluZ3M8L2gzPlxuICAgIDwvc3Bhbj5gO1xuXG4gICAgdm0uc2V0KFwiaHRtbFN0cmluZ1wiLCBteUh0bWxTdHJpbmcpO1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSB2bTtcblxuICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZHJlbigpO1xuICAgIGNvbnRhaW5lci5hZGRDaGlsZChjcmVhdGVIdG1sVmlldygpKTtcbn1cbmV4cG9ydHMub25QYWdlTG9hZGVkID0gb25QYWdlTG9hZGVkO1xuXG5mdW5jdGlvbiBjcmVhdGVIdG1sVmlldygpIHtcbiAgICAvLyA+PiBodG1sLXZpZXctY29kZS1iZWhpbmQtdHNcbiAgICBjb25zdCBteUh0bWxWaWV3ID0gbmV3IEh0bWxWaWV3KCk7XG5cbiAgICBteUh0bWxWaWV3Lmh0bWwgPSBgPHNwYW4+XG4gICAgICAgIDxoMT48Zm9udCBjb2xvcj1cXFwiYmx1ZVxcXCI+TmF0aXZlU2NyaXB0IEh0bWxWaWV3PC9mb250PjwvaDE+PC9icj5cbiAgICAgICAgPGgzPlRoaXMgY29tcG9uZW50IGFjY2VwdCBzaW1wbGUgSFRNTCBzdHJpbmdzPC9oMz5cbiAgICA8L3NwYW4+YDtcbiAgICAvLyA8PCBodG1sLXZpZXctY29kZS1iZWhpbmQtdHNcblxuICAgIHJldHVybiBteUh0bWxWaWV3O1xufVxuIl19