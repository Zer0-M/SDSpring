d3.csv("./2006_-_2012_School_Demographics_and_Accountability_Snapshot.csv").then(function(data){
    data.forEach(d => {
        d=+ d
    })
    var x_vs_y= function(x,y,name){
        var school=data.filter(function(n){
            return (n.Name==name);
        })
        console.log(school)
        var namex=x+"_num"
        var xpop=school.map(function(n){
            return parseInt(n[namex])
        })
        var namey=y+"_num"
        var ypop=school.map(function(n){
            return parseInt(n[namey])
        })
        console.log(x + " VS " + y +" populations for "+ name)
        for (let index = 0; index < school.length; index++) {
            console.log("School Year "+(index+2006))
            console.log(xpop[index]+" vs "+ypop[index])
        }
    }
    x_vs_y("black","asian","STUYVESANT HIGH SCHOOL")

    var total_percent=function(category){
        var cat=category+"_num"
        var totalpops=data.map(function(n){
                 return (parseInt(n.total_enrollment))
            })
        var catpops=data.map((function(n){
            return (parseInt(n[cat]))
       }))
       var popsum=totalpops.reduce(function(a,b){
           return a+b;
       })
       var catsum=catpops.reduce(function(a,b){
            return a+b;
        })
        console.log("Percent "+category+" : "+(catsum/popsum)*100)
    }
    total_percent("white")

    var free_lunch=function(loc){
        var locs={"M":"Manhattan","Queens":"Q","K":"Brooklyn","X":"Bronx","R":"Staten Island"}
        var fl=data.filter((function(n){
            return (parseInt(n.fl_percent)>80 && n.DBN.includes(loc))
        }))
        console.log("There are "+fl.length+" Schools in "+locs[loc]+" with over 80% students getting Free Lunch")
        console.log("sample population distribution data:")
        for (let index = 0; index < 10; index++) {
            console.log("Black Population :"+fl[index]["black_num"]+
            " Asian Population : "+fl[index]["asian_num"]+
            " White Population : " + fl[index]["white_num"]+
            " Hispanic Population : " + fl[index]["hispanic_num"])   
        }
    }
    console.log(free_lunch("M"))
    // var PS15=data.filter(function(n){
    //     return (n.DBN=="01M015");
    // })
    // console.log(PS15)
    // var pop=PS15.map(function(n){
    //     return (parseInt(n.total_enrollment))
    // }
    // )
    // console.log(pop)
    // var sumps=pop.reduce(function(a,b){
    //     return a+b;
    // });
    // console.log(sumps)
})