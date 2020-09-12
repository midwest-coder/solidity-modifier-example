// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

contract ModifierExample {
    string public name = "Solidity modifier example";
    address owner;
    uint number;
    bool public worked;

    constructor() public {
        owner = msg.sender;
        number = 4;
        worked = false;
    }

    modifier onlyFour() {
        require(number == 4, "Number does not equal 4!");
        _;
    }

    function checkModifier() public onlyFour {
        worked = true;
    }

}