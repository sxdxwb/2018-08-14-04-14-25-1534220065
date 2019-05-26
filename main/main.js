module.exports = function main(num) {
    var my_lights = ['._.', '...', '._.', '._.', '...', '._.', '._.', '._.', '._.', '._.',
        '|.|', '..|', '._|', '._|', '|_|', '|_.', '|_.', '..|', '|_|', '|_|',
        '|_|', '..|', '|_.', '._|', '..|', '._|', '|_|', '..|', '|_|', '..|'];
    var result = '';
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < num.length; j++) {
            result += my_lights[parseInt(num.charAt(j)) + i * 10];
            if(j < num.length-1){
                result += ' ';
            }
        }
        result += '\n';
    }
    return result;
};