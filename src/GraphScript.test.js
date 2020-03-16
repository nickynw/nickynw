import { updatePosition, getAngle, getThirdSide } from './GraphScript';


/*Expecting object to step 1 unit away from target*/
test('<updatingPosition>', () => {
    let testObject = { "id": "object", "x": 0, "y": 0 }
    let testTarget = { "id": "target", "x": 1, "y": 1 }
    updatePosition(testObject, testTarget, -1);
    expect(Math.round(testObject.y)).toBe(-1)
    expect(Math.round(testObject.x)).toBe(-1)
});

/*Creates Isocesles where angle C = 360/firstParam, and sides A+B are secondParam
Answer calculated using google calculator*/
test('getThirdSide>', () => {
    expect(Number(getThirdSide(3, 5).toFixed(2))).toBe(9.29)
});

/*
       90
  (3)  .   .
0  .  (1)  . 180
   .   .  (2)
      270
*/
test('getAngle>', () => {
    let testObject1 = { "id": "object", "x": 0, "y": 0 }
    let testObject2 = { "id": "target", "x": 1, "y": 1 }
    let testObject3 = { "id": "target", "x": -1, "y": -1 }
    expect(getAngle(testObject1, testObject2)).toBe(225)
    expect(getAngle(testObject1, testObject3)).toBe(45)
});
