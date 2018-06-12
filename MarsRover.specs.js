var MarsRover = require('./MarsRover');

    describe('Check if MarsRover Rotates correctly.', function () {


        it('should be able to rotate ninety degree to left side', function () {
            var marsRover = new MarsRover(1,2,'N');
            marsRover.getInstruction("L");

            expect(marsRover.getPosition()).toEqual("1 2 W");
        });

        it('should be able to rotate ninety degree to right side', function () {
            var marsRover = new MarsRover(1,2,'N');
            marsRover.getInstruction("R");

            expect(marsRover.getPosition()).toEqual("1 2 E");
        });
    });

    describe('Check if MarsRover Moves correctly.', function () {

        it('should be able to move ahead in north', function () {
            var marsRover = new MarsRover(1,3,'N');
            marsRover.getInstruction("M");

            expect(marsRover.getPosition()).toEqual("1 4 N");
        });

        it('should be able to move ahead in south', function () {
            var marsRover = new MarsRover(1,4,'S');
            marsRover.getInstruction("M");

            expect(marsRover.getPosition()).toEqual("1 3 S");
        });

    });

    describe('Check for commands sent by NASA.', function () {
        it('should be able to move marsRover according to commands', function () {
            var marsRover = new MarsRover(1,2,'N');
            marsRover.getInstruction("LMLMLMLMM");

            expect(marsRover.getPosition()).toEqual("1 3 N");
        });

        it('should be able to move marsRover according to given instructions', function () {
            var marsRover = new MarsRover(3,3,'E');
            marsRover.getInstruction("MMRMMRMRRM");

            expect(marsRover.getPosition()).toEqual("5 1 E");
        });
    });