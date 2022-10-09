let Seed = 0

class ImageObject {
    PixelArray;
    Context;
    ImageData;
    Height;
    Width;
    constructor (ImageData,Context){
     this.PixelArray = ImageData.data
     this.Height = ImageData.height
     this.Width = ImageData.width
     this.ImageData = ImageData
     this.Context = Context
    }
    UpdatePixel = function(X,Y,NewPixelData)
    {
     let PixelPosition = (Y*this.Width+X)*4
     
     this.PixelArray[PixelPosition] = NewPixelData.R
     this.PixelArray[PixelPosition+1] = NewPixelData.G
     this.PixelArray[PixelPosition+2] = NewPixelData.B
     this.PixelArray[PixelPosition+3] = NewPixelData.A
    }
    ClearPixel = function(X,Y)
    {
     let PixelPosition = (Y*this.Width+X)*4

     this.PixelArray[PixelPosition] = 0
     this.PixelArray[PixelPosition+1] = 0
     this.PixelArray[PixelPosition+2] = 0
     this.PixelArray[PixelPosition+3] = 0
    }
    UpdateImage = function()
    {
     this.Context.putImageData(this.ImageData,0,0)
    }
}

class Vector2 {
 x;
 y;
 constructor(x,y)
 {
  this.x = x;
  this.y = y
 }
 Add(Vector2Offset)
 {
  return new Vector2(this.x + Vector2Offset.x,this.y + Vector2Offset.y)
 }
 Sub(Vector2Offset)
 {
  return new Vector2(this.x - Vector2Offset.x,this.y - Vector2Offset.y)
 }
 Mul(Vector2Offset)
 {
  return new Vector2(this.x * Vector2Offset.x,this.y * Vector2Offset.y)
 }
 Div(Vector2Offset)
 {
  return new Vector2(this.x / Vector2Offset.x,this.y / Vector2Offset.y)
 }
 Dist()
 {
  return Math.sqrt(this.x*this.x+this.y*this.y)
 }
}

class ColorRGBA {
    R;
    G;
    B;
    A;
    constructor(R,G,B,A)
    {
     this.R = R
     this.G = G
     this.B = B
     this.A = A
    }  
}

class Point {
    Position;
    Color;
    constructor(Position,Color)
    {
     this.Position = Position
     this.Color = Color
    }
}

function SetSeed(newSeed)
{
 Seed = newSeed
}

function Noise3D(x,y,z)
{
 return (Math.random()*x+Math.random()*y+Math.random()*z)/(x+y+z) - 0.5 //returns a number between -0.5 to 0.5
}

function Noise2D(x,y)
{
    return (Math.random()*x+Math.random()*y)/(x+y) - 0.5 //returns a number between -0.5 to 0.5
}