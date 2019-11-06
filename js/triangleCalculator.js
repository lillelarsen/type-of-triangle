const triangleCalculator = (sideA, sideB, sideC) => {
    const equilateral = threeEquals(sideA, sideB, sideC);
    const isosceles = twoEquals(sideA, sideB, sideC);
    const scalene = noEquals(sideA, sideB, sideC);
    
    if(equilateral == true) {
        return {
            answer: 'Triangle is equilateral',
            image: 'images/equilateral.png'
        } ;
    }else if(isosceles == true) {
        return {
            answer: 'Triangle is isosceles',
            image: 'images/isosceles.png'
        }
    } else if(scalene == true) {
        return {
            answer: 'Triangle is scalene',
            image: 'images/scalene.png'
        }
    } else {
        return 'Something went wrong, try again';
    }
    
};