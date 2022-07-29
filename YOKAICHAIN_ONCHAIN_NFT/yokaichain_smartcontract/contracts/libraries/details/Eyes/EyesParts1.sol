// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

pragma abicoder v2;

import "base64-sol/base64.sol";

/// @title Eyes SVG generator
library EyesParts1 {
    /// @dev Eyes N°23 => Moon Gold
    function item_1() public pure returns (string memory) {
        return
            string(
                abi.encodePacked(
                    eyes,
                    '<linearGradient id="Moon Aka" gradientUnits="userSpaceOnUse" x1="234.5972" y1="-460.8015" x2="246.3069" y2="-460.8015" gradientTransform="matrix(1 0 0 -1 0 -270)" ><stop offset="0" style="stop-color:#FFB451" /><stop offset="0.5259" style="stop-color:#F7EC94" /><stop offset="1" style="stop-color:#FF9121" /></linearGradient><path id="Moon Aka" display="inline" fill="url(#Moon_Aka_00000152984819707226930020000004625877956111571090_)" d="M246.3,190.5c0.1-2-0.9-3.8-2.4-4.9c0.7,0.8,1.3,1.9,1.1,3.1c-0.1,2.5-2.2,4.4-4.7,4.4c-2.6-0.1-4.6-2.1-4.5-4.6c0-1.1,0.5-2.3,1.4-3c-1.6,1-2.6,2.8-2.6,4.7c-0.1,3.2,2.5,5.9,5.7,5.9C243.6,196.2,246.2,193.7,246.3,190.5z"  /><linearGradient id="Moon Aka" gradientUnits="userSpaceOnUse" x1="157.8972" y1="-461.0056" x2="169.6069" y2="-461.0056" gradientTransform="matrix(1 0 0 -1 0 -270)" ><stop offset="0" style="stop-color:#FFB451" /><stop offset="0.5259" style="stop-color:#F7EC94" /><stop offset="1" style="stop-color:#FF9121" /></linearGradient><path id="Moon Aka" display="inline" fill="url(#Moon_Aka_00000178206716264067794300000007095126762428803473_)" d="M169.6,190.7c0.1-2-0.9-3.8-2.4-4.9c0.7,0.8,1.3,1.9,1.1,3.1c-0.1,2.5-2.2,4.4-4.7,4.4s-4.6-2.1-4.5-4.6c0-1.1,0.5-2.3,1.4-3c-1.6,1-2.6,2.8-2.6,4.7c-0.1,3.2,2.5,5.9,5.7,5.9C166.8,196.5,169.5,194,169.6,190.7z"  />'
                )
            );
    }

    /// @dev Eyes N°21 => Pupils White-Red
    function item_2() public pure returns (string memory) {
        return
            string(
                abi.encodePacked(
                    eyes,
                    '<ellipse display="inline" fill="#FFEDED" cx="239.1" cy="189.9" rx="5.7" ry="7.3"  /><ellipse display="inline" fill="#B50D5E" cx="164.4" cy="190.2" rx="5.7" ry="7.3"  />'
                )
            );
    }

    /// @dev Eyes N°20 => Tomoe White
    function item_3() public pure returns (string memory) {
        return
            string(
                abi.encodePacked(
                    eyes,
                    '<g display="inline" ><g><path  fill="#FFDAEA" d="M241.3,193.3c0,0-0.3,2-3.2,3.2c0,0,1-0.9,1.1-2.1" /><path  fill="#FFDAEA" d="M241.3,193.4c0.3-0.9-0.2-1.9-1-2.2c-0.9-0.3-1.9,0.2-2.2,1c-0.3,0.9,0.2,1.9,1,2.2C239.9,194.8,241,194.3,241.3,193.4z M239.1,192.7c0.1-0.3,0.4-0.4,0.7-0.4c0.3,0.1,0.4,0.4,0.4,0.7c-0.1,0.3-0.4,0.4-0.7,0.4C239.1,193.3,239.1,193,239.1,192.7z" /></g><g><path  fill="#FFDAEA" d="M242.5,186.6c0,0,1.9-0.7,4.4,1.3c0,0-1.3-0.4-2.4,0" /><path  fill="#FFDAEA" d="M242.5,186.6c-0.9,0.1-1.6,1-1.4,2c0.1,0.9,1,1.6,2,1.4c0.9-0.1,1.6-1,1.4-2C244.4,187.1,243.6,186.4,242.5,186.6z M243.1,188.9c-0.3,0-0.6-0.1-0.6-0.4c0-0.3,0.1-0.6,0.4-0.6s0.6,0.1,0.6,0.4C243.6,188.5,243.3,188.8,243.1,188.9z" /></g><g><path  fill="#FFDAEA" d="M235.5,189.7c0,0-1.8-1-1.7-4.3c0,0,0.4,1.3,1.5,1.9" /><path  fill="#FFDAEA" d="M235.2,189.7c0.7,0.6,1.8,0.6,2.4-0.1c0.6-0.7,0.6-1.8-0.1-2.4c-0.7-0.6-1.8-0.6-2.4,0.1C234.6,187.9,234.6,188.9,235.2,189.7z M236.8,187.9c0.2,0.2,0.2,0.5,0.1,0.8c-0.2,0.2-0.5,0.2-0.8,0.1c-0.2-0.2-0.2-0.5-0.1-0.8C236.3,187.7,236.7,187.7,236.8,187.9z" /></g></g><g display="inline" ><g><path  fill="#FFDAEA" d="M165.4,193.3c0,0-0.3,2-3.2,3.2c0,0,1-0.9,1.1-2.1" /><path  fill="#FFDAEA" d="M165.4,193.4c0.3-0.9-0.2-1.9-1-2.2c-0.9-0.3-1.9,0.2-2.2,1c-0.3,0.9,0.2,1.9,1,2.2C164.1,194.8,165.1,194.4,165.4,193.4z M163.3,192.7c0.1-0.3,0.4-0.4,0.7-0.4c0.3,0.1,0.4,0.4,0.4,0.7c-0.1,0.3-0.4,0.4-0.7,0.4C163.3,193.3,163.1,193,163.3,192.7z" /></g><g><path  fill="#FFDAEA" d="M166.7,186.7c0,0,1.9-0.7,4.4,1.3c0,0-1.3-0.4-2.4,0" /><path  fill="#FFDAEA" d="M166.7,186.6c-0.9,0.1-1.6,1-1.4,2c0.1,0.9,1,1.6,2,1.4c0.9-0.1,1.6-1,1.4-2C168.4,187.1,167.7,186.5,166.7,186.6z M167.2,188.9c-0.3,0-0.6-0.1-0.6-0.4c0-0.3,0.1-0.6,0.4-0.6c0.3,0,0.6,0.1,0.6,0.4C167.7,188.6,167.5,188.8,167.2,188.9z" /></g><g><path  fill="#FFDAEA" d="M159.6,189.7c0,0-1.8-1-1.7-4.3c0,0,0.4,1.3,1.5,1.9" /><path  fill="#FFDAEA" d="M159.4,189.7c0.7,0.6,1.8,0.6,2.4-0.1c0.6-0.7,0.6-1.8-0.1-2.4c-0.7-0.6-1.8-0.6-2.4,0.1S158.7,189,159.4,189.7z M160.9,187.9c0.2,0.2,0.2,0.5,0.1,0.8c-0.2,0.2-0.5,0.2-0.8,0.1c-0.2-0.2-0.2-0.5-0.1-0.8C160.4,187.8,160.7,187.8,160.9,187.9z" /></g></g>'
                )
            );
    }

    /// @dev Eyes N°18 => Tomoe Red
    function item_4() public pure returns (string memory) {
        return
            string(
                abi.encodePacked(
                    eyes,
                    '<g display="inline" ><g><path  fill="#E31466" d="M241.3,193.3c0,0-0.3,2-3.2,3.2c0,0,1-0.9,1.1-2.1" /><path  fill="#E31466" d="M241.3,193.4c0.3-0.9-0.2-1.9-1-2.2c-0.9-0.3-1.9,0.2-2.2,1c-0.3,0.9,0.2,1.9,1,2.2C239.9,194.8,241,194.3,241.3,193.4z M239.1,192.7c0.1-0.3,0.4-0.4,0.7-0.4c0.3,0.1,0.4,0.4,0.4,0.7c-0.1,0.3-0.4,0.4-0.7,0.4C239.1,193.3,239.1,193,239.1,192.7z" /></g><g><path  fill="#E31466" d="M242.5,186.6c0,0,1.9-0.7,4.4,1.3c0,0-1.3-0.4-2.4,0" /><path  fill="#E31466" d="M242.5,186.6c-0.9,0.1-1.6,1-1.4,2c0.1,0.9,1,1.6,2,1.4c0.9-0.1,1.6-1,1.4-2C244.4,187.1,243.6,186.4,242.5,186.6z M243.1,188.9c-0.3,0-0.6-0.1-0.6-0.4c0-0.3,0.1-0.6,0.4-0.6s0.6,0.1,0.6,0.4C243.6,188.5,243.3,188.8,243.1,188.9z" /></g><g><path  fill="#E31466" d="M235.5,189.7c0,0-1.8-1-1.7-4.3c0,0,0.4,1.3,1.5,1.9" /><path  fill="#E31466" d="M235.2,189.7c0.7,0.6,1.8,0.6,2.4-0.1c0.6-0.7,0.6-1.8-0.1-2.4c-0.7-0.6-1.8-0.6-2.4,0.1C234.6,187.9,234.6,188.9,235.2,189.7z M236.8,187.9c0.2,0.2,0.2,0.5,0.1,0.8c-0.2,0.2-0.5,0.2-0.8,0.1c-0.2-0.2-0.2-0.5-0.1-0.8C236.3,187.7,236.7,187.7,236.8,187.9z" /></g></g><g display="inline" ><g><path  fill="#E31466" d="M165.4,193.3c0,0-0.3,2-3.2,3.2c0,0,1-0.9,1.1-2.1" /><path  fill="#E31466" d="M165.4,193.4c0.3-0.9-0.2-1.9-1-2.2c-0.9-0.3-1.9,0.2-2.2,1c-0.3,0.9,0.2,1.9,1,2.2C164.1,194.8,165.1,194.4,165.4,193.4z M163.3,192.7c0.1-0.3,0.4-0.4,0.7-0.4c0.3,0.1,0.4,0.4,0.4,0.7c-0.1,0.3-0.4,0.4-0.7,0.4C163.3,193.3,163.1,193,163.3,192.7z" /></g><g><path  fill="#E31466" d="M166.7,186.7c0,0,1.9-0.7,4.4,1.3c0,0-1.3-0.4-2.4,0" /><path  fill="#E31466" d="M166.7,186.6c-0.9,0.1-1.6,1-1.4,2c0.1,0.9,1,1.6,2,1.4c0.9-0.1,1.6-1,1.4-2C168.4,187.1,167.7,186.5,166.7,186.6z M167.2,188.9c-0.3,0-0.6-0.1-0.6-0.4c0-0.3,0.1-0.6,0.4-0.6c0.3,0,0.6,0.1,0.6,0.4C167.7,188.6,167.5,188.8,167.2,188.9z" /></g><g><path  fill="#E31466" d="M159.6,189.7c0,0-1.8-1-1.7-4.3c0,0,0.4,1.3,1.5,1.9" /><path  fill="#E31466" d="M159.4,189.7c0.7,0.6,1.8,0.6,2.4-0.1c0.6-0.7,0.6-1.8-0.1-2.4c-0.7-0.6-1.8-0.6-2.4,0.1S158.7,189,159.4,189.7z M160.9,187.9c0.2,0.2,0.2,0.5,0.1,0.8c-0.2,0.2-0.5,0.2-0.8,0.1c-0.2-0.2-0.2-0.5-0.1-0.8C160.4,187.8,160.7,187.8,160.9,187.9z" /></g></g>'
                )
            );
    }

    /// @dev Eyes N°16 => Shine
    function item_5() public pure returns (string memory) {
        return
            string(
                abi.encodePacked(
                    eyes,
                    '<path display="inline" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" d="M164.1,182.5c1.4,7,1.4,6.9,8.3,8.3c-7,1.4-6.9,1.4-8.3,8.3c-1.4-7-1.4-6.9-8.3-8.3C162.8,189.4,162.7,189.5,164.1,182.5z"  /><path display="inline" fill="#FFFFFF" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" d="M238.7,182.3c1.4,7,1.4,6.9,8.3,8.3c-7,1.4-6.9,1.4-8.3,8.3c-1.4-7-1.4-6.9-8.3-8.3C237.4,189.2,237.3,189.2,238.7,182.3z"  />'
                )
            );
    }

    /// @dev Eyes N°12 => Stitch Eyes
    function item_6() public pure returns (string memory) {
        return
            string(
                abi.encodePacked(
                    eyes,
                    '<g id="Strip"> <path d="M231.3,188.2s1-3.2,2.6-.9a30.48,30.48,0,0,1-.6,9.2s-.9,2-1.5-.5C231.3,193.3,232.3,193,231.3,188.2Z" transform="translate(-0.4)" fill="#fff" stroke="#000" stroke-miterlimit="10" stroke-width="0.75"/> <path d="M239.4,187.7s1-3.1,2.5-.9a28.56,28.56,0,0,1-.6,8.9s-.9,1.9-1.4-.5S240.5,192.4,239.4,187.7Z" transform="translate(-0.4)" fill="#fff" stroke="#000" stroke-miterlimit="10" stroke-width="0.75"/> <path d="M245.9,187.7s.9-2.7,2.2-.8a26.25,26.25,0,0,1-.5,7.7s-.8,1.7-1.1-.4S246.9,191.8,245.9,187.7Z" transform="translate(-0.4)" fill="#fff" stroke="#000" stroke-miterlimit="10" stroke-width="0.75"/> <path d="M251.4,187.4s.8-2.4,2-.7a21.16,21.16,0,0,1-.5,6.9s-.7,1.5-1-.4C251.4,191.2,252.1,191,251.4,187.4Z" transform="translate(-0.4)" fill="#fff" stroke="#000" stroke-miterlimit="10" stroke-width="0.75"/> </g> <g id="Strip-2" > <path d="M173.2,187.9s-1-3.1-2.5-.9a27.9,27.9,0,0,0,.6,8.8s.9,1.9,1.4-.5S172.2,192.5,173.2,187.9Z" transform="translate(-0.4)" fill="#fff" stroke="#000" stroke-miterlimit="10" stroke-width="0.75"/> <path d="M165.4,187.7s-1-3.1-2.5-.9a28.56,28.56,0,0,0,.6,8.9s.9,1.9,1.4-.5S164.4,192.4,165.4,187.7Z" transform="translate(-0.4)" fill="#fff" stroke="#000" stroke-miterlimit="10" stroke-width="0.75"/> <path d="M158.9,187.7s-.9-2.7-2.2-.8a26.25,26.25,0,0,0,.5,7.7s.8,1.7,1.1-.4C158.9,192,158.1,191.8,158.9,187.7Z" transform="translate(-0.4)" fill="#fff" stroke="#000" stroke-miterlimit="10" stroke-width="0.75"/> <path d="M153.4,187.4s-.8-2.4-2-.7a21.16,21.16,0,0,0,.5,6.9s.7,1.5,1-.4C153.4,191.2,152.6,191,153.4,187.4Z" transform="translate(-0.4)" fill="#fff" stroke="#000" stroke-miterlimit="10" stroke-width="0.75"/> </g>'
                )
            );
    }

    /// @dev Eyes N°11 => Globes
    function item_7() public pure returns (string memory) {
        return
            string(
                abi.encodePacked(
                    eyes,
                    '<ellipse fill="#FFFFFF" cx="244.6" cy="184.5" rx="4.1" ry="0.9"  /><ellipse fill="#FFFFFF" cx="154.6" cy="184.5" rx="4.1" ry="0.9"  />'
                )
            );
    }

    /// @dev Eyes N°8 => Akuma Eye
    function item_8() public pure returns (string memory) {
        return
            string(
                abi.encodePacked(
                    eyes,
                    '<path display="inline" fill="#FFFFFF" d="M246.5,192h-13c-0.7,0-1.3-0.5-1.3-1.3l0,0c0-0.7,0.5-1.3,1.3-1.3h13c0.7,0,1.3,0.5,1.3,1.3l0,0C247.8,191.3,247.1,192,246.5,192z"  /><path display="inline" fill="#FFFFFF" d="M169.9,192h-13c-0.7,0-1.3-0.5-1.3-1.3l0,0c0-0.7,0.5-1.3,1.3-1.3h13c0.7,0,1.3,0.5,1.3,1.3l0,0C171.1,191.3,170.5,192,169.9,192z"  />'
                )
            );
    }

    /// @dev Eyes N°19 => Pupils Kuro
    function item_9() public pure returns (string memory) {
        return
            string(
                abi.encodePacked(
                    eyes,
                    '<ellipse display="inline" cx="239.1" cy="189.9" rx="5.7" ry="7.3"  /><ellipse display="inline" cx="164.4" cy="190.2" rx="5.7" ry="7.3"  />'
                )
            );
    }

    /// @dev Eyes N°4 => Spiral
    function item_10() public pure returns (string memory) {
        return
            string(
                abi.encodePacked(
                    eyes,
                    '<g display="inline" ><path fill="#FFFFFF" d="M238.1,191.2c0.2-0.8,0.6-1.8,1.4-2.4c0.4-0.3,0.9-0.5,1.4-0.4s0.9,0.4,1.3,0.8c0.5,0.8,0.6,1.9,0.6,2.8c0,0.9-0.4,2-1.1,2.7s-1.8,1.1-2.8,1s-1.9-0.7-2.6-1.3c-0.7-0.5-1.5-1.3-2-2.1s-0.8-1.9-0.7-2.9s0.5-2,1.1-2.7s1.5-1.4,2.3-1.8c1.8-0.8,3.8-1,5.5-0.6c0.9,0.2,1.9,0.5,2.6,1.1c0.7,0.6,1.3,1.6,1.4,2.5c0.3,1.9-0.3,3.9-1.5,5.1c1-1.5,1.5-3.3,1-5c-0.2-0.8-0.6-1.6-1.4-2.1c-0.6-0.5-1.5-0.8-2.3-0.9c-1.7-0.2-3.5,0-5,0.7s-2.8,2.1-2.9,3.6c-0.2,1.6,0.9,3.1,2.3,4.2c0.7,0.5,1.4,1,2.2,1.1c0.7,0.1,1.6-0.2,2.2-0.7s0.9-1.4,1-2.2s0-1.8-0.4-2.4c-0.2-0.3-0.5-0.6-0.8-0.7c-0.4-0.1-0.8,0-1.1,0.2C238.9,189.6,238.4,190.4,238.1,191.2z" /></g><g display="inline" ><path fill="#FFFFFF" d="M161.7,189.8c0.7-0.4,1.7-0.8,2.6-0.7c0.4,0,0.9,0.3,1.3,0.7c0.3,0.4,0.3,0.9,0.2,1.5c-0.2,0.9-0.8,1.8-1.6,2.4c-0.7,0.6-1.7,1.1-2.7,1c-1,0-2.1-0.4-2.7-1.3c-0.7-0.8-0.8-1.9-1-2.7c-0.1-0.9-0.1-1.9,0.1-2.9c0.2-0.9,0.7-1.9,1.6-2.5c0.8-0.6,1.8-1,2.8-1c0.9-0.1,2,0.1,2.8,0.4c1.8,0.6,3.3,1.9,4.4,3.4c0.5,0.7,0.9,1.7,1,2.7c0.1,0.9-0.2,2-0.8,2.7c-1.1,1.6-2.9,2.5-4.7,2.6c1.8-0.3,3.4-1.4,4.3-2.8c0.4-0.7,0.6-1.6,0.5-2.4c-0.1-0.8-0.5-1.6-1-2.3c-1-1.4-2.5-2.5-4.1-3s-3.4-0.5-4.7,0.5s-1.6,2.8-1.4,4.5c0.1,0.8,0.2,1.7,0.7,2.3c0.4,0.6,1.3,0.9,2,1c0.8,0,1.6-0.2,2.3-0.8c0.6-0.5,1.3-1.3,1.5-2c0.1-0.4,0.1-0.8-0.1-1.1c-0.2-0.3-0.5-0.6-0.9-0.6C163.3,189.1,162.5,189.4,161.7,189.8z" /></g>'
                )
            );
    }

    /// @dev Eyes N°3 => Pupils Red
    function item_11() public pure returns (string memory) {
        return
            string(
                abi.encodePacked(
                    eyes,
                    '<ellipse display="inline" fill="#E31466" cx="239.1" cy="189.9" rx="5.7" ry="7.3"  /><ellipse display="inline" fill="#E31466" cx="164.4" cy="190.2" rx="5.7" ry="7.3"  />'
                )
            );
    }

    /// @dev Eyes N°2 => Moon
    function item_12() public pure returns (string memory) {
        return
            string(
                abi.encodePacked(
                    eyes,
                    '<path id="Moon Aka" display="inline" fill="#FFEDED" d="M246.3,190.5c0.1-2-0.9-3.8-2.4-4.9c0.7,0.8,1.3,1.9,1.1,3.1c-0.1,2.5-2.2,4.4-4.7,4.4c-2.6-0.1-4.6-2.1-4.5-4.6c0-1.1,0.5-2.3,1.4-3c-1.6,1-2.6,2.8-2.6,4.7c-0.1,3.2,2.5,5.9,5.7,5.9C243.6,196.2,246.2,193.7,246.3,190.5z"  /><path id="Moon Aka" display="inline" fill="#FFEDED" d="M169.6,190.7c0.1-2-0.9-3.8-2.4-4.9c0.7,0.8,1.3,1.9,1.1,3.1c-0.1,2.5-2.2,4.4-4.7,4.4s-4.6-2.1-4.5-4.6c0-1.1,0.5-2.3,1.4-3c-1.6,1-2.6,2.8-2.6,4.7c-0.1,3.2,2.5,5.9,5.7,5.9C166.8,196.5,169.5,194,169.6,190.7z"  />'
                )
            );
    }

    /// @dev Eyes N°1 => Kitsune Eye
    function item_13() public pure returns (string memory) {
        return
            string(
                abi.encodePacked(
                    eyes,
                    '<path display="inline"  fill="#FFFFFF" d="M238.6,181c0,0-4.7,7.9,0,18.7C238.6,199.6,243.2,191.2,238.6,181z"  /><path display="inline"  fill="#FFFFFF" d="M165.3,181c0,0-4.7,7.9,0,18.7C165.3,199.6,169.9,191.2,165.3,181z"  />'
                )
            );
    }

    /// @dev Eyes N°17 => shock
    function item_14() public pure returns (string memory) {
        return
            string(
                abi.encodePacked(
                    eyes,
                    '<circle  fill="#FFFFFF" cx="239.5" cy="190.8" r="1.4"/> <circle  fill="#FFFFFF" cx="164.4" cy="191.3" r="1.4"/>'
                )
            );
    }

    /// @dev Eyes N°7 => Pupils Pure
    function item_15() public pure returns (string memory) {
        return
            string(
                abi.encodePacked(
                    eyes,
                    '<ellipse display="inline" fill="#FFEDED" cx="239.1" cy="189.9" rx="5.7" ry="7.3"  /><ellipse display="inline" fill="#FFEDED" cx="164.4" cy="190.2" rx="5.7" ry="7.3"  />'
                )
            );
    }

    string internal constant eyes =
        '<g id="No_Fill"> <g> <path stroke="#000000" stroke-miterlimit="10" d="M219.1,197.3c0,0,3.1-22.5,37.9-15.5C257.1,181.7,261,208.8,219.1,197.3z"/> <g> <path d="M227.3,182.1c-1,0.5-1.9,1.3-2.7,2s-1.6,1.6-2.3,2.3c-0.7,0.8-1.5,1.7-2.1,2.5l-1,1.4c-0.3,0.4-0.6,0.9-1,1.4 c0.2-0.5,0.4-1,0.6-1.6c0.2-0.5,0.5-1,0.8-1.6c0.6-0.9,1.3-2,2.1-2.8s1.7-1.7,2.6-2.3C225,182.7,226.1,182.2,227.3,182.1z"/> </g> <g> <path d="M245.4,200.9c1.3-0.2,2.5-0.5,3.6-1s2.2-1,3.2-1.8c1-0.7,1.9-1.6,2.7-2.5s1.6-2,2.3-3c-0.3,1.3-0.8,2.5-1.7,3.5 c-0.7,1-1.7,2.1-2.8,2.8c-1,0.7-2.3,1.4-3.5,1.7C248,201,246.7,201.2,245.4,200.9z"/> </g> </g> <g> <path stroke="#000000" stroke-miterlimit="10" d="M183.9,197.3c0,0-3.1-22.5-37.9-15.5C146,181.7,142,208.8,183.9,197.3z"/> <g> <path d="M175.8,182.1c1,0.5,1.9,1.3,2.7,2s1.6,1.6,2.3,2.3c0.7,0.8,1.5,1.7,2.1,2.5l1,1.4c0.3,0.4,0.6,0.9,1,1.4 c-0.2-0.5-0.4-1-0.6-1.6c-0.2-0.5-0.5-1-0.8-1.6c-0.6-0.9-1.3-2-2.1-2.8s-1.7-1.7-2.6-2.3 C178.1,182.7,176.9,182.2,175.8,182.1z"/> </g> <g> <path d="M157.6,200.9c-1.3-0.2-2.5-0.5-3.6-1s-2.2-1-3.2-1.8c-1-0.7-1.9-1.6-2.7-2.5s-1.6-2-2.3-3c0.3,1.3,0.8,2.5,1.7,3.5 c0.7,1,1.7,2.1,2.8,2.8c1,0.7,2.3,1.4,3.5,1.7C155,201,156.5,201.2,157.6,200.9z"/> </g> </g> </g> <g id="Shadow" opacity="0.43"> <path opacity="0.5" enable-background="new " d="M218.3,191.6c0,0,4.6-10.8,19.9-13.6c0,0-12.2,0-16.1,2.8 C218.9,183.8,218.3,191.6,218.3,191.6z"/> </g> <g id="Shadow_00000029025467326919416900000002242143269665406345_" opacity="0.43"> <path opacity="0.5" enable-background="new " d="M184.9,191.3c0,0-4.8-10.6-20.1-13.4c0,0,12.4-0.2,16.3,2.6 C184.4,183.6,184.9,191.3,184.9,191.3z"/> </g>';

    //string internal constant eyes = '<g display="inline" ><ellipse  fill="#FFFFFF" cx="235.4" cy="190.9" rx="13.9" ry="16.4" /><path d="M221.3,190.9c0,4,1.1,8.1,3.5,11.4c1.2,1.7,2.8,3.1,4.6,4.1s3.8,1.6,5.9,1.6s4.1-0.6,5.8-1.7c1.8-1,3.3-2.4,4.6-4c2.4-3.2,3.7-7.2,3.8-11.2s-1.1-8.2-3.6-11.5c-1.2-1.7-2.9-3-4.7-4s-3.8-1.6-5.9-1.6s-4.2,0.5-5.9,1.6c-1.8,1-3.3,2.4-4.6,4.1C222.3,182.9,221.3,186.8,221.3,190.9z M221.4,190.9c0-2,0.3-4,1-5.8c0.6-1.9,1.7-3.5,2.9-5.1c2.4-3,6-5,10-5c3.9,0,7.4,2,9.9,5.1c2.4,3,3.6,6.9,3.7,10.8c0.1,3.8-1.1,8-3.5,11c-2.4,3.1-6.2,5.1-10.1,5c-3.8,0-7.5-2.1-10-5.1C223,198.8,221.4,194.8,221.4,190.9z" /></g><g display="inline" ><ellipse  fill="#FFFFFF" cx="165.8" cy="191.2" rx="13.9" ry="16.4" /><path d="M179.5,191.2c0,4-1.1,8.1-3.5,11.4c-1.2,1.7-2.8,3.1-4.6,4.1s-3.8,1.6-5.9,1.6c-2.1,0-4.1-0.6-5.8-1.7c-1.8-1-3.3-2.4-4.6-4c-2.4-3.2-3.7-7.2-3.8-11.2s1.1-8.2,3.6-11.5c1.2-1.7,2.9-3,4.7-4s3.8-1.6,5.9-1.6c2.1,0,4.2,0.5,5.9,1.6c1.8,1,3.3,2.4,4.6,4.1C178.5,183.2,179.5,187.2,179.5,191.2z M179.5,191.2c0-2-0.3-4-1-5.8c-0.6-1.9-1.7-3.5-2.9-5.1c-2.4-3-6-5-10-5c-3.9,0-7.4,2-9.9,5.1c-2.4,3-3.6,6.9-3.7,10.8c-0.1,3.8,1.1,8,3.5,11c2.4,3.1,6.2,5.1,10.1,5c3.8,0,7.5-2.1,10-5.1C178.3,199.2,179.5,195.1,179.5,191.2z" /></g>';
}
