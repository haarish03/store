var btn = $(".filter a").click(function () {
    var id = $(this).attr('id');

    console.log(id)


    if (id === "cup") {

            $(".items .cake").hide();         
            $(".items .donuts").css("display","none");
            $(".items .cc").css("display","block");
        
}else if(id === "ck") {

    

    $(".items .cc").css("display","none");       
    $(".items .donuts").css("display","none");
    $(".items .cake").css("display","block");

}else if(id === "dn") {

    $(".items .cake").css("display","none");    
    $(".items .cc").css("display","none");
    $(".items .donuts").css("display","block");

}else{
    
    $(".items .cake").css("display","block");   
    $(".items .cc").css("display","block");
    $(".items .donuts").css("display","block");
}

}
    )





// }