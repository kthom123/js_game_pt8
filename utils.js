export function drawStatusText(context, input, player){
  context.font = '10px Helvetica';
  context.fillText('Last input: ' + input.lastKey, 10, 20);
  context.fillText('Active state: ' + player.currentState.state);
}
