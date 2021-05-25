
$(document).ready(function(){
    var str='<iframe class="iframe-class"></iframe>';
    $(document.body).append(str);
    str='<p>Hello world=)</p>';
    var o=$('.iframe-class').get(0);
    o.contentWindow.document.writeln(str);
});
