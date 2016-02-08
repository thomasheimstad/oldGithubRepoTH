$(document).ready(function(){
        
        var postTitle = document.title.replace(/ /g,'');
        var imgCount = $("article img").length;
    
        $("article img").each(function() {
        var src = this.src;
        var alt = $(this).attr("alt");
        $(this).wrap('<a href="' + src + '" data-lightbox="' + postTitle + '" data-title="' + alt + '"></a>');
});              
});   