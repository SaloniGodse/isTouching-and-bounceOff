function bounceOff(ob1,o2) {
    if(o2.x - ob1.x < o2.width/2 + ob1.width/2 && ob1.x - o2.x < o2.width/2 + ob1.width/2 ) {
      ob1.velocityX = ob1.velocityX * (-1);
      o2.velocityX = o2.velocityX * (-1);
    }
      if(o2.y - ob1.y < o2.height/2 + ob1.height/2 && ob1.y - o2.y < o2.height/2 + ob1.height/2) {
        ob1.velocityY= ob1.velocityY * (-1);
        o2.velocityY = o2.velocityY * (-1);
    }
  }

  function isTouching(ob1,o2){ if (ob1.x - o2.x < o2.width/2 + ob1.width/2 && o2.x - ob1.x < o2.width/2 + ob1.width/2 && ob1.y - o2.y < o2.height/2 + ob1.height/2 && o2.y - ob1.y < o2.height/2 + ob1.height/2) { return true; } else { return false; } }