class Paper extends dustbin{
    constructor(x,y){
        super(x,y,50,50)
        this.Image=loadImage("paper.png")
    }
    display(){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        super.display()
    }
}