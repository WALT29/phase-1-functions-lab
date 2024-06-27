let hqStreet=42;
let distanceInBlocks=0;
let block=264;
let distInFeet=0;
let dist=0;
let blocksTravelled=0;
let fare=0;

function distanceFromHqInBlocks(pickUpStreet){
    if(hqStreet>pickUpStreet){
        distanceInBlocks=hqStreet-pickUpStreet;
        return distanceInBlocks;
    } else if(pickUpStreet>hqStreet){
        distanceInBlocks=pickUpStreet-hqStreet;
        return distanceInBlocks;
    } 
}

function distanceFromHqInFeet(pickUpStreet){

    return distanceFromHqInBlocks(pickUpStreet) *block;
    
    }

console.log(distanceFromHqInFeet(9));




function distanceTravelledInFeet(start, destination){
    if (destination > start){
        blocksTravelled=(destination-start)*264
        return blocksTravelled;
    } else if (destination < start)
        blocksTravelled=(start-destination)*264;
        return blocksTravelled;
    }
    


function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let distance=distanceTravelledInFeet(start,destination);
    if (distance<=400){
        return 0;

    } else if (distance>400 && distance<2000){
        fare =(distance-400)*0.02
        return fare;
    }else if (distance>2000 && distance<2500){
        fare=25;
        return fare;
    }else if (distance>2500){
        return 'cannot travel that far'
    }
}