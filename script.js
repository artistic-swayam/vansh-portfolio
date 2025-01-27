// Made with ♡by @artistic.swayam 

const tl = gsap.timeline();
const page2 = document.querySelector(".page2");

        function loadingAnimation(){
            TweenMax.to(".loader",1,{
                x:2,
                opacity:0,
                ease: Expo.easeInOut,
                delay:1.5
            });
            TweenMax.staggerFrom(".nav > a, .about p, .sub-header > a,.nav button",2,{
                opacity:0,
                y:30,
                ease:Expo.easeInOut,
                delay:3
            },0.06);
            TweenMax.to(".box",0.2,{
                opacity:1,
                ease:Expo.easeInOut,
                delay:3.8
            });
            TweenMax.to(".image",0.2,{
                opacity:1,
                ease:Expo.easeInOut,
                delay:4
            });   
            TweenMax.to(".box",2.4,{
                y:"-100%",
                ease:Expo.easeInOut,
                delay:4
            });
           
        }
        function countAnimation(){
            const countNo = document.querySelector(".countNo");
            let currentVal = 0;
            function updateCount(){
                if(currentVal === 100){
                    return;
                }

                currentVal += Math.floor(Math.random()*10)+1;
                //console.log(currentVal)
                if(currentVal > 100){
                    currentVal = 100;
                }

                countNo.textContent = currentVal;
                let delay = Math.floor(Math.random()*200)+50;
                setTimeout(updateCount,delay);
            }
            updateCount();

            gsap.to(".count",{
                delay: 3.5,
                opacity:0
            })
            gsap.to(".counter",{
                delay: 4,
                left:"-100%",
                duration:2,
                ease:Expo.easeInOut
            })
        }
        function scrollAnimation(){
            gsap.to(".page2 h1",{
                transform: "translateX(-200%)",
                scrollTrigger:{
                    trigger:".page2 h1",
                    scroller:"body",
                    start:"top 0%",
                    end:"top -100%",
                    scrub:3,
                    pin:true,
                }
            });
            gsap.from(".page4 .inner-container",{
                duration:1,
                y:200,
                delay:tl.duration,
                opacity:0,
                stagger:{
                    amount: 0.6,
                },
                scrollTrigger:{
                    trigger:".page4 .inner-container",
                    scroller:"body",
                    start:"top 140%",

                }
            });
            gsap.to(".page5 .designs",{
                transform: "translateX(-100%)",
                scrollTrigger:{
                    trigger:".page5 .designs",
                    scroller:"body",
                    start:"top 20%",
                    end:"top -100%",
                    scrub:2,
                    pin:true,
                    //markers:true
                }
            });
            gsap.from(".page6 .links",{
                y:"-100%",
                opacity:0,
                scrollTrigger:{
                    trigger:".page6 .links",
                    scroller:"body",
                    scrub:true,
                    start:"top 100%",
                }
            })
        }
        function marqueAnimation(){
            window.addEventListener("wheel",function(dets){
                const scrollPoint = dets.deltaY;
                
                if(scrollPoint > 0){
                    gsap.to(".marque",{
                        transform: "translateX(-200%)",
                        repeat:-1,
                        duration:10,
                        ease:"none"
                    })
                    gsap.to(".marque img",{
                        rotate: 180
                    })
                }else{
                    gsap.to(".marque",{
                        transform: "translateX(0%)",
                        ease:"none",
                        repeat:-1,
                        duration:4,
                    })
                    gsap.to(".marque img",{
                        rotate: 0
                    })
                }
            })
        }
        //library animations
        Shery.mouseFollower({
            color:"#dcff7c",
            ease: "cubic-bezier(0.23, 1, 0.320, 1)",
            duration: 0.5,
          });
        Shery.makeMagnet(".image " /* Element to target.*/, {
            ease: "cubic-bezier(0.23, 1, 0.320, 1)",
            duration: 1,
          });
        
        //function calls  
        countAnimation();
        loadingAnimation();
        scrollAnimation();
        marqueAnimation();
       
        //responsive
        const mm = gsap.matchMedia();
        mm.add("(max-width:799px)",()=>{
            function scrollAnimation(){
                gsap.to(".page2 h1",{
                    transform: "translateX(-200%)",

                    scrollTrigger:{
                        trigger:".page2 h1",
                        scroller:"body",
                        start:"top 85%",
                        end:"top 10%",
                        scrub:2,
                        //pin:true,
                    }
                });   

            }
            scrollAnimation();
        })
