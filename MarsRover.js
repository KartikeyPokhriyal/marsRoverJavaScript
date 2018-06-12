var MarsRover = function (xCoordinate, yCoordinate, direction) {

    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
    this.direction = direction;

    this.increaseXCoordinate = function () {
        this.xCoordinate++;
    }
    this.increaseYCoordinate = function () {
        this.yCoordinate++;
    }
    this.decreaseXCoordinate = function () {
        this.xCoordinate--;
    }
    this.decreaseYCoordinate = function () {
        this.yCoordinate--;
    }
    this.rotateInLeftDirection = function () {
        switch (this.direction) {
            case 'N':
                this.direction = 'W';
                break;
            case 'W':
                this.direction = 'S';
                break;
            case 'S':
                this.direction = 'E';
                break;
            case 'E':
                this.direction = 'N';
                break;
        }
    }

    this.rotateInRightDirection = function () {
        switch (this.direction) {

            case 'W':
                this.direction = 'N';
                break;
            case 'S':
                this.direction = 'W';
                break;
            case 'E':
                this.direction = 'S';
                break;
            case 'N':
                this.direction = 'E';
                break;
        }
    }

    this.move = function () {
        switch (this.direction) {
            case 'N':
                this.increaseYCoordinate();
                break;
            case 'W':
                this.decreaseXCoordinate();
                break;
            case 'S':
                this.decreaseYCoordinate();
                break;
            case 'E':
                this.increaseXCoordinate();
                break;
        }

    }

};

MarsRover.prototype.getPosition = function () {
    return this.xCoordinate + " " + this.yCoordinate + " " + this.direction;
};

MarsRover.prototype.getInstruction = function (commands) {
    for (let command of commands) {
        switch (command) {
            case 'L':
                this.rotateInLeftDirection();
                break;
            case 'R':
                this.rotateInRightDirection();
                break;
            case 'M':
                this.move();
                break;
        }
    }
};
module.exports = MarsRover;
