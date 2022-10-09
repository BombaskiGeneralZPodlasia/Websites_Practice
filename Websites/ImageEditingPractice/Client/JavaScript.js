let canvas = document.getElementById("canvasObject")
let width = 500,height = 500

canvas.width = width
canvas.height = height

let context = canvas.getContext("2d")
let imagedata = context.getImageData(0,0,width,height)
let image = new ImageObject(imagedata,context)

let PointsAmount = 50
let PointsArray = {}

for (i=0;i<PointsAmount;i++)
{
 let Position = new Vector2((Math.random()*width),(Math.random()*height))
 let Color = new ColorRGBA((Math.random()*255),(Math.random()*255),(Math.random()*255),255)
 let newPoint = new Point(Position,Color) 
 PointsArray[i] = newPoint
}

function findClosestPointColor(MyPosition)
{
 let ClosestPoint;
 let Distance = 10000;

 for(i = 0;i < PointsAmount;i++)
 {
  let Point = PointsArray[i]
  let Position = Point.Position
  let currDistance = (Position.Sub(MyPosition)).Dist()
  if (currDistance >= Distance)
  {
   continue 
  }
  Distance = currDistance
  ClosestPoint = Point
 }

 if(!ClosestPoint)
 {
   return new ColorRGBA(0,0,0,255) 
 }

 return ClosestPoint.Color
}

function main()
{
    setTimeout(() => {
        for(let x = 0;x<width;x++)
        {
         for(let y = 0;y<height;y++)
         {
        
            let Position = new Vector2(x,y)
            image.UpdatePixel(x,y,findClosestPointColor(Position))     
         }  
        }
        for(i = 0;i < PointsAmount;i++)
        {
         let Point = PointsArray[i]
         let Position = Point.Position
         Point.Position = Point.Position.Add(new Vector2(((Math.random()-0.5)*2),((Math.random()-0.5)*2)))
         Point.Position = new Vector2(Point.Position.x%width,Point.Position.y%height)
         image.UpdatePixel(Math.round(Position.x),Math.round(Position.y),new ColorRGBA(0,0,0,255)) 
        }
        image.UpdateImage()
        main()
    },1);
}

main()