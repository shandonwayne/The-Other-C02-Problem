$(document).ready(function(e) {
    $.stellar({
        verticalScrolling: true
    });
    
    $(document).on("scroll",function(event){
        var scrollFromTop = $(document).scrollTop();
        
        var currentImage = ( Math.round(scrollFromTop / 100) % 2 );
        $(".JFimg").attr("src","images/JF"+currentImage+".png");
        
        //var currentImage = ( Math.round(scrollFromTop / 100) % 2 );
        //$(".JF1 img").attr("src","images/JF"+currentImage+".png");
        
        
        var topOfFishSection = 2200;
        var bottomOfFishSection = 4500;
        totalDifferenceInPosition = bottomOfFishSection - topOfFishSection;
        
        if(scrollFromTop>topOfFishSection && scrollFromTop<bottomOfFishSection){
            var differenceInPosition = (bottomOfFishSection - scrollFromTop);
            
            // for fishies going left
            var diffPercent =(differenceInPosition/totalDifferenceInPosition)*100;
            
            // for fishies going right
            var invertedDiffPercent = (diffPercent*-1)+100;
            
            //console.log(diffPercent);
            
            var speed = $(".fish.CLB").attr("shandons-speed");
            $(".fish.CLB").css("left",((speed*invertedDiffPercent)-205)+"%");
            
            var speed = $(".fish.CL1").attr("shandons-speed");
            $(".fish.CL1").css("left",((speed*diffPercent)+30)+"%");
            
            var speed = $(".fish.CL2").attr("shandons-speed");
            $(".fish.CL2").css("left",((speed*invertedDiffPercent)-10)+"%");
            
            var speed = $(".fish.CL3").attr("shandons-speed");
            $(".fish.CL3").css("left",((speed*invertedDiffPercent)+15)+"%");
            
            var speed = $(".fish.CL4").attr("shandons-speed");
            $(".fish.CL4").css("left",((speed*invertedDiffPercent)-10)+"%");
            
            var speed = $(".fish.CL5").attr("shandons-speed");
            $(".fish.CL5").css("left",((speed*invertedDiffPercent)-50)+"%");
             
            var speed = $(".fish.CL6").attr("shandons-speed");
            $(".fish.CL6").css("left",((speed*invertedDiffPercent)-20)+"%");
            
            var speed = $(".fish.CL7").attr("shandons-speed");
            $(".fish.CL7").css("left",((speed*invertedDiffPercent)-30)+"%");
            
            
        }
            
        
        if(scrollFromTop>5000 && scrollFromTop<10000){
            
            /* Drippy 1 */
            var drippyHeight = (scrollFromTop-5200)*0.7;
            
            if(drippyHeight<0)drippyHeight = 0;
            if(drippyHeight>600)drippyHeight = 600;
            
            $(".drippy.d1").css("height",drippyHeight+"px");
            
            /* Drippy 2 */
            var drippy2Height = (scrollFromTop-5200)*.9;
            
            if(drippy2Height<0)drippy2Height = 0;
            if(drippy2Height>800)drippy2Height = 800;
            
            $(".drippy.d2").css("height",drippy2Height+"px");
            
            /* Drippy 3 */
            var drippy3Height = (scrollFromTop-5200)*1;
            
            if(drippy3Height<0)drippy3Height = 0;
            if(drippy3Height>600)drippy3Height =600;
            
            $(".drippy.d3").css("height",drippy3Height+"px");
            
            /* Drippy 4 */
            var drippy4Height = (scrollFromTop-5200)*1;
            
            if(drippy4Height<0)drippy4Height = 0;
            if(drippy4Height>700)drippy4Height =700;
            
            $(".drippy.d4").css("height",drippy4Height+"px");
            
            /* Drippy 5 */
            var drippy5Height = (scrollFromTop-5200)*2;
            
            if(drippy5Height<0)drippy5Height = 0;
            if(drippy5Height>400)drippy5Height =400;
            
            $(".drippy.d5").css("height",drippy5Height+"px");
            
            /* Drippy 6 */
            var drippy6Height = (scrollFromTop-5200)*.5;
            
            if(drippy6Height<0)drippy6Height = 0;
            if(drippy6Height>600)drippy6Height =600;
            
            $(".drippy.d6").css("height",drippy6Height+"px");
            
            /* Drippy 7 */
            var drippy7Height = (scrollFromTop-5200)*2;
            
            if(drippy7Height<0)drippy7Height = 0;
            if(drippy7Height>500)drippy7Height =500;
            
            $(".drippy.d7").css("height",drippy7Height+"px");
            
            /* Drippy 8 */
            var drippy8Height = (scrollFromTop-5200)*.8;
            
            if(drippy8Height<0)drippy8Height = 0;
            if(drippy8Height>600)drippy8Height =600;
            
            $(".drippy.d8").css("height",drippy8Height+"px");
            
            /* Drippy 9 */
            var drippy9Height = (scrollFromTop-5200)*.6;
            
            if(drippy9Height<0)drippy9Height = 0;
            if(drippy9Height>699)drippy9Height =699;
            
            $(".drippy.d9").css("height",drippy9Height+"px");
            
             /* Drippy 10*/
            var drippy10Height = (scrollFromTop-5200)*1.2;
            
            if(drippy10Height<0)drippy10Height = 0;
            if(drippy10Height>600)drippy10Height =600;
            
            $(".drippy.d10").css("height",drippy10Height+"px");
            
              /* Drippy 11*/
            var drippy11Height = (scrollFromTop-5200)*.5;
            
            if(drippy11Height<0)drippy11Height = 0;
            if(drippy11Height>460)drippy11Height =460;
            
            $(".drippy.d11").css("height",drippy11Height+"px");
            
            /* Drippy 12*/
            var drippy12Height = (scrollFromTop-5200)*3.5;
            
            if(drippy12Height<0)drippy12Height = 0;
            if(drippy12Height>400)drippy12Height =400;
            
            $(".drippy.d12").css("height",drippy12Height+"px");
            
            /* Drippy 13*/
            var drippy13Height = (scrollFromTop-5400)*1;
            
            if(drippy13Height<0)drippy13Height = 0;
            if(drippy13Height>500)drippy13Height =500;
            
            $(".drippy.d13").css("height",drippy13Height+"px");
            
            /* Drippy 14*/
            var drippy14Height = (scrollFromTop-5200)*2;
            
            if(drippy14Height<0)drippy14Height = 0;
            if(drippy14Height>600)drippy14Height =600;
            
            $(".drippy.d14").css("height",drippy14Height+"px");
            
                /* Drippy 15*/
            var drippy15Height = (scrollFromTop-5500)*.5;
            
            if(drippy15Height<0)drippy15Height = 0;
            if(drippy15Height>800)drippy15Height =800;
            
            $(".drippy.d15").css("height",drippy15Height+"px");
            
           
        }
        
        
    })
    
    
   
});